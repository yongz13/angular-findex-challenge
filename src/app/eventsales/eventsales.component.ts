import { Component, Input, OnInit } from '@angular/core';
import { EventSale } from '../model/EventSale';

@Component({
  selector: 'app-event-sales',
  templateUrl: './eventsales.component.html',
  styleUrls: ['./eventsales.component.scss']
})
export class EventsalesComponent implements OnInit {

  @Input() sales: EventSale | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
