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
      key: 'dropdown',
      type: 'dropdown',
      templateOptions: {
        labels: 'Dropdown',
        size: 'sm',
        dropUp: false,
        theme:'dark',
        placeholders: 'Select',
        items: [
          { content: "one", id: 0 },
          { content: "two", id: 1 },
          { content: "three", id: 2 },
          { content: "four", id: 3 }
        ],
      }
    },
    {
      key: 'dropdown1',
      type: 'dropdown',
      templateOptions: {
        labels: 'Dropdown Multiselect',
        size: 'sm',
        dropUp: false,
        types:'multi',
        theme: 'light',
        selectionFeedback:'fixed',
        placeholders: 'Select',
        items: [
          { content: "one", id: 0 },
          { content: "two", id: 1 },
          { content: "three", id: 2 },
          { content: "four", id: 3 }
        ],
      }
    }
  ];
}