import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseListItemFormComponent } from "./course-list-item-form/course-list-item-form.component";

const routes: Routes = [
  {
    path: '',
    component: CourseListComponent
  },
  {
    path: 'create',
    component: CourseListItemFormComponent
  },
  {
    path: 'edit/:id',
    component: CourseListItemFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CourseListRoutingModule {}
