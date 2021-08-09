import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { EventDetail } from '../model/EventDetail';
import { PagedTicketEvents } from '../model/PagedTicketEvents';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TicketEventService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getEvents(pageIndex: number): Observable<PagedTicketEvents> {
    return this.httpClient.get<any>(this.createCompleteUrl(pageIndex))
    .pipe(
      map((event: { _embedded: { events: any; }, page: {totalPages: number} }) => ({events: event._embedded.events, totalPages: event.page.totalPages})),
      retry(1),
      catchError(this.httpError)
    )
  }

  getEventDetail(id:string) : Observable<EventDetail> {
    return this.httpClient.get<EventDetail>(this.createCompleteUrl(0, id))
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

}
