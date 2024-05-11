import { loadManifest } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

loadManifest(environment.MODULES_MANIFEST_URL)
  .catch(err => {
    if (!environment.production) {
      console.error(err);
    }
  })
  .finally(() => import('./bootstrap'));
