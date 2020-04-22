import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListSearchComponent } from './course-list-search.component';

describe('CourseListSearchComponent', () => {
  let component: CourseListSearchComponent;
  let fixture: ComponentFixture<CourseListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
