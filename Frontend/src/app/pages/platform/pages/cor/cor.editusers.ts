import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { UserEditor } from './components/usereditor';
import { CardHelpDrawer } from "../../common/cardhelpdrawer";
import { FloatHelp } from "../../../../common/components/floathelp";
@Component({
    selector: 'app-cor-company-editusers',
    imports: [FormsModule, CommonModule, DialogModule, ButtonModule, FloatLabelModule, InputTextModule, MultiSelectModule, PasswordModule, TableModule, ChipModule, TooltipModule, ConfirmDialogModule, TagModule, UserEditor, FloatHelp],
    template: `
        <app-floathelp header="User Editing">
            <p>Here you can add, edit and remove users from the system.</p>
            <p-tag severity="warn">Do remember, if you update the permissions for a user (including yourself) they will have to log out and log back in again for the changes to take effect.</p-tag>
        </app-floathelp>
        <app-core-components-usereditor/>
    `,
    host: {
        class: 'card flex flex flex-col flex-grow'
    }
})
export class COREditUsers {
}
