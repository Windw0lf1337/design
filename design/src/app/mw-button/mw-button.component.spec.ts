import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MwButtonComponent } from './mw-button.component';

describe('MwButtonComponent', () => {
  let component: MwButtonComponent;
  let fixture: ComponentFixture<MwButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MwButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MwButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
