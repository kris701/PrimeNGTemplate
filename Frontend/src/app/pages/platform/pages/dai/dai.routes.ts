import { Routes } from '@angular/router';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { DAICollectors } from './dai.collectors';
import { canActivate } from '../../canActivateFn';
import { DAITriggers } from './dai.triggers';

export default [
    { path: 'collectors', component: DAICollectors, canActivate : [canActivate(PermissionsTable.DAI_Collectors_Read)] },
    { path: 'triggers', component: DAITriggers, canActivate : [canActivate(PermissionsTable.DAI_Triggers_Read)] },
] as Routes;
