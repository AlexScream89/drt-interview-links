import { Component, OnInit } from '@angular/core';
import { CourseListService } from "../shared/providers/course-list.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses;

  constructor(private courseListService: CourseListService) {}

  ngOnInit() {
    this.getAllCourses();
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
      .subscribe(courses => this.courses = courses);
  }

}
