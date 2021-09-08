import { FormlyFieldConfig } from '@ngx-formly/core';
import { InputAppModule, InputAppComponent, InputExampleConfig } from '../common/input';
import { TextareaAppModule, TextareaAppComponent, TextareaExampleConfig } from '../common/textarea';
import { CheckboxAppModule, CheckboxAppComponent, CheckboxExampleConfig } from '../common/checkbox';
import { RadioAppModule, RadioAppComponent, RadioExampleConfig } from '../common/radio';
import { SelectAppModule, SelectAppComponent, SelectExampleConfig } from '../common/select';
import { ButtonAppComponent,ButtonAppModule,ButtonExampleConfig } from './button';
import { BreadCrumbAppComponent,BreadCrumbAppModule,BreadCrumbExampleConfig } from './breadCrumb';
import { CommonModule } from './common.module';
import { ComboBoxAppComponent, ComboBoxExampleConfig, ComboBoxAppModule} from './comboBox';
import { DatePickerCarbonAppModule,DatePickerCarbonExampleConfig,DatePickerCarbonAppComponent } from './datepicker';
import { DropDownAppComponent,DropDownAppModule,DropDownExampleConfig } from './drowpDown';
import { FileUploadAppComponent, FileUploadExampleConfig,FileUploadAppModule } from './file-upload';
import { SearchAppComponent,SearchAppModule,SearchExampleConfig } from './search';
import { TileAppComponent,TileAppModule,TileExampleConfig } from './tile';
import { TagAppComponent,TagAppModule,TagExampleConfig } from './tags';
const CommonExampleConfigs = [
  InputExampleConfig,
  TextareaExampleConfig,
  CheckboxExampleConfig,
  RadioExampleConfig,
  SelectExampleConfig,
  ButtonExampleConfig,
  BreadCrumbExampleConfig,
  ComboBoxExampleConfig,
  DatePickerCarbonExampleConfig,
  DropDownExampleConfig,
  FileUploadExampleConfig,
  SearchExampleConfig,
  TileExampleConfig,
  TagExampleConfig
];

const CommonExampleComponents = [
  InputAppComponent,
  TextareaAppComponent,
  CheckboxAppComponent,
  RadioAppComponent,
  SelectAppComponent,
  ButtonAppComponent,
  BreadCrumbAppComponent,
  ComboBoxAppComponent,
  DatePickerCarbonAppComponent,
  DropDownAppComponent,
  FileUploadAppComponent,
  SelectAppComponent,
  SearchAppComponent,
  TileAppComponent,
  TagAppComponent
];

const debugFields: FormlyFieldConfig[] = [
  {
    key: 'templateOptions',
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        key: 'label',
        type: 'input',
        className: 'col-md-6',
        templateOptions: { label: 'label' },
      },
      {
        key: 'hideLabel',
        className: 'col-md-6',
        type: 'checkbox',
        templateOptions: { label: 'hideLabel' },
      },
      {
        key: 'required',
        className: 'col-md-6',
        type: 'checkbox',
        templateOptions: { label: 'required' },
      },
      {
        key: 'hideRequiredMarker',
        className: 'col-md-6',
        type: 'checkbox',
        templateOptions: { label: 'hideRequiredMarker' },
      },
      {
        key: 'description',
        className: 'col-md-6',
        type: 'input',
        templateOptions: { label: 'description' },
      },
      {
        key:'button example',
        className:'col-md-6',
        type:'button',
        templateOptions:{label: 'Check the button' }
      },
      {
        key:'breadCrumb example',
        className:'col-md-6',
        type:'breadCrumb',
        templateOptions:{label :'BreadCrumb'}
      },
      {
        key:'comboBox example',
        className:'col-md-6',
        type:'comboBox',
        templateOptions:{label: 'ComboBox '}
      },
      {
        key:'datePicker example',
        className:'col-md-6',
        templateOptions:{label:'DatePicker'}
      },
      {
        key:'dropdown example',
        className:'col-md-6',
        templateOptions:{label:'Dropdown'}
        },
        {
          key:'fileupload example',
          className:'col-md-6',
          templateOptions:{label:'FileUpload'}
        },
        {
          key:'search example',
          className:'col-md-6',
          templateOptions:{label:'Search'}
        },
        {
          key:'tile example',
          className:'col-md-6',
          templateOptions:{label:'Tile'}
        },
        {
          key:'tag example',
          className:'col-md-6',
          templateOptions:{label:'Tag'}
        }
    ],
  },
];

export {
  CommonModule,
  CommonExampleConfigs,
  CommonExampleComponents,
  InputAppModule,
  TextareaAppModule,
  CheckboxAppModule,
  RadioAppModule,
  SelectAppModule,
  debugFields,
  ButtonAppModule,
  BreadCrumbAppModule,
  ComboBoxAppModule,
  DatePickerCarbonAppModule,
  DropDownAppModule,
  FileUploadAppModule,
  SearchAppModule,
  TileAppModule,
  TagAppModule
};
