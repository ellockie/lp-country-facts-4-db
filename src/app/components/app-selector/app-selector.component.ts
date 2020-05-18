import {
  Component, Input, Output, EventEmitter, OnChanges, SimpleChanges,
} from '@angular/core';
// eslint-disable-next-line no-unused-vars
import { MatSelectChange } from '@angular/material/select';

import { AreaSelectorOption } from '../../models/display.model';


/**
 * @title General select control
 */
@Component({
  selector: 'app-selector',
  templateUrl: './app-selector.component.html',
})
export default class AppDbSelectorComponent implements OnChanges {
  @Input() label: string;

  @Input() items: AreaSelectorOption[];

  @Input() disabled: boolean;

  @Output() selectionChange = new EventEmitter();

  selectedItem: string = null;

  // Resests the selectedItem item on items change
  ngOnChanges(changes: SimpleChanges) {
    this.selectedItem = null;
  }

  valueChanged(selectChange: MatSelectChange) {
    this.selectionChange.emit(selectChange.value);
  }
}
