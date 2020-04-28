import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFoodListComponent } from './app-food-list.component';

describe('AppFoodListComponent', () => {
  let component: AppFoodListComponent;
  let fixture: ComponentFixture<AppFoodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFoodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
