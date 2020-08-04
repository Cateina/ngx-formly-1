import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-datetime',
  template: `
    <ibm-date-picker
      [placeholder]="to.placeholder"
      [invalid]="showError"
      [invalidText]="showError"
      [formControl]="formControl"
    >
    </ibm-date-picker>
  `,
})
export class FormlyFieldDatepicker extends FieldType {}

//     <ion-datetime
//       [cancelText]="to.cancelText"
//       [dayNames]="to.dayNames"
//       [dayShortNames]="to.dayShortNames"
//       [dayValues]="to.dayValues"
//       [displayFormat]="to.displayFormat"
//       [doneText]="to.doneText"
//       [hourValues]="to.hourValues"
//       [minuteValues]="to.minuteValues"
//       [monthNames]="to.monthNames"
//       [monthShortNames]="to.monthShortNames"
//       [monthValues]="to.monthValues"
//       [pickerFormat]="to.pickerFormat"
//       [pickerOptions]="to.pickerOptions"
//       [yearValues]="to.yearValues"
//       [min]="to.min"
//       [max]="to.max"
//       [formControl]="formControl"
//       [ionFormlyAttributes]="field">
//     </ion-datetime>
