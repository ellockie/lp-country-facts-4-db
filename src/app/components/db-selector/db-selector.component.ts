import {
  Component, Input, Output, EventEmitter,
} from '@angular/core';
// eslint-disable-next-line no-unused-vars
import { MatSelectChange } from '@angular/material/select';

import { AreaSelectorOption } from '../../models/display.model';


/**
 * @title General select control
 */
@Component({
  selector: 'app-selector',
  templateUrl: './db-selector.component.html',
})
export default class AppDbSelectorComponent {
  @Input() label: string;

  @Input() items: AreaSelectorOption[];

  @Input() disabled: boolean;

  @Output() selectionChange = new EventEmitter();

  valueChanged(selectChange: MatSelectChange) {
    this.selectionChange.emit(selectChange.value);
  }
}
