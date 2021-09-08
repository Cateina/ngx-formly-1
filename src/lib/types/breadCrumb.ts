import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-breadCrumb',
  template: `
  <ibm-breadcrumb [noTrailingSlash]="to.noTrailingSlash">
  <ibm-breadcrumb-item *ngFor="let data of to.items" [href]="data.href" [current]="data.current">
          {{data.breadcrumbItem}}
      </ibm-breadcrumb-item>
  </ibm-breadcrumb>
  `,
})
export class FormlyFieldBreadCrumb extends FieldType {
}