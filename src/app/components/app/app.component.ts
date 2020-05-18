import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export default class AppComponent implements OnInit {
  title = 'country-facts';

  loadingInProgress$: Observable<boolean>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit(): void {
    this.loadingInProgress$ = this.store.select(fromStore.selectLoading);
  }
}
