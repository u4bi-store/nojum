import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailMainHeaderComponent } from './store-detail-main-header.component';

describe('StoreDetailMainHeaderComponent', () => {
  let component: StoreDetailMainHeaderComponent;
  let fixture: ComponentFixture<StoreDetailMainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailMainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
