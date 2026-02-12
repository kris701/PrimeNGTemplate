import { Routes } from '@angular/router';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { OMNReports } from './omn.reports';
import { canActivate } from '../../canActivateFn';
import { OMNDefinitions } from './omn.definitions';

export default [
    { path: 'reports', component: OMNReports, canActivate : [canActivate(PermissionsTable.OMN_Reports_Read)] },
    { path: 'definitions', component: OMNDefinitions, canActivate : [canActivate(PermissionsTable.OMN_Definitions_Read)] },
] as Routes;
