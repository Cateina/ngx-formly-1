import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-drowpdown',
  template: `
  <ibm-dropdown
  [label]="to.labels"
  [helperText]="to.helperText"
  [size]="to.size"
  [invalid]="to.invalid"
  [invalidText]="to.invalidText"
  [theme]="to.theme"
  [placeholder]="to.placeholders"
[type]="to.types"
  (selected)="($event)"
  (onClose)="($event)">
  <ibm-dropdown-list [items]="to.items"></ibm-dropdown-list>
</ibm-dropdown>
  `,
})
export class FormlyFieldDropDown extends FieldType {
}