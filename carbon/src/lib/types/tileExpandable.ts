import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-tileExpand',
  template: `
  <ibm-expandable-tile>
  <span class="bx--tile-content__above-the-fold" [style]="to.style1"> {{to.aboveText}} </span>
  <span class="bx--tile-content__below-the-fold" [style]="to.style2"> {{to.belowText}} </span>
</ibm-expandable-tile>
  `,
})
export class FormlyFieldTileExpand extends FieldType {

}