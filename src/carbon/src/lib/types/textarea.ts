import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-textarea',
  templateUrl: './textarea.html',
})
export class FormlyFieldTextArea extends FieldType {}
// <textarea
//   [class.ng-dirty]="showError"
//   [formControl]="formControl"
//   [formlyAttributes]="field" ></textarea>
