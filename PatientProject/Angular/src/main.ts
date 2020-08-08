import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { MasterPageModule } from './MainMasterPage/MasterPage.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MasterPageModule)
  .catch(err => console.error(err));
