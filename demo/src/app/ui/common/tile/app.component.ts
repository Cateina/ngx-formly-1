import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Tile',
      type: 'tile',
      templateOptions: {
        label: 'This is a Tile (1)',
        theme: 'dark',  
      }
    },
    {
      key: 'Tile',
      type: 'tile',
      templateOptions: {
        label: 'This is a Tile (2)',
        theme: 'light',  
      }
    },
    {
      key: 'Tile',
      type: 'tileClick',
      templateOptions: {
        description: 'This is a Clickable-Tile (1)',
        href: 'www.google.com',
        target:'._blank'
      }
    },
    {
      key: 'Tile',
      type: 'tileClick',
      templateOptions: {
        description: 'This is a Clickable-Tile (2)',
        href: '/search',
        target: '._blank',
        routeTitle:'Tile'
      }
    },
    {
      key: 'Tile',
      type: 'tileSelect',
      templateOptions: {
        label: 'This is a Selectable-Tile (1)',
        multiple: false,
        values: [
          {
            value: 'Tile 1',
            selected:true
          },
          {
            value: 'Tile 2',
          },
          {
            value: 'Tile 3',
          }
        ],
      },
    },
    {
      key: 'Tile',
      type: 'tileSelect',
      templateOptions: {
        label: 'This is a Selectable-Tile (2)',
        selected: 'Tile Selected',
        multiple: true,
        values: [
          {
            value: 'Tile 1',
            selected:true
          },
          {
            value: 'Tile 2',
          },
          {
            value: 'Tile 3',
          }
        ],
      },
    },
    {
      key: 'tile',
      type: 'tileExpand',
      templateOptions: {
        style1:'height:15px;',
        style2: 'height:13px;',
        aboveText: 'Hello',
        belowText:'World!'
      }
      
    }
  ];
}