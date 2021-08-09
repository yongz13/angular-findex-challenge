import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetail } from '../model/EventDetail';
import { TicketEventService } from './ticket-event.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolver implements Resolve<EventDetail> {

  constructor(private ticketEventService:TicketEventService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EventDetail> {
    return  this.ticketEventService.getEventDetail(route.params['id']);
  }

}
