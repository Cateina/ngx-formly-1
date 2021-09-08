import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-tile',
  template: `
  <ibm-tile > {{to.label}} </ibm-tile>
  `,
})
export class FormlyFieldTile extends FieldType {

}