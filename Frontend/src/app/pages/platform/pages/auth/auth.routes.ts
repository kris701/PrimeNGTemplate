import { Routes } from '@angular/router';
import { Login } from './auth.login';
import { ResetPassword } from './auth.resetpassword';

export default [
    { path: '', component: Login },
    { path: 'resetpassword', component: ResetPassword }
] as Routes;
