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
      key: 'File',
      type: 'fileUpload',
      templateOptions: {
        title:'File Upload',
        description: 'File Upload',
        dropText: 'Drag and drop files here or upload',
        accept:['.png', 'image/jpeg'],
        multiple:true,
        drop:true,
      },
    },
    {
      key: 'File1',
      type: 'fileUpload',
      templateOptions: {
        title:'File Upload 2',
        description: 'File Upload 2',
        dropText: 'Drag and drop files here or upload',
        accept:['.png', 'image/jpeg'],
        multiple:false,
        drop:false,
      },
    }
  ];
}