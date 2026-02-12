import { Routes } from '@angular/router';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { COREditUsers } from './cor.editusers';
import { canActivate } from '../../canActivateFn';

export default [
    { path: 'editusers', component: COREditUsers, canActivate : [canActivate(PermissionsTable.COR_Users_Write)] },
] as Routes;
