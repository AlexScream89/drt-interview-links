import { Component, OnInit } from '@angular/core';
import { CourseListService } from "../shared/providers/course-list.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses$;

  constructor(private courseListService: CourseListService) {}

  ngOnInit() {
    this.getAllCourses();
  }

  private getAllCourses() {
    this.courses$ = this.courseListService.getAllCourses();
  }

}
