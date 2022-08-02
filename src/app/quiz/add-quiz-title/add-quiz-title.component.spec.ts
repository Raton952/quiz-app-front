import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuizTitleComponent } from './add-quiz-title.component';

describe('AddQuizTitleComponent', () => {
  let component: AddQuizTitleComponent;
  let fixture: ComponentFixture<AddQuizTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuizTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQuizTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
