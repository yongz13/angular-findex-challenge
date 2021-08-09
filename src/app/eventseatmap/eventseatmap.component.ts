import { Component, Input, OnInit } from '@angular/core';
import { EventSeatMap } from '../model/EventSeatMap';

@Component({
  selector: 'app-event-seat-map',
  templateUrl: './eventseatmap.component.html',
  styleUrls: ['./eventseatmap.component.scss']
})
export class EventseatmapComponent implements OnInit {

  @Input() seatmap: EventSeatMap | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
