import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedWaysComponent } from './speed-ways.component';

describe('SpeedWaysComponent', () => {
  let component: SpeedWaysComponent;
  let fixture: ComponentFixture<SpeedWaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedWaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedWaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
