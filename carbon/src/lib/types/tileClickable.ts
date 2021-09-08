import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-tileClick',
  template: `
  <ibm-clickable-tile [href]="to.href" [target]="to.target" [route]="to.route" >
  {{to.description}} <code>{{to.routeTitle}} </code>
</ibm-clickable-tile>
  `,
})
export class FormlyFieldTileClick extends FieldType {

}