import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventseatmapComponent } from './eventseatmap.component';

describe('EventseatmapComponent', () => {
  let component: EventseatmapComponent;
  let fixture: ComponentFixture<EventseatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventseatmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventseatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
