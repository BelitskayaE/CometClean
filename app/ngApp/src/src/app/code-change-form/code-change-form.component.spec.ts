import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeChangeFormComponent } from './code-change-form.component';

describe('CodeChangeFormComponent', () => {
  let component: CodeChangeFormComponent;
  let fixture: ComponentFixture<CodeChangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeChangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
