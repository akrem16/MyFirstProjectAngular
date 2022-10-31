import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsusComponent } from './corsus.component';

describe('CorsusComponent', () => {
  let component: CorsusComponent;
  let fixture: ComponentFixture<CorsusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorsusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
