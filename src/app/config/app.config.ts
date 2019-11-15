import { InjectionToken } from '@angular/core';
export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  pagination: {
    limit: 5
  },
  locale: 'es-MX',
  pageSizeItems: [5, 10, 20, 50, 100]
};
