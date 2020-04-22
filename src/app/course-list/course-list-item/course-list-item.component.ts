import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent {

  @Input() course;
  @Input() index;
  @Output() delete: EventEmitter<void> = new EventEmitter();

  onDelete() {
    this.delete.emit();
  }

}
