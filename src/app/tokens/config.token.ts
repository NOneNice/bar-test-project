import { AppConfig } from '../interface/config';
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('Application config');
