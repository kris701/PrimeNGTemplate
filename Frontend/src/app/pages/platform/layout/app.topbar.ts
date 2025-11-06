import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../../layout/services/layout.service';
import { UserMenu } from './app.usermenu';
import { ImpersonationMenu } from './app.impersonationmenu';
import { JWTTokenHelpers } from '../helpers/jwtTokenHelpers';
import { PermissionHelpers } from '../helpers/permissionHelpers';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { TagModule } from 'primeng/tag';
import { PermissionsTable } from '../../../../PermissionsTable';
import { AppConfigurator } from '../../../layout/app.configurator';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator, UserMenu, ImpersonationMenu, OverlayBadgeModule, TagModule, TooltipModule, ButtonModule, PopoverModule],
    template: ` <div class="layout-topbar">
        <p-button class="layout-menu-button" text severity="contrast" icon="pi pi-bars" (click)="layoutService.onMenuToggle()" />

        <a class="layout-topbar-logo ml-5" routerLink="/platform">
            @if (layoutService.isDarkTheme()) {
                <img src="src/assets/images/logo_small_transparant.png" [style]="{ height: '45px' }" />
            } @else {
                <img src="src/assets/images/logo_small_transparant_inv.png" [style]="{ height: '45px' }" />
            }
            @if (layoutService.isDesktop()) {
                <span>Platform</span>
            }
        </a>

        <div class="flex-grow"></div>

        <div class="flex flex-row gap-2">
            <p-button (click)="confpop.toggle($event)" icon="pi pi-palette" text severity="contrast">
                <p-popover #confpop>
                    <div class="w-72">
                        <app-configurator />
                    </div>
                </p-popover>
            </p-button>

            <p-button (click)="toggleDarkMode()" [icon]="layoutService.isDarkTheme() ? 'pi pi-moon' : 'pi pi-sun'" text severity="contrast" />

            @if (!canEditProfile) {
                <p-button (click)="logOut()" icon="pi pi-sign-out" severity="danger" [disabled]="isImpersonating"> </p-button>
            } @else {
                <p-button (click)="userpopup.toggle($event)" icon="pi pi-user">
                    <p-popover #userpopup>
                        <div class="w-72">
                            <app-usermenu />
                        </div>
                    </p-popover>
                </p-button>
            }

            <p-button (click)="imppopup.toggle($event)" icon="pi pi-at" *ngIf="canImpersonate()">
                <p-popover #imppopup>
                    <div class="w-72">
                        <app-impersonationmenu />
                    </div>
                </p-popover>
            </p-button>
        </div>
    </div>`
})
export class AppTopbar {
    unreadMessages: number = 0;

    JWTTokenHelpers = JWTTokenHelpers;

    isImpersonating: boolean = localStorage.getItem('impersonating') ? true : false;
    canImpersonatePerm: boolean = PermissionHelpers.HasPermission(PermissionsTable.Core_User_Impersonate);
    canEditProfile: boolean = PermissionHelpers.HasPermission(PermissionsTable.Core_User_EditProfile);

    constructor(
        private router: Router,
        public layoutService: LayoutService,
    ) {
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }

    canImpersonate(): boolean {
        if (this.canImpersonatePerm || localStorage.getItem('impersonating')) return true;
        return false;
    }

    logOut() {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('perms');
        this.router.navigate(['/']);
    }
}
