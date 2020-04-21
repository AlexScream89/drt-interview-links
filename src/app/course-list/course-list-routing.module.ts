import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CourseListComponent } from "./course-list/course-list.component";

const routes: Routes = [
  {
    path: '',
    component: CourseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CourseListRoutingModule {}
