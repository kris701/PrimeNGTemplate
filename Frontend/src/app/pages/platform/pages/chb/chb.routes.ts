import { Routes } from '@angular/router';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { canActivate } from '../../canActivateFn';
import { CHBModels } from './chb.models';
import { CHBKnowledgebases } from './chb.knowledgebases';

export default [
    { path: 'models', component: CHBModels, canActivate : [canActivate(PermissionsTable.CHB_Models_Write)] },
    { path: 'knowledgebases', component: CHBKnowledgebases, canActivate : [canActivate(PermissionsTable.CHB_Knowledgebases_Write)] }
] as Routes;
