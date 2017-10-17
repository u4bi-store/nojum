import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreToolbarComponent } from './store-toolbar.component';

describe('StoreToolbarComponent', () => {
  let component: StoreToolbarComponent;
  let fixture: ComponentFixture<StoreToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
