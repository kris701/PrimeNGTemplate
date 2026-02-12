import { Routes } from '@angular/router';
import { AppLayout } from './layout/app.layout';
import { Dashboard } from './pages/dsh/dsh';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth-interceptor.interceptor';
import { UserInterface } from './interfaces/usersinterface';

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
            { path: '', component: Dashboard },
            { path: 'COR', loadChildren: () => import('./pages/cor/cor.routes') },
            { path: 'OMN', loadChildren: () => import('./pages/omn/omn.routes') },
            { path: 'BPG', loadChildren: () => import('./pages/bpg/bpg.routes') },
            { path: 'DAI', loadChildren: () => import('./pages/dai/dai.routes') },
            { path: 'DQA', loadChildren: () => import('./pages/dqa/dqa.routes') },
            { path: 'CDI', loadChildren: () => import('./pages/cdi/cdi.routes') },
            { path: 'CHB', loadChildren: () => import('./pages/chb/chb.routes') },
        ]
    }
] as Routes;
