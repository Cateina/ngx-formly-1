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
      key: 'Combo Box',
      type: 'comboBox',
      templateOptions: {
        label: 'Combobox',
        theme: 'dark',
        selectionFeedback: 'top',
        size: 'sm',
        items: [
          { content: "one", id: 0 },
          { content: "two", id: 1 },
          { content: "three", id: 2 },
          { content: "four", id: 3 }
        ],
        onSearch: ($event: any) => alert('You clicked me!')
      },
    },
    {
      key: 'Multi-Select Combo Box',
      type: 'comboBox-multiple',
      templateOptions: {
        label: 'Combobox',
        theme: 'dark',
        type: 'multi',
        selectionFeedback: 'top',
        size: 'sm',
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
