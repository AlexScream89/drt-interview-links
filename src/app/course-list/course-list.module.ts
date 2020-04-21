import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListRoutingModule } from "./course-list-routing.module";
import { CourseListService } from "./shared/providers/course-list.service";
import { HttpClientModule } from "@angular/common/http";
import { CourseListItemComponent } from './course-list-item/course-list-item.component';

@NgModule({
  declarations: [CourseListComponent, CourseListItemComponent],
  imports: [
    CommonModule,
    CourseListRoutingModule,
    HttpClientModule
  ],
  providers: [CourseListService]
})
export class CourseListModule { }
