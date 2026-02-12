import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { UserMenu } from './app.usermenu';
import { ImpersonationMenu } from './app.impersonationmenu';
import { UserInterface } from '../interfaces/usersinterface';
import { JWTTokenHelpers } from '../helpers/jwtTokenHelpers';
import { PermissionHelpers } from '../helpers/permissionHelpers';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { TagModule } from 'primeng/tag';
import { PermissionsTable } from '../../../../PermissionsTable';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { LayoutService } from '../../../services/layoutService';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, UserMenu, ImpersonationMenu, OverlayBadgeModule, TagModule, TooltipModule, ButtonModule, PopoverModule],
    template: `
    <div class="layout-topbar">
        <p-button class="layout-menu-button" text severity="contrast" icon="pi pi-bars" (click)="layoutService.ToggleMenu()" />

        <a class="layout-topbar-logo ml-5" routerLink="/platform">
            @if (layoutService.state.isDarkMode) {
                <img src="src/assets/images/logo_small_transparant.png" [style]="{ height: '45px' }" />
            } @else {
                <img src="src/assets/images/logo_small_transparant_inv.png" [style]="{ height: '45px' }" />
            }
            @if (layoutService.state.isDesktop) {
                <span>CargoBI</span>
            }
        </a>

        <div class="flex-grow"></div>

        @if (isImpersonating) {
            <div class=" flex flex-row items-center justify-between">
                <p-tag icon="pi pi-info-circle" pTooltip="You are currently impersonating this person">
                    @if (JWTTokenHelpers.IsStaff()) {
                        <i class="pi pi-crown"></i>
                    }
                    {{ userInterface.GetUserNameByID(JWTTokenHelpers.GetUserID()) }}
                </p-tag>
            </div>
        }

        <p-button (click)="toggleDarkMode()" [icon]="layoutService.state.isDarkMode ? 'pi pi-moon' : 'pi pi-sun'" text severity="contrast" />

        @if (!canEditProfile) {
            <p-button (click)="logOut()" icon="pi pi-sign-out" severity="danger" [disabled]="isImpersonating" text severity="contrast"> </p-button>
        } @else {
            <p-button (click)="userpopup.toggle($event)" icon="pi pi-user" text severity="contrast">
                <p-popover #userpopup>
                    <div class="w-72">
                        <app-usermenu />
                    </div>
                </p-popover>
            </p-button>
        }

        <p-button (click)="imppopup.toggle($event)" icon="pi pi-at" *ngIf="canImpersonate()" text severity="contrast">
            <p-popover #imppopup>
                <div class="w-72">
                    <app-impersonationmenu />
                </div>
            </p-popover>
        </p-button>
    </div>`,
    styles: `
    .layout-topbar {
        height: 4rem;
        width: 100%;
        padding: 0 2rem;
        background-color: var(--surface-card);
        display: flex;
        flex-direction: row;
        align-items: center;
        border-image: linear-gradient(to right, var(--primary-contrast-color) -10%, var(--primary-color) 50%, var(--primary-contrast-color) 110%) 1;
        border-bottom: 3px solid;

        .layout-topbar-logo {
            display: inline-flex;
            align-items: center;
            font-size: 1.5rem;
            gap: 0.5rem;
        }

        ::ng-deep p-button {
            height:100%
        }

        ::ng-deep.p-button {
            margin:0;
            height:100%;
            width:4rem;
            border-radius: 0;
        }
    }
`
})
export class AppTopbar {
    userInterface: UserInterface;
    unreadMessages: number = 0;

    JWTTokenHelpers = JWTTokenHelpers;

    isImpersonating: boolean = localStorage.getItem('impersonating') ? true : false;
    canImpersonatePerm: boolean = PermissionHelpers.HasPermission(PermissionsTable.COR_Impersonate);
    canEditProfile: boolean = PermissionHelpers.HasPermission(PermissionsTable.COR_Users_Own_Write);

    constructor(
        private router: Router,
        public layoutService: LayoutService,
        userInterface: UserInterface
    ) {
        this.userInterface = userInterface;
    }

    toggleDarkMode() {
        this.layoutService.ToggleDarkMode();
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
