import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-radio',
  template: `
    <ibm-radio-group
      [formControl]="formControl"
    >
      <ibm-radio *ngFor="let option of to.options" value="{{ option.value }}" [checked]="option.value">
        {{ option.label }}
      </ibm-radio>
    </ibm-radio-group>
  `,
})
export class FormlyFieldRadio extends FieldType {
  defaultOptions = {
    templateOptions: { options: [] },
  };
}
