import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemFormComponent } from './course-list-item-form.component';

describe('CourseListItemEditComponent', () => {
  let component: CourseListItemFormComponent;
  let fixture: ComponentFixture<CourseListItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
