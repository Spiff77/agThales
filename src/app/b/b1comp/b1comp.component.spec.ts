import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B1compComponent } from './b1comp.component';

describe('B1compComponent', () => {
  let component: B1compComponent;
  let fixture: ComponentFixture<B1compComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B1compComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B1compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
