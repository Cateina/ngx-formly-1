import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-datetime',
  template: `
    <ibm-timepicker
      [placeholder]="to.placeholder"
      [formControl]="formControl"
    >
      <ibm-timepicker-select display="inline">
        <option selected value="AM">AM</option>
        <option value="PM">PM</option>
      </ibm-timepicker-select>
    </ibm-timepicker>

  `,
})
export class FormlyFieldTimepicker extends FieldType {
}
    // <ibm-date-picker
    //   [placeholder]="to.placeholder"
    //   [invalid]="showError"
    //   [invalidText]="showError"
    //   [formControl]="formControl"
    // >
    // </ibm-date-picker>
