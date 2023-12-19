/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StanzeLettiComponent } from './StanzeLetti.component';

describe('StanzeLettiComponent', () => {
  let component: StanzeLettiComponent;
  let fixture: ComponentFixture<StanzeLettiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanzeLettiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanzeLettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
