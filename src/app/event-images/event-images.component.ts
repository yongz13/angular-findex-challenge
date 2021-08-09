import { Component, Input, OnInit } from '@angular/core';
import { EventImage } from '../model/EventImage';

@Component({
  selector: 'app-event-images',
  templateUrl: './event-images.component.html',
  styleUrls: ['./event-images.component.scss']
})
export class EventImagesComponent implements OnInit {

  @Input() images: EventImage[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
