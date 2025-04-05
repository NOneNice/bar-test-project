import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { APP_CONFIG } from './app/tokens/config.token';

fetch('assets/config/config.json')
  .then((res) => res.json())
  .then((config) =>
    bootstrapApplication(AppComponent, {
      providers: [
        appConfig.providers,
        { provide: APP_CONFIG, useValue: config },
      ],
    }).catch((err) => console.error(err)),
  );
