import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';
import { UserMenu } from './app.usermenu';
import { ImpersonationMenu } from './app.impersonationmenu';
import { UserInterface } from '../../interfaces/usersinterface';
import { JWTTokenHelpers } from '../../helpers/jwtTokenHelpers';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { PermissionsTable } from '../../../PermissionsTable';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator, UserMenu, ImpersonationMenu, OverlayBadgeModule ],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                @if (layoutService.isDarkTheme())
                {
                    <img src="src/assets/images/logo_small_transparant.png" [style]="{ height: '45px' }"/>
                }
                @else
                {
                    <img src="src/assets/images/logo_small_transparant_inv.png" [style]="{ height: '45px' }"/>
                }
                <span>HelForm</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
                <div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div>
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <div class=" flex flex-row items-center justify-between">
                        {{getPrettyUsername()}}
                    </div>
                    <div class="relative">
                        <button
                            class="layout-topbar-action layout-topbar-action-highlight"
                            pStyleClass="@next"
                            enterFromClass="hidden"
                            enterActiveClass="animate-scalein"
                            leaveToClass="hidden"
                            leaveActiveClass="animate-fadeout"
                            [hideOnOutsideClick]="true"
                        >
                            <i class="pi pi-user"></i>
                            
                        </button>
                        <app-usermenu />
                    </div>
                    <div class="relative" [hidden]="!CanImpersonate()">
                        <button
                            class="layout-topbar-action layout-topbar-action-highlight"
                            pStyleClass="@next"
                            enterFromClass="hidden"
                            enterActiveClass="animate-scalein"
                            leaveToClass="hidden"
                            leaveActiveClass="animate-fadeout"
                            [hideOnOutsideClick]="true"
                        >
                            <i class="pi pi-at"></i>
                            
                        </button>
                        <app-impersonationmenu />
                    </div>
                </div>
            </div>
        </div>
    </div>`
})
export class AppTopbar {
    items!: MenuItem[];
    userInterface : UserInterface;
    unreadMessages : number = 0;

    constructor(public layoutService: LayoutService, userInterface : UserInterface) {
        this.userInterface = userInterface;
    }

    showUnreadMessageBadge(){
        return this.unreadMessages == 0;
    }

    getPrettyUsername(){
        return this.userInterface.GetUserNameByID(JWTTokenHelpers.GetUserID());
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }

    CanImpersonate() : boolean {
        if (PermissionHelpers.HasPermission(PermissionsTable.Core_User_Impersonate) == true || localStorage.getItem("impersonating"))
            return true;
        return false;
    }
}
