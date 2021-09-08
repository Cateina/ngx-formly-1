import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-comboBox',
  template: `
  <ibm-combo-box
  [items]="to.items"
  [size]="to.size"
  (selected)="onSelected()"
  (search)="onSearch($event)"
 >
 <ibm-dropdown-list> {{to.items}}</ibm-dropdown-list>
</ibm-combo-box>
  `,
})
export class FormlyFieldComboBox extends FieldType {
  onSelected(){

  }
  onSearch($event: any){

  }
}