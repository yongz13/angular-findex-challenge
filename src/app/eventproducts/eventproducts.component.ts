import { Component, Input, OnInit } from '@angular/core';
import { EventProduct } from '../model/EventProduct';

@Component({
  selector: 'app-event-products',
  templateUrl: './eventproducts.component.html',
  styleUrls: ['./eventproducts.component.scss']
})
export class EventproductsComponent implements OnInit {

  @Input() products: EventProduct[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
