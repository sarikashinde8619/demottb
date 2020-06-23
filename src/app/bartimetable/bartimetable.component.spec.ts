import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartimetableComponent } from './bartimetable.component';

describe('BartimetableComponent', () => {
  let component: BartimetableComponent;
  let fixture: ComponentFixture<BartimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
