/// <reference path="./testing/custom-matcher.d.ts"/>

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PersonCustomMatchers } from './testing/custom-matcher';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    jasmine.addMatchers(PersonCustomMatchers);
  });

  it('shoulw test custom matcher', () => {
    const x = 108;

    expect(x).toBeOlderThan(100);
  });
});
