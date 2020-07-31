import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-form-field',
  template: `
    <ibm-label>
      <ng-container *ngIf="to.label && to.hideLabel !== true">
        {{ to.label }}
      </ng-container>
    </ibm-label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperFormField extends FieldWrapper {
  // SYLTODO in above
  // <nz-form-item>
  //   <ng-container *ngIf="to.label && to.hideLabel !== true">
  //     <nz-form-label [nzRequired]="to.required && to.hideRequiredMarker !== true" [nzFor]="id">
  //       {{ to.label }}
  //     </nz-form-label>
  //   </ng-container>
  //   <nz-form-control [nzValidateStatus]="errorState" [nzErrorTip]="errorTpl">
  //     <ng-container #fieldComponent></ng-container>
  //     <ng-template #errorTpl let-control>
  //       <formly-validation-message [field]="field"></formly-validation-message>
  //     </ng-template>
  //   </nz-form-control>
  // </nz-form-item>
  get errorState() {
    return this.showError ? 'error' : '';
  }
}
