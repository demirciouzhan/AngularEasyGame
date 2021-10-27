import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowComponentComponent } from './snow-component.component';

describe('SnowComponentComponent', () => {
  let component: SnowComponentComponent;
  let fixture: ComponentFixture<SnowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
