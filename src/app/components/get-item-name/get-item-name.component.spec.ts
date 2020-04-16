import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetItemNameComponent } from './get-item-name.component';

describe('GetItemNameComponent', () => {
  let component: GetItemNameComponent;
  let fixture: ComponentFixture<GetItemNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetItemNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetItemNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
