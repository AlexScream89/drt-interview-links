import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListSearchComponent } from './course-list-search.component';
import { ReactiveFormsModule } from "@angular/forms";

describe('CourseListSearchComponent', () => {
  let component: CourseListSearchComponent;
  let fixture: ComponentFixture<CourseListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
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

  it(`should display a #filter input`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#filter').textContent).toBeDefined();
  });
});
