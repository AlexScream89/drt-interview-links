import { Component, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { CourseListService } from "../shared/providers/course-list.service";
import { Course } from "../shared/models/Course";

@Component({
  selector: 'app-course-list-item-form',
  templateUrl: './course-list-item-form.component.html',
  styleUrls: ['./course-list-item-form.component.css']
})
export class CourseListItemFormComponent implements OnInit, OnDestroy {

  course: Course;
  form: FormGroup;
  isEditPage = false;
  unsubscribe$ = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private courseListService: CourseListService
  ) {}

  ngOnInit() {
    this.createForm();
    this.getRouteParams();
  }

  getRouteParams() {
    this.route.params
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(params => {
        if (!params || !params.id) {
          return;
        }
        this.isEditPage = !!params.id;
        this.getCourse(+params.id);
      });
  }

  getCourse(id: number) {
    this.courseListService.getCourse(id)
      .subscribe((course: Course) => {
        this.course = course;
        this.createForm(course);
      });
  }

  submitForm() {
    if (this.isEditPage) {
      this.onEditCourse();
    } else {
      this.onAddCourse();
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private onAddCourse() {
    this.courseListService.addCourse(this.form.value)
      .subscribe(() => this.router.navigate(['/course-list']));
  }

  private onEditCourse() {
    this.courseListService.editCourse(this.course.id, this.form.value)
      .subscribe(() => this.router.navigate(['/course-list']));
  }

  private createForm(course = null) {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(course ? course.title : ''),
      duration: this.formBuilder.control(course ? course.duration : ''),
      durationUnit: this.formBuilder.control(course ? course.durationUnit : ''),
      description: this.formBuilder.control(course ? course.description : '')
    });
  }

}
