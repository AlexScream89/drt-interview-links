import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { catchError } from "rxjs/operators";
import { of, throwError } from "rxjs";

@Injectable()
export class CourseListService {

  constructor(private httpClient: HttpClient) {}

  getAllCourses(query: string = '') {
    return this.httpClient.get(`${environment.apiUrl}/courses?q=${query}`)
      .pipe(
        catchError(error => of(throwError(error)))
      );
  }

  getCourse(id: number) {
    return this.httpClient.get(`${environment.apiUrl}/courses/${id}`)
      .pipe(
        catchError(error => of(throwError(error)))
      );
  }

  addCourse(course) {
    return this.httpClient.post(`${environment.apiUrl}/courses`, course)
      .pipe(
        catchError(error => of(throwError(error)))
      );
  }

  editCourse(id, course) {
    return this.httpClient.patch(`${environment.apiUrl}/courses/${id}`, course)
      .pipe(
        catchError(error => of(throwError(error)))
      );
  }

  deleteCourse(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}/courses/${id}`)
      .pipe(
        catchError(error => of(throwError(error)))
      );
  }

}
