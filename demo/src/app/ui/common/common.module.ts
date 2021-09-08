import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { InputAppModule } from '../common/input';
import { TextareaAppModule } from '../common/textarea';
import { CheckboxAppModule } from '../common/checkbox';
import { RadioAppModule } from '../common/radio';
import { SelectAppModule } from '../common/select';
import { ButtonAppModule } from './button';
import { BreadCrumbAppModule } from './breadCrumb';
import { ComboBoxAppModule } from './comboBox';
import { DatePickerCarbonAppModule } from './datepicker';
import { DropDownAppModule } from './drowpDown';
import { FileUploadAppModule } from './file-upload';
import {SearchAppModule} from './search';
import { TileAppModule } from './tile';
import { TagAppModule } from './tags';
@NgModule({
  imports: [
    InputAppModule,
    TextareaAppModule,
    CheckboxAppModule,
    RadioAppModule,
    SelectAppModule,
    ButtonAppModule,
    BreadCrumbAppModule,
    ComboBoxAppModule,
    DatePickerCarbonAppModule,
    DropDownAppModule,
    FileUploadAppModule,
    SearchAppModule,
    TileAppModule,
    TagAppModule
  ],
  exports: [
    SharedModule,
  ],
})
export class CommonModule { }
