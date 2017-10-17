import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMainFooterComponent } from './store-main-footer.component';

describe('StoreMainFooterComponent', () => {
  let component: StoreMainFooterComponent;
  let fixture: ComponentFixture<StoreMainFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreMainFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreMainFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
