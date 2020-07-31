import { NgModule } from '@angular/core';

import { FormlyFormFieldModule } from '@ngx-formly/carbon/form-field';
import { FormlyInputModule } from '@ngx-formly/carbon/input';
import { FormlyTextAreaModule } from '@ngx-formly/carbon/textarea';

@NgModule({
  imports: [FormlyFormFieldModule, FormlyInputModule, FormlyTextAreaModule],
})
export class FormlyCarbonModule {}
