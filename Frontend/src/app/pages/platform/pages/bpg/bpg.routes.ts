import { Routes } from '@angular/router';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { BPGDefinitions } from './bpg.definitions';
import { canActivate } from '../../canActivateFn';
import { BPGTriggers } from './bpg.triggers';
import { BPGLogs } from './bpg.logs';
import { BPGInstances } from './bpg.instances';

export default [
    { path: 'definitions', component: BPGDefinitions, canActivate : [canActivate(PermissionsTable.BPG_Definitions_Read)] },
    { path: 'triggers', component: BPGTriggers, canActivate : [canActivate(PermissionsTable.BPG_Triggers_Read)] },
    { path: 'logs', component: BPGLogs, canActivate : [canActivate(PermissionsTable.BPG_Instances_Logs_Read)] },
    { path: 'instances', component: BPGInstances, canActivate : [canActivate(PermissionsTable.BPG_Instances_Read)] },
] as Routes;
