import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDetailMainComponent } from './store-detail-main.component';

describe('StoreDetailMainComponent', () => {
  let component: StoreDetailMainComponent;
  let fixture: ComponentFixture<StoreDetailMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDetailMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDetailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
