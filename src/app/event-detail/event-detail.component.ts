import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDetail } from '../model/EventDetail';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  event!: EventDetail;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.route.snapshot.data["event"];
  }

}
