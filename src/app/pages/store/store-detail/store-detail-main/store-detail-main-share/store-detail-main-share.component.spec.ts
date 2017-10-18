import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailMainShareComponent } from './store-detail-main-share.component';

describe('StoreDetailMainShareComponent', () => {
  let component: StoreDetailMainShareComponent;
  let fixture: ComponentFixture<StoreDetailMainShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailMainShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailMainShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
