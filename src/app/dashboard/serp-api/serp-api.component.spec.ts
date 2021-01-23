import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerpApiComponent } from './serp-api.component';

describe('SerpApiComponent', () => {
  let component: SerpApiComponent;
  let fixture: ComponentFixture<SerpApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerpApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerpApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
