import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailShareComponent } from './store-detail-share.component';

describe('StoreDetailShareComponent', () => {
  let component: StoreDetailShareComponent;
  let fixture: ComponentFixture<StoreDetailShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
