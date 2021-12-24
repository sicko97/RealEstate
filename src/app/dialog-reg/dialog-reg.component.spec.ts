import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegComponent } from './dialog-reg.component';

describe('DialogRegComponent', () => {
  let component: DialogRegComponent;
  let fixture: ComponentFixture<DialogRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
