import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventproductsComponent } from './eventproducts.component';

describe('EventproductsComponent', () => {
  let component: EventproductsComponent;
  let fixture: ComponentFixture<EventproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
