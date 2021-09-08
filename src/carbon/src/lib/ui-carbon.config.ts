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
  FormlyFieldButton,
  FormlyFieldBreadCrumb,
  FormlyFieldComboBox,
  FormlyFieldComboBoxMultiple,
  FormlyFieldDropDown,
  FormlyFieldFileUpload,
  FormlyFieldSearch,
  FormlyFieldTile,
  FormlyFieldTileClick,
  FormlyFieldTileExpand,
  FormlyFieldTileSelect,
  FormlyFieldTags,
  FormlyFieldTagsFilter
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
  FormlyFieldButton,
  FormlyFieldBreadCrumb,
  FormlyFieldComboBox,
  FormlyFieldComboBoxMultiple,
  FormlyFieldDropDown,
  FormlyFieldFileUpload,
  FormlyFieldSearch,
  FormlyFieldTileSelect,
  FormlyFieldTile,
  FormlyFieldTileExpand,
  FormlyFieldTileClick,
  FormlyFieldTags,
  FormlyFieldTagsFilter,
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
    {
      name: 'button',
      component: FormlyFieldButton,
      wrappers: ['form-field']
    },
    {
      name: 'breadCrumb',
      component: FormlyFieldBreadCrumb,
      wrappers: ['form-field']
    },
    {
      name:'comboBox',
      component:FormlyFieldComboBox,
      wrappers: ['form-field']
    },
    {
      name:'comboBox-multiple',
      component:FormlyFieldComboBoxMultiple,
      wrappers:['form-field']
    },
    {
      name:'dropdown',
      component:FormlyFieldDropDown,
      wrappers:['form-field']
    },
    {
      name:'fileUpload',
      component:FormlyFieldFileUpload,
      wrappers:['form-field']
    },
    {
      name:'search',
      component:FormlyFieldSearch
    },
    {
      name:'tile',
      component:FormlyFieldTile
    },
    {
      name:'tileClick',
      component:FormlyFieldTileClick
    },
    {
      name:'tileExpand',
      component:FormlyFieldTileExpand
    },
    {
      name:'tileSelect',
      component:FormlyFieldTileSelect
    },
    {
      name:'tag',
      component:FormlyFieldTags
    },
    {
      name:'tag-filter',
      component:FormlyFieldTagsFilter
    }


  ],
  wrappers: [{ name: 'form-field', component: FormlyWrapperFormField }],
};
