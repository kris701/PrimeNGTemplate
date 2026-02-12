import { Routes } from '@angular/router';
import { CDIDownload } from './cdi.download';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { canActivate } from '../../canActivateFn';

export default [
    { path: 'download', component: CDIDownload, canActivate : [canActivate(PermissionsTable.CDI_Read)] }
] as Routes;
