import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailForCodeFormComponent } from './email-for-code-form.component';

describe('EmailForCodeFormComponent', () => {
  let component: EmailForCodeFormComponent;
  let fixture: ComponentFixture<EmailForCodeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailForCodeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailForCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
