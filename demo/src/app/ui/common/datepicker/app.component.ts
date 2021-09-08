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
      key: 'date_of_birth',
      type: 'datepicker',
      templateOptions: {
        value: 'Date of birth (DATEPICKER NEEDS SOME WORK)',
        required: true,
        theme: 'light',
        labels: 'Date of birth (DATEPICKER NEEDS SOME WORK)',
        dateFormat: 'm/d/Y',
        placeholders: 'mm/dd/yyyy',
        valueChange: ($event:any) => console.log('You clicked me!'),
      },
    },
    {
      key: 'date_of_birth',
      type: 'datepicker',
      templateOptions: {
        value: 'Date of birth (DATEPICKER NEEDS SOME WORK)',
        required: true,
        language: 'en',
        dateFormat: 'm/d/Y',
        labels: 'Date of birth (DATEPICKER NEEDS SOME WORK)',
        placeholders: 'mm/dd/yyyy',
        theme: 'dark',
        disableds:false,
        valueChange: ($event:any) => console.log('You clicked me!'),
      },
    },
    {
      key: 'date_of_birth',
      type: 'datepicker',
      templateOptions: {
        value: 'from date',
        required: true,
        language: 'en',
        labels: 'Date of birth (DATEPICKER NEEDS SOME WORK)',
        dateFormat: 'm/d/Y',
        placeholders: 'mm/dd/yyyy',
        theme: 'dark',
        disableds: false,
        range: true,
        rangeLabel: 'date to',
        valueChange: ($event:any) => console.log('You clicked me!'),
      },
    },
    {
      key: 'date_of_birth',
      type: 'datepicker',
      templateOptions: {
        labels: 'Date of birth (DATEPICKER NEEDS SOME WORK)',
        value: 'Date of birth (DATEPICKER NEEDS SOME WORK)',
        required: true,
        language: 'en',
        dateFormat: 'm/d/Y',
        placeholders: 'mm/dd/yyyy',
        theme: 'light',
        disableds:true,
      },
    },
    {
      key: 'date_of_birth',
      type: 'datepicker',
      templateOptions: {
        value: 'Date of birth (DATEPICKER NEEDS SOME WORK)',
        labels: 'Date of birth (DATEPICKER NEEDS SOME WORK)',
        required: true,
        language: 'en',
        dateFormat: 'm/d/Y',
        placeholders: 'mm/dd/yyyy',
        theme: 'dark',
        disableds: false,
        valueChange: ($event:any) => open(),
      },
    },
  ];
}