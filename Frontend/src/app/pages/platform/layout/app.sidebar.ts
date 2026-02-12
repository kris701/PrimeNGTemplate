import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '../../../services/layoutService';
import { MenuItem } from 'primeng/api';
import { PermissionsTable } from '../../../../PermissionsTable';
import { PermissionHelpers } from '../helpers/permissionHelpers';
import { Menu } from "primeng/menu";
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [Menu],
    template: `
    <div class="layout-sidebar" [hidden]="!layoutService.state.isMenuExpanded">
        <p-menu [model]="model" class="layout-menu" />
    </div>
    `,
    styles: `
    .layout-sidebar {
        width: 20rem;
        height: 100%;
        z-index:999;
        overflow-y: auto;
        background-color: var(--surface-overlay);
        padding: 0.5rem 1.5rem;

        border-image: linear-gradient(to top, var(--primary-contrast-color) -10%, var(--primary-color) 50%, var(--primary-contrast-color) 110%) 1;
        border-right: 3px solid;
    }

    ::ng-deep.mobile .layout-sidebar {
        position:fixed
    }

    ::ng-deep.layout-menu > .p-menu {
        background: transparent !important;
        border: 0;
    }

    ::ng-deep.p-menu-item-link-active {
        color:var(--primary-color) !important
    }

    ::ng-deep.p-focus {
        color:var(--primary-color) !important
    }
    `
})
export class AppSidebar {
    model: MenuItem[] = [];

    constructor(
        public layoutService: LayoutService,
        private router: Router
    ) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd)
                this.processMenuState();
        });
    }

    processMenuState(){
        if (!this.layoutService.state.isDesktop)
            this.layoutService.SetMenu(false);
    }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-objects-column',
                        routerLink: '/platform',
                        visible: true,
                        routerLinkActiveOptions: { exact: true }
                    }
                ]
            },
            {
                label: 'COR',
                icon: 'pi pi-bullseye',
                visible : PermissionHelpers.HasPermission(PermissionsTable.COR_Users_Write),
                items: [
                    {
                        label: 'Edit Users',
                        routerLink: '/platform/COR/editusers',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.COR_Users_Write),
                        icon: 'pi pi-user',
                        routerLinkActiveOptions: { exact: true }
                    }
                ]
            }
        ];
    }
}
