import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  CheckboxModule,
  ComboBoxModule,
  DatePickerModule,
  DialogModule,
  InputModule,
  NumberModule,
  RadioModule,
  SelectModule,
  TimePickerModule,
  TimePickerSelectModule,
  ToggleModule,
  ButtonModule,
  BreadcrumbModule,
  DropdownModule,
  FileUploaderModule,
  SearchModule,
  TilesModule,
  TagModule
} from 'carbon-components-angular';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { CARBON_FORMLY_CONFIG, FIELD_TYPE_COMPONENTS } from './ui-carbon.config';

@NgModule({
  declarations: FIELD_TYPE_COMPONENTS,
  imports: [
    CommonModule,

    CheckboxModule,
    ComboBoxModule,
    DatePickerModule,
    DialogModule,
    InputModule,
    NumberModule,
    RadioModule,
    SelectModule,
    TimePickerModule,
    TimePickerSelectModule,
    ToggleModule,
    ButtonModule,
    ReactiveFormsModule,
    FormlySelectModule,
    BreadcrumbModule,
    DropdownModule,
    FileUploaderModule,
    SearchModule,
    TilesModule,
    TagModule,
    FormlyModule.forChild(CARBON_FORMLY_CONFIG),
  ],
})
export class FormlyCarbonModule {}
