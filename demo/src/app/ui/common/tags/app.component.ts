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
  fields: FormlyFieldConfig[] =
  [
    {
      key: 'TagData',
      type: 'tag',
      className:"warm-gray",
      templateOptions: {
        label: 'Warm-gray',
      },
    },
    {
      key: 'TagData',
      type: 'tag',
      className:"red",
      templateOptions: {
        label: 'Red',
      },
    },
    {
      key: 'TagData',
      type: 'tag',
      className:"magenta",
      templateOptions: {
        label: 'Magenta',
      },
    },
    {
      key: 'TagData',
      type: 'tag',
      className:"purple",
      templateOptions: {
        label: 'Purple',
      },
    },
    {
      key: 'TagData',
      type: 'tag',
      className:" blue",
      templateOptions: {
        label: 'Blue',
      },
    },
    {
      key: 'TagData',
      type: 'tag',
      className:"cyan",
      templateOptions: {
        label: 'Cyan',
      },
    },
    {
      key: 'TagData',
      type: 'tag',
      className:"teal",
      templateOptions: {
        label: 'Teal',
      },
    },
    {
      key: 'TagData',
      type: 'tag',
      className:"green",
      templateOptions: {
        label: 'Green',
      },
    },
    {
      key: 'TagData',
      type: 'tag',
      className:"cool-gray",
      templateOptions: {
        label: 'Cool-gray',
      },
    },
    {
      key: 'TagData',
      type: 'tag-filter',
      className:"warm-gray",
      templateOptions: {
        title: 'Warm-gray',
        closeButtonLabel:'clear'
      },
    },
    {
      key: 'TagData',
      type: 'tag-filter',
      className:"red",
      templateOptions: {
        label: 'Red',
        closeButtonLabel:'clear'
      },
    },
    {
      key: 'TagData',
      type: 'tag-filter',
      className:"magenta",
      templateOptions: {
        label: 'Magenta',
        closeButtonLabel:'clear'
      },
    },
    {
      key: 'TagData',
      type: 'tag-filter',
      className:"purple",
      templateOptions: {
        label: 'Purple',
        closeButtonLabel:'clear'
      },
    },
    {
      key: 'TagData',
      type: 'tag-filter',
      className:" blue",
      templateOptions: {
        label: 'Blue',
        closeButtonLabel:'clear'
      },
    },
    {
      key: 'TagData',
      type: 'tag-filter',
      className:"cyan",
      templateOptions: {
        label: 'Cyan',
        closeButtonLabel:'clear'
      },
    },
    {
      key: 'TagData',
      type: 'tag-filter',
      className:"teal",
      templateOptions: {
        label: 'Teal',
        closeButtonLabel:'clear'
      },
    },
    {
      key: 'TagData',
      type: 'tag-filter',
      className:"green",
      templateOptions: {
        label: 'Green',
        closeButtonLabel:'clear'
      },
    },
    {
      key: 'TagData',
      type: 'tag-filter',
      className:"cool-gray",
      templateOptions: {
        label: 'Cool-gray',
        closeButtonLabel:'clear'
      },
  }
];
}