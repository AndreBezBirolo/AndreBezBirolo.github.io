import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrodutoryComponent } from './introdutory.component';

describe('IntrodutoryComponent', () => {
  let component: IntrodutoryComponent;
  let fixture: ComponentFixture<IntrodutoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntrodutoryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrodutoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
