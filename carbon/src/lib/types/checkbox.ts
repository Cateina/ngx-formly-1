import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-checkbox',
  template: `
    <ibm-checkbox
      [formControl]="formControl"
      [formlyAttributes]="field"
      (onChange)="to.change && to.change(field, $event)">
	  {{ to.label }}
    </ibm-checkbox>
  `,
})
export class FormlyFieldCheckbox extends FieldType {
  defaultOptions = {
    templateOptions: {
      hideLabel: true,
    },
  };
}
