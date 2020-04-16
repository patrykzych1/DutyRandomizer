import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetItemSurnameComponent } from './get-item-surname.component';

describe('GetItemSurnameComponent', () => {
  let component: GetItemSurnameComponent;
  let fixture: ComponentFixture<GetItemSurnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetItemSurnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetItemSurnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
