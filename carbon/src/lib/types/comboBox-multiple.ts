import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-comboBoxMultiple',
  template: `
  <ibm-combo-box
  [items]="to.items"
  [size]="to.size"
  (selected)="onSelected()"
  (search)="onSearch($event)"
  type="multi"
 >
 <ibm-dropdown-list> {{to.items}}</ibm-dropdown-list>
</ibm-combo-box>
  `,
})
export class FormlyFieldComboBoxMultiple extends FieldType {
  onSelected(){

  }
  onSearch($event: any){

  }
}