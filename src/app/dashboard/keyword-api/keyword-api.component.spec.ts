import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordApiComponent } from './keyword-api.component';

describe('KeywordApiComponent', () => {
  let component: KeywordApiComponent;
  let fixture: ComponentFixture<KeywordApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
