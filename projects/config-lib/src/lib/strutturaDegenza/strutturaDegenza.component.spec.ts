/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StrutturaDegenzaComponent } from './strutturaDegenza.component';

describe('StrutturaDegenzaComponent', () => {
  let component: StrutturaDegenzaComponent;
  let fixture: ComponentFixture<StrutturaDegenzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrutturaDegenzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrutturaDegenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
