import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExamplesRouterViewerComponent } from '../../shared';
import { CommonModule, CommonExampleConfigs, CommonExampleComponents, debugFields } from '../common';

import { AppComponent } from './app.component';
import { FormlyCarbonModule } from '@ngx-formly/carbon';

@NgModule({
  imports: [
    CommonModule,
    FormlyCarbonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
        children: [
          {
            path: '',
            component: ExamplesRouterViewerComponent,
            data: {
              debugFields,
              examples: [...CommonExampleConfigs],
            },
          },
        ],
      },
    ]),
  ],
  declarations: [AppComponent],
})
export class ConfigModule {}
