import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { SortDirection } from "@angular/material/sort";
import { BehaviorSubject, Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { TicketEvent } from "../model/TicketEvent";
import { TicketEventService } from "./ticket-event.service";

export class EventsDataSource extends DataSource<any> {

  private eventsSubject = new BehaviorSubject<TicketEvent[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    public totalPages = 0;

    constructor(private ticketEventService: TicketEventService) {
    super();
  }

  loadEvents(pageIndex:number) {

    this.loadingSubject.next(true);

    this.ticketEventService.getEvents(pageIndex).pipe(
        finalize(() => this.loadingSubject.next(false))
    )
    .subscribe(event => {
      this.eventsSubject.next(event.events);
      this.totalPages = event.totalPages;
    });

    }

    connect(collectionViewer: CollectionViewer): Observable<TicketEvent[]> {
      console.log("Connecting data source");
      return this.eventsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
      this.eventsSubject.complete();
      this.loadingSubject.complete();
    }
}
