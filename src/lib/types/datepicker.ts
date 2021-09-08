import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-datetime',
  template: `
  <ibm-date-picker
  [label]="to.labels"
  [placeholder]="to.placeholders"
  [language]="to.language"
  [theme]="to.theme"
  [disabled]="to.disableds"
  [invalid]="to.invalid"
  [invalidText]="to.invalidText"
  [dateFormat]="to.dateFormat"
  (valueChange)="to.valueChange"
  [value]="to.value"
  [range]="to.range"
  [rangeLabel]="to.rangeLabel"
  >
</ibm-date-picker>
  `,
})
export class FormlyFieldDatepicker extends FieldType {
  valueChange($event:any) {
    if (this.to.valueChange) {
      this.to.valueChange($event);
    }
  }	
}


