import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAwesomeComponent } from './template-awesome.component';

describe('TemplateAwesomeComponent', () => {
  let component: TemplateAwesomeComponent;
  let fixture: ComponentFixture<TemplateAwesomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAwesomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
