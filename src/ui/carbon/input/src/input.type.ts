import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
    <input
      *ngIf="to.type !== 'number'; else numberTmp"
      ibmText
      [formControl]="formControl"
      [type]="to.type || 'text'"
      [formlyAttributes]="field"
    />
    <ng-template #numberTmp>
      <ibm-number></ibm-number>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInput extends FieldType {}
