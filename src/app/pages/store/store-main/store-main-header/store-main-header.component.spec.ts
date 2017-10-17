import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMainHeaderComponent } from './store-main-header.component';

describe('StoreHeaderComponent', () => {
  let component: StoreMainHeaderComponent;
  let fixture: ComponentFixture<StoreMainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreMainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
