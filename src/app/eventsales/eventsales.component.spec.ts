import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsalesComponent } from './eventsales.component';

describe('EventsalesComponent', () => {
  let component: EventsalesComponent;
  let fixture: ComponentFixture<EventsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
