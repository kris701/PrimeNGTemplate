import { Routes } from '@angular/router';

export default [
    { path: 'core', loadChildren: () => import('./core/core.routes') },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
