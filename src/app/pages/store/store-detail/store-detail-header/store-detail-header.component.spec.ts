import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailHeaderComponent } from './store-detail-header.component';

describe('StoreDetailHeaderComponent', () => {
  let component: StoreDetailHeaderComponent;
  let fixture: ComponentFixture<StoreDetailHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
