import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsUpdatePageComponent } from './product-details-update-page.component';

describe('ProductDetailsUpdatePageComponent', () => {
  let component: ProductDetailsUpdatePageComponent;
  let fixture: ComponentFixture<ProductDetailsUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsUpdatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
