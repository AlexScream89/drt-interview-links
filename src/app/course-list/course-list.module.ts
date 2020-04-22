import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListRoutingModule } from "./course-list-routing.module";
import { CourseListService } from "./shared/providers/course-list.service";
import { HttpClientModule } from "@angular/common/http";
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseListSearchComponent } from './course-list-search/course-list-search.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CourseListItemFormComponent } from './course-list-item-form/course-list-item-form.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    CourseListSearchComponent,
    CourseListItemFormComponent
  ],
  imports: [
    CommonModule,
    CourseListRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CourseListService]
})
export class CourseListModule { }
