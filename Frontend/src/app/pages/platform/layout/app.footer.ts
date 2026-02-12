import { Component } from '@angular/core';
import { JWTTokenHelpers } from '../helpers/jwtTokenHelpers';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [TagModule, CommonModule],
    selector: 'app-footer',
    template: `<div class="layout-footer">
        CargoBI © 2026
        <p-tag severity="warn" value="Impersonating user" *ngIf="isImpersonating" />
    </div>`,
    styles: `
        .layout-footer {
            display: flex;
            align-items: center;
            height:4rem;
            justify-content: center;
            padding: 1rem 0 1rem 0;
            gap: 0.5rem;
            border-top: 1px solid var(--surface-border);
        }
    `
})
export class AppFooter {
    isImpersonating: boolean = false;

    ngOnInit() {
        if (localStorage.getItem('impersonating')) this.isImpersonating = true;
    }
}
