import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemFormComponent } from './course-list-item-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { CourseListService } from "../shared/providers/course-list.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('CourseListItemFormComponent', () => {
  let component: CourseListItemFormComponent;
  let fixture: ComponentFixture<CourseListItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ CourseListItemFormComponent ],
      providers: [CourseListService]
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
