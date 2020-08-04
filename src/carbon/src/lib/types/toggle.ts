import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-radio',
  template: `
    <ibm-toggle [formControl]="formControl" [onText]="to.onText" [offText]="to.offText" [checked]="to.checked">
    </ibm-toggle>
  `,
})
export class FormlyFieldToggle extends FieldType {}
