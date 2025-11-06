import { transition } from '@angular/animations';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../../layout/services/layout.service';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { TagModule } from 'primeng/tag';
import { AppConfigurator } from '../../../layout/app.configurator';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { JWTTokenHelpers } from '../../platform/helpers/jwtTokenHelpers';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, OverlayBadgeModule, TagModule, AppConfigurator, ButtonModule, PopoverModule],
    template: ` <div class="layout-topbar" style="background:transparent">
        <div class="flex-grow"></div>

        <div class="flex flex-row gap-2">
            <p-button (click)="confpop.toggle($event)" icon="pi pi-palette" text severity="contrast">
                <p-popover #confpop>
                    <div class="w-72">
                        <app-configurator [hidden]="!showAdvancedThemeControls" />
                    </div>
                </p-popover>
            </p-button>

            <p-button (click)="toggleDarkMode()" [icon]="layoutService.isDarkTheme() ? 'pi pi-moon' : 'pi pi-sun'" text severity="contrast" />

            <p-button [label]="getLoginText()" [icon]="getLoginIcon()" (click)="doLoginAction()" raised rounded></p-button>
        </div>
    </div>`
})
export class AppTopbar {
    localStorage = localStorage;
    showAdvancedThemeControls = localStorage.getItem('showAdvancedThemeControls');

    constructor(
        public layoutService: LayoutService,
        public router: Router
    ) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }

    doLoginAction() {
        if (this.router.url.endsWith('/platform/auth')) this.router.navigate(['/']);
        else if (JWTTokenHelpers.IsTokenSet()) this.router.navigate(['/platform/']);
        else this.router.navigate(['/platform/auth']);
    }

    getLoginText(): string {
        if (this.router.url.endsWith('/platform/auth')) return 'Return';
        if (JWTTokenHelpers.IsTokenSet()) return 'Enter Platform';
        return 'Platform';
    }

    getLoginIcon(): string {
        if (this.router.url.endsWith('/platform/auth')) return 'pi pi-arrow-left';
        if (JWTTokenHelpers.IsTokenSet()) return 'pi pi-external-link';
        return 'pi pi-sign-in';
    }
}
