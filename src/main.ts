import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SearchModule } from './PatientInfo/Search/search.module'


platformBrowserDynamic().bootstrapModule(SearchModule)
  .catch(err => console.error(err));
