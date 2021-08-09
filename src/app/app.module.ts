import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventImagesComponent } from './event-images/event-images.component';
import { EventsalesComponent } from './eventsales/eventsales.component';
import { EventseatmapComponent } from './eventseatmap/eventseatmap.component';
import { EventproductsComponent } from './eventproducts/eventproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailComponent,
    EventListComponent,
    EventImagesComponent,
    EventsalesComponent,
    EventseatmapComponent,
    EventproductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
