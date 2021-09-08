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
      key: 'Breadcrumb',
      type: 'breadCrumb',
      templateOptions: {
        noTrailingSlash: true,
        items: [
          {
            href: '/',
            breadcrumbItem:'search'
          },
          {
            href: '/',
            breadcrumbItem:'datepicker'
          },
        ]
      }
    },
    {
      key: 'Breadcrumb',
      type: 'breadCrumb',
      templateOptions: {
        noTrailingSlash: true,
        items: [
          {
            href: '/',
            breadcrumbItem:'tile'
          },
          {
            href: '/',
            breadcrumbItem: 'dropdown',
            current:true
          },
          {
            href: '/',
            breadcrumbItem:'datepicker'
          },
        ]
      }
    }
  ];
}