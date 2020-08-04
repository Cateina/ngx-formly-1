import { ConfigOption } from '@ngx-formly/core';
import {
  FormlyFieldInput,
  FormlyFieldTextArea,
  FormlyFieldCheckbox,
  FormlyFieldRadio,
  FormlyFieldSelect,
  FormlyFieldDatepicker,
  FormlyFieldTimepicker,
  FormlyFieldToggle,
} from './types/types';
import { FormlyWrapperFormField } from './wrappers/wrappers';

export const FIELD_TYPE_COMPONENTS = [
  // types
  FormlyFieldInput,
  FormlyFieldTextArea,
  FormlyFieldCheckbox,
  FormlyFieldRadio,
  FormlyFieldSelect,
  FormlyFieldDatepicker,
  FormlyFieldTimepicker,
  FormlyFieldToggle,

  // wrappers
  FormlyWrapperFormField,
];

export const CARBON_FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: 'input',
      component: FormlyFieldInput,
      wrappers: ['form-field'],
    },
    {
      name: 'textarea',
      component: FormlyFieldTextArea,
      wrappers: ['form-field'],
    },
    {
      name: 'checkbox',
      component: FormlyFieldCheckbox,
      wrappers: ['form-field'],
    },
    {
      name: 'radio',
      component: FormlyFieldRadio,
      wrappers: ['form-field'],
    },
    {
      name: 'select',
      component: FormlyFieldSelect,
      wrappers: ['form-field'],
    },
    {
      name: 'datepicker',
      component: FormlyFieldDatepicker,
      wrappers: ['form-field'],
    },
    {
      name: 'timepicker',
      component: FormlyFieldTimepicker,
      wrappers: ['form-field'],
    },
    {
      name: 'toggle',
      component: FormlyFieldToggle,
      wrappers: ['form-field'],
    },
  ],
  wrappers: [{ name: 'form-field', component: FormlyWrapperFormField }],
};
