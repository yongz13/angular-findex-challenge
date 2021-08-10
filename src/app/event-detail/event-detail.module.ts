import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventproductsComponent } from '../eventproducts/eventproducts.component';
import { EventImagesComponent } from '../event-images/event-images.component';
import { EventsalesComponent } from '../eventsales/eventsales.component';
import { EventseatmapComponent } from '../eventseatmap/eventseatmap.component';
import { EventDetailComponent } from './event-detail.component';
import { MaterialModule } from '../material.module';
import { EventDetailRoutingModule } from './event-detail-routing.module';



@NgModule({
  declarations: [
    EventDetailComponent,
    EventImagesComponent,
    EventsalesComponent,
    EventseatmapComponent,
    EventproductsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    EventDetailRoutingModule
  ]
})
export class EventDetailModule { }
