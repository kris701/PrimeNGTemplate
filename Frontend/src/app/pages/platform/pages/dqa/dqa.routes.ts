import { Routes } from '@angular/router';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { DQADefinitions } from './dqa.definitions';
import { canActivate } from '../../canActivateFn';
import { DQALogs } from './dqa.logs';
import { DQATriggers } from './dqa.triggers';
import { DQAInstances } from './dqa.instances';

export default [
    { path: 'definitions', component: DQADefinitions, canActivate : [canActivate(PermissionsTable.DQA_Definitions_Read)] },
    { path: 'triggers', component: DQATriggers, canActivate : [canActivate(PermissionsTable.DQA_Triggers_Read)] },
    { path: 'logs', component: DQALogs, canActivate : [canActivate(PermissionsTable.DQA_Instances_Logs_Read)] },
    { path: 'instances', component: DQAInstances, canActivate : [canActivate(PermissionsTable.DQA_Instances_Read)] },
] as Routes;
