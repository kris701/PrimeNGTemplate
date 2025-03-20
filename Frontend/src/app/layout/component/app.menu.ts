import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { PermissionsTable } from '../../../PermissionsTable';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { 
                        label: 'Dashboard', 
                        icon: 'pi pi-fw pi-home', 
                        routerLink: ['/']
                    }
                ]
            },
            {
                label: 'Core',
                visible: PermissionHelpers.HasPermission(PermissionsTable.Core_Users_Read),
                items: [
                    {
                        label: 'Edit Users',
                        routerLink: ['/pages/core/editusers'],
                        visible: PermissionHelpers.HasPermission(PermissionsTable.Core_Users_Read),
                        icon: "pi pi-user"
                    },
                    {
                        label: 'Permissions',
                        routerLink: ['/pages/core/permissions'],
                        visible: PermissionHelpers.HasPermission(PermissionsTable.Core_Permission_Read),
                        icon: "pi pi-lock"
                    }
                ]
            }
        ];
    }
}
