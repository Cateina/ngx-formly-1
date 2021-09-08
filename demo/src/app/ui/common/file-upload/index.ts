import { AppModule as FileUploadAppModule } from './app.module';
import { AppComponent as FileUploadAppComponent } from './app.component';

const FileUploadExampleConfig = {
  title: 'fileUpload type',
  component: FileUploadAppComponent,
  debug: true,
  files: [
    { file: 'app.component.html', content: require('!!highlight-loader?raw=true&lang=html!./app.component.html'), filecontent: require('!!raw-loader!./app.component.html') },
    { file: 'app.component.ts', content: require('!!highlight-loader?raw=true&lang=typescript!./app.component.ts'), filecontent: require('!!raw-loader!./app.component.ts') },
    { file: 'app.module.ts', content: require('!!highlight-loader?raw=true&lang=typescript!./app.module.ts'), filecontent: require('!!raw-loader!./app.module.ts') },
  ],
};

export {
  FileUploadAppModule,
  FileUploadAppComponent,
  FileUploadExampleConfig,
};