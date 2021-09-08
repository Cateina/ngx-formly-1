import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-button',
  template: `
  <button [ibmButton]="to.ibmButton" [size]="to.size" [disabled]="to.disabled" >{{to.label}}
  </button>
  `,
})
export class FormlyFieldButton extends FieldType {
}