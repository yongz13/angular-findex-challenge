import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventImagesComponent } from './event-images.component';

describe('EventImagesComponent', () => {
  let component: EventImagesComponent;
  let fixture: ComponentFixture<EventImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
