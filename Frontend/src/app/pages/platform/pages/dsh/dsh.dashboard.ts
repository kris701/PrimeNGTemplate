import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatHelp } from "../../../../common/components/floathelp";
@Component({
    selector: 'app-dsh-dashboard',
    imports: [FormsModule, CommonModule, FloatHelp],
    template: `
        <app-floathelp header="Dashboard">
            <p>Help text</p>
        </app-floathelp>

        <p>Dashboard</p>
    `,
    host: {
        class: 'card flex flex flex-col flex-grow'
    }
})
export class DSHDashboard {
}
