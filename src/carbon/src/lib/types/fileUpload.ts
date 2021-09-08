import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-carbon-fileUpload',
  template: `
  <ibm-file-uploader
  [title]="to.title"
  [accept]="to.accept"
  [multiple]="to.multiple"
  [dropText]="to.dropText"
  [drop]="to.drop">
</ibm-file-uploader>
  `,
})
export class FormlyFieldFileUpload extends FieldType {
}