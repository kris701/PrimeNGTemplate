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
                label: 'OMNIA',
                icon: 'pi pi-database',
                items: [
                    {
                        label: 'Reports',
                        routerLink: '/platform/OMN/reports',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.OMN_Reports_Read),
                        icon: 'pi pi-list',
                        routerLinkActiveOptions: { exact: true }
                    },
                    {
                        label: 'Definitions',
                        routerLink: '/platform/OMN/definitions',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.OMN_Definitions_Read),
                        icon: 'pi pi-file-edit',
                        routerLinkActiveOptions: { exact: true }
                    }
                ]
            },
            {
                label: 'BPG',
                icon: 'pi pi-sitemap',
                items: [
                    {
                        label: 'Overview',
                        routerLink: '/platform/BPG/instances',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.BPG_Instances_Read),
                        icon: 'pi pi-file-edit',
                        routerLinkActiveOptions: { exact: true }
                    },
                    {
                        label: 'Definitions',
                        routerLink: '/platform/BPG/definitions',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.BPG_Definitions_Read),
                        icon: 'pi pi-file-edit',
                        routerLinkActiveOptions: { exact: true }
                    },
                    {
                        label: 'Triggers',
                        routerLink: '/platform/BPG/triggers',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.BPG_Triggers_Read),
                        icon: 'pi pi-sitemap',
                        routerLinkActiveOptions: { exact: true }
                    },
                    {
                        label: 'Logs',
                        routerLink: '/platform/BPG/logs',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.BPG_Instances_Logs_Read),
                        icon: 'pi pi-receipt',
                        routerLinkActiveOptions: { exact: true }
                    }
                ]
            },
            {
                label: 'DQA',
                icon: 'pi pi-sitemap',
                items: [
                    {
                        label: 'Overview',
                        routerLink: '/platform/DQA/instances',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.DQA_Instances_Read),
                        icon: 'pi pi-file-edit',
                        routerLinkActiveOptions: { exact: true }
                    },
                    {
                        label: 'Definitions',
                        routerLink: '/platform/DQA/definitions',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.DQA_Definitions_Read),
                        icon: 'pi pi-file-edit',
                        routerLinkActiveOptions: { exact: true }
                    },
                    {
                        label: 'Triggers',
                        routerLink: '/platform/DQA/triggers',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.DQA_Triggers_Read),
                        icon: 'pi pi-sitemap',
                        routerLinkActiveOptions: { exact: true }
                    },
                    {
                        label: 'Logs',
                        routerLink: '/platform/DQA/logs',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.DQA_Instances_Logs_Read),
                        icon: 'pi pi-receipt',
                        routerLinkActiveOptions: { exact: true }
                    }
                ]
            },
            {
                label: 'DAI',
                icon: 'pi pi-database',
                items: [
                    {
                        label: 'Data Collectors',
                        routerLink: '/platform/DAI/collectors',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.DAI_Collectors_Read),
                        icon: 'pi pi-search',
                        routerLinkActiveOptions: { exact: true }
                    },
                    {
                        label: 'Data Triggers',
                        routerLink: '/platform/DAI/triggers',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.DAI_Triggers_Read),
                        icon: 'pi pi-sitemap',
                        routerLinkActiveOptions: { exact: true }
                    }
                ]
            },
            {
                label: 'CHB',
                icon: 'pi pi-microchip-ai',
                items: [
                    {
                        label: 'Models',
                        routerLink: '/platform/CHB/models',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.CHB_Models_Write),
                        icon: 'pi pi-database',
                        routerLinkActiveOptions: { exact: true }
                    },
                    {
                        label: 'Knowledgebase',
                        routerLink: '/platform/CHB/knowledgebases',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.CHB_Knowledgebases_Write),
                        icon: 'pi pi-database',
                        routerLinkActiveOptions: { exact: true }
                    }
                ]
            },
            {
                label: 'Clients',
                icon: 'pi pi-desktop',
                visible : PermissionHelpers.HasPermission(PermissionsTable.CDI_Read),
                items: [
                    {
                        label: 'Download',
                        routerLink: '/platform/CDI/download',
                        visible: PermissionHelpers.HasPermission(PermissionsTable.CDI_Read),
                        icon: 'pi pi-download',
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
