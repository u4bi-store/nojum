import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailInfoComponent } from './store-detail-info.component';

describe('StoreDetailInfoComponent', () => {
  let component: StoreDetailInfoComponent;
  let fixture: ComponentFixture<StoreDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
