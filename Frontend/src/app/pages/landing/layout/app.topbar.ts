import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { JWTTokenHelpers } from '../../platform/helpers/jwtTokenHelpers';
import { LayoutService } from '../../../services/layoutService';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, OverlayBadgeModule, TagModule, ButtonModule],
    template: ` <div class="layout-topbar justify-between" style="background:transparent">
        <div class="items-center grow justify-between flex absolute static w-full left-0 top-0 p-2 pr-8 gap-2">
            <div class="flex flex-grow"></div>
            <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.state.isDarkMode, 'pi-sun': !layoutService.state.isDarkMode }"></i>
            </button>
            <p-button pRipple [label]="getLoginText()" [icon]="getLoginIcon()" (click)="doLoginAction()" raised rounded></p-button>
        </div>
    </div>`
})
export class AppTopbar {
    localStorage = localStorage;

    constructor(
        public layoutService: LayoutService,
        public router: Router
    ) {}

    toggleDarkMode() {
        this.layoutService.ToggleDarkMode();
    }

    doLoginAction() {
        if (this.router.url.endsWith('/platform/auth')) this.router.navigate(['/']);
        else if (JWTTokenHelpers.IsTokenSet()) this.router.navigate(['/platform/']);
        else this.router.navigate(['/platform/auth']);
    }

    getLoginText(): string {
        if (this.router.url.endsWith('/platform/auth')) return 'Return';
        if (JWTTokenHelpers.IsTokenSet()) return 'Enter CargoBI';
        return 'CargoBI';
    }

    getLoginIcon(): string {
        if (this.router.url.endsWith('/platform/auth')) return 'pi pi-arrow-left';
        if (JWTTokenHelpers.IsTokenSet()) return 'pi pi-external-link';
        return 'pi pi-sign-in';
    }
}
