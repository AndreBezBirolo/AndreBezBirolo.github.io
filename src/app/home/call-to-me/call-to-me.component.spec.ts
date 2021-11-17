import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToMeComponent } from './call-to-me.component';

describe('CallToMeComponent', () => {
  let component: CallToMeComponent;
  let fixture: ComponentFixture<CallToMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallToMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
