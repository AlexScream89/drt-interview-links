import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { catchError } from "rxjs/operators";
import { of, throwError } from "rxjs";

@Injectable()
export class CourseListService {

  constructor(private httpClient: HttpClient) {}

  getAllCourses() {
    return this.httpClient.get(`${environment.apiUrl}/courses`)
      .pipe(
        catchError(error => of(throwError(error)))
      );
  }

}
