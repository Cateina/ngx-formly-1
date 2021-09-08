import { AppModule as DatePickerCarbonAppModule } from './app.module';
import { AppComponent as DatePickerCarbonAppComponent } from './app.component';

const DatePickerCarbonExampleConfig = {
  title: 'DatePicker type',
  component: DatePickerCarbonAppComponent,
  debug: true,
  files: [
    { file: 'app.component.html', content: require('!!highlight-loader?raw=true&lang=html!./app.component.html'), filecontent: require('!!raw-loader!./app.component.html') },
    { file: 'app.component.ts', content: require('!!highlight-loader?raw=true&lang=typescript!./app.component.ts'), filecontent: require('!!raw-loader!./app.component.ts') },
    { file: 'app.module.ts', content: require('!!highlight-loader?raw=true&lang=typescript!./app.module.ts'), filecontent: require('!!raw-loader!./app.module.ts') },
  ],
};

export {
  DatePickerCarbonAppModule,
  DatePickerCarbonAppComponent,
  DatePickerCarbonExampleConfig,
};