import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-tags',
  styleUrls: ['./tags.scss'],
  template: `
  <ibm-tag [class]="to.className" > {{to.label}} </ibm-tag>
  `,
})
export class FormlyFieldTags extends FieldType {

}