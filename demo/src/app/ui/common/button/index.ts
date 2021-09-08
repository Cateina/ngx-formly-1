import { AppModule as ButtonAppModule } from './app.module';
import { AppComponent as ButtonAppComponent } from './app.component';

const ButtonExampleConfig = {
  title: 'Button type',
  component: ButtonAppComponent,
  debug: true,
  files: [
    { file: 'app.component.html', content: require('!!highlight-loader?raw=true&lang=html!./app.component.html'), filecontent: require('!!raw-loader!./app.component.html') },
    { file: 'app.component.ts', content: require('!!highlight-loader?raw=true&lang=typescript!./app.component.ts'), filecontent: require('!!raw-loader!./app.component.ts') },
    { file: 'app.module.ts', content: require('!!highlight-loader?raw=true&lang=typescript!./app.module.ts'), filecontent: require('!!raw-loader!./app.module.ts') },
  ],
};

export {
  ButtonAppModule,
  ButtonAppComponent,
  ButtonExampleConfig,
};