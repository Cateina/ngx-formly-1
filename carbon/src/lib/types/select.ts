import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-select',
  template: `
    <ibm-select
      [helperText]="to.description"
      [invalid]="showError"
      [invalidText]="showError"
      [formControl]="formControl"
    >
      <option *ngFor="let option of to.options" value="{{ option.value }}">
        {{ option.label }}
      </option>
    </ibm-select>
  `,
})
export class FormlyFieldSelect extends FieldType {
  defaultOptions = {
    templateOptions: { options: [] },
  };
}
