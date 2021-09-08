import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-search',
  template: `
  <ibm-search
  [theme]="to.theme"
  [placeholder]="to.placeholder"
  [autocomplete]="to.autocomplete"
  [size]="to.size"
[toolbar]="to.toolbar"
>
</ibm-search>
  `,
})
export class FormlyFieldSearch extends FieldType {
}