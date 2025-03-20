import { Routes } from '@angular/router';
import { CompanyManagementEditUsers } from './core.editusers';
import { CompanyManagementPermissions } from './core.permissions';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { PermissionsTable } from '../../../PermissionsTable';

export default [
    { path: 'editusers', component: CompanyManagementEditUsers, canActivate : [() => PermissionHelpers.HasPermission(PermissionsTable.Core_Users_Write)] },
    { path: 'permissions', component: CompanyManagementPermissions, canActivate : [() => PermissionHelpers.HasPermission(PermissionsTable.Core_Permission_Read)] },
] as Routes;
