import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CourseListComponent } from './course-list.component';
import { CourseListService } from "../shared/providers/course-list.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  const routerSpy = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ CourseListComponent ],
      providers: [
        CourseListService,
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display a table`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table').textContent).toBeDefined();
  });

  it(`should go to create page`, () => {
    component.onAddCourse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/course-list/create']);
  });
});
