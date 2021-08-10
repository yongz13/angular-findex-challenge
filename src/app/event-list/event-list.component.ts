import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { EventsDataSource } from '../core/EventsDataSource';
import { TicketEventService } from '../core/ticket-event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns = ['name', 'url', 'info', 'pleaseNote'];
  dataSource!: EventsDataSource;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  notifier = new Subject()

  constructor(private ticketEventService: TicketEventService, public dialog: MatDialog ) {
  }

  ngOnInit() {
    this.dataSource = new EventsDataSource(this.ticketEventService);
    this.dataSource.loadEvents(this.paginator.pageIndex);
  }

  ngAfterViewInit() {

    this.sort.sortChange.pipe(takeUntil(this.notifier)).subscribe(() => {this.paginator.pageIndex = 0;});
    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
        tap(() => this.dataSource.loadEvents(this.paginator.pageIndex)),
        takeUntil(this.notifier)
    )
    .subscribe();

  }
  ngOnDestroy() {
      this.notifier.next()
      this.notifier.complete()
  }
}
