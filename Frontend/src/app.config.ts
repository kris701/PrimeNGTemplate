import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { ConfirmationService, MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation(), withViewTransitions({ skipInitialTransition: true })),
        provideAnimationsAsync(),
        MessageService,
        ConfirmationService,
        providePrimeNG({
            theme: {
                preset: Aura,
                options: { darkModeSelector: '.dark' }
            },
            ripple: false
        })
    ]
};
