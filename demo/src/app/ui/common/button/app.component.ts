import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Button',
      type: 'button',
      templateOptions: {
        label: 'Submit',
        size: 'sm',
        ibmButton: 'primary',
        disabled: false,
        iconOnly:false
      },
    },
    {
      key: 'Button',
      type: 'button',
      className:'buttonClass',
      templateOptions: {
        label: 'Submit',
        size: 'lg',
        ibmButton: 'secondary',
        disabled: false,
        iconOnly:false
      },
    }
  ];
}