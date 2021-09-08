import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-input',
  templateUrl: './input.html',
})
export class FormlyFieldInput extends FieldType {
}
// <input type="number" pInputText [formControl]="formControl" [formlyAttributes]="field" [class.ng-dirty]="showError">
