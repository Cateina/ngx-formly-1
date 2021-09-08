import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-tileSelect',
  template: `
  <ibm-tile-group (selected)="($event)" [multiple]="to.multiple">
  <ibm-selection-tile *ngFor="let data of to.values" [selected]="data.selected" >{{data.value}}</ibm-selection-tile>
</ibm-tile-group>
  `,
})
export class FormlyFieldTileSelect extends FieldType {

}