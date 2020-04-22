import { Component, OnInit } from '@angular/core';
import { CourseListService } from "../shared/providers/course-list.service";
import { Router } from "@angular/router";
import { Course } from "../shared/models/Course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[];

  constructor(
    private courseListService: CourseListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllCourses();
  }

  onAddCourse() {
    this.router.navigate(['/course-list/create']);
  }

  onFilterChange(filter: string) {
    this.getAllCourses(filter);
  }

  onDeleteCourse(id: number, index: number) {
    this.courseListService.deleteCourse(id)
      .subscribe(() => this.courses.splice(index, 1));
  }

  private getAllCourses(filter: string = '') {
    this.courseListService.getAllCourses(filter)
      .subscribe((courses: Course[]) => this.courses = courses);
  }

}
