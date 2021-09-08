import { AppModule as ComboBoxAppModule } from './app.module';
import { AppComponent as ComboBoxAppComponent } from './app.component';

const ComboBoxExampleConfig = {
  title: 'ComboBox type',
  component: ComboBoxAppComponent,
  debug: true,
  files: [
    { file: 'app.component.html', content: require('!!highlight-loader?raw=true&lang=html!./app.component.html'), filecontent: require('!!raw-loader!./app.component.html') },
    { file: 'app.component.ts', content: require('!!highlight-loader?raw=true&lang=typescript!./app.component.ts'), filecontent: require('!!raw-loader!./app.component.ts') },
    { file: 'app.module.ts', content: require('!!highlight-loader?raw=true&lang=typescript!./app.module.ts'), filecontent: require('!!raw-loader!./app.module.ts') },
  ],
};

export {
  ComboBoxAppModule,
  ComboBoxAppComponent,
  ComboBoxExampleConfig,
};
