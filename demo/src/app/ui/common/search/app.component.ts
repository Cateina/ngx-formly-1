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
      key: 'Search',
      type: 'search',
      className:'bx--search',
      templateOptions: {
        expandable:true,
        theme: 'dark',
        placeholder: 'Search',
        autocomplete: 'on',
        disabled: false,
        size: 'sm',
        toolbar:false
      }
    },
    {
      key: 'Search1',
      type: 'search',
      className:'bx--toolbar',
      templateOptions: {
        expandable: true,
        theme: 'light',
        placeholder: 'Search Here',
        autocomplete: 'on',
        disabled: false,
        size: 'md',
        toolbar: true
      }
    },
    {
      key: 'Search1',
      type: 'search',
      className:'search',
      templateOptions: {
        expandable: false,
        theme: 'light',
        placeholder: 'Search Here',
        autocomplete: 'off',
        disabled: false,
        size: 'sm',
        toolbar: false
      }
    }
  ];
}