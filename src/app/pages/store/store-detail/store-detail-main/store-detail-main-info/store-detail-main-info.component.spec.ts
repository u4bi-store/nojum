import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailMainInfoComponent } from './store-detail-main-info.component';

describe('StoreDetailMainInfoComponent', () => {
  let component: StoreDetailMainInfoComponent;
  let fixture: ComponentFixture<StoreDetailMainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailMainInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
