import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Course } from "../shared/models/Course";

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent {

  @Input() course: Course;
  @Input() index: number;
  @Output() delete: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router) {}

  onEdit() {
    this.router.navigate([`course-list/edit/${this.course.id}`]);
  }

  onDelete() {
    this.delete.emit();
  }

}
