import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-tagsFilter',
  styleUrls: ['./tags.scss'],
  template: `
  <ibm-tag-filter
  [className]="to.className"
  [title]="to.title"
> {{to.label}} </ibm-tag-filter>
  `,
})
export class FormlyFieldTagsFilter extends FieldType {

}