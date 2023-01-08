import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TostarComponent } from './tostar.component';

describe('TostarComponent', () => {
  let component: TostarComponent;
  let fixture: ComponentFixture<TostarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TostarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TostarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
