import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { debounceTime, distinctUntilChanged, takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-course-list-search',
  templateUrl: './course-list-search.component.html',
  styleUrls: ['./course-list-search.component.css']
})
export class CourseListSearchComponent implements OnInit, OnDestroy {

  @Output() filterChange: EventEmitter<string> = new EventEmitter();

  form: FormGroup;
  unsubscribe$ = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.onFilterChange();
  }

  onFilterChange() {
    this.form.get('filter').valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(value => this.filterChange.emit(value));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      filter: ''
    });
  }

}
