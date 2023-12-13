/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddBarComponent } from './addBar.component';

describe('AddBarComponent', () => {
  let component: AddBarComponent;
  let fixture: ComponentFixture<AddBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
