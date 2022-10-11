import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusanComponent } from './susan.component';

describe('SusanComponent', () => {
  let component: SusanComponent;
  let fixture: ComponentFixture<SusanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SusanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
