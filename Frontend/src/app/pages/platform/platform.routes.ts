import { Routes } from '@angular/router';
import { AppLayout } from './layout/app.layout';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth-interceptor.interceptor';
import { UserInterface } from './interfaces/usersinterface';
import { DSHDashboard } from './pages/dsh/dsh.dashboard';

export default [
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes'),
        providers: [provideHttpClient()]
    },
    {
        path: '',
        component: AppLayout,
        providers: [provideHttpClient(withInterceptors([authInterceptor])), UserInterface],
        children: [
            { path: '', component: DSHDashboard },
            { path: 'COR', loadChildren: () => import('./pages/cor/cor.routes') },
        ]
    }
] as Routes;
