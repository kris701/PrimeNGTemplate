import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { ConfirmationService, MessageService } from 'primeng/api';
import { definePreset } from '@primeng/themes';
import * as Theme from "./theme.json";
import { LayoutService } from './app/services/layoutService';

const ThemePreset = definePreset(Aura, Theme);

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation(), withViewTransitions()),
        provideAnimationsAsync(),
        MessageService,
        ConfirmationService,
        providePrimeNG({
            ripple: false,
            theme: {
                preset: ThemePreset,
                options: {
                    darkModeSelector: '.dark'
                }
            }
        }),
        provideZoneChangeDetection(),
        LayoutService
    ]
};
