import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';
import { Endpoints } from '../../../../Endpoints';
import { APIURL } from '../../../../globals';
import { PermissionsTable } from '../../../../PermissionsTable';
import { FloatTextInput } from '../../../common/floattextinput';
import { UpdatePasswordInput } from '../../../models/Core/updatePasswordInput';
import { UserModel } from '../../../models/Core/userModel';
import { JWTTokenHelpers } from '../helpers/jwtTokenHelpers';
import { PermissionHelpers } from '../helpers/permissionHelpers';
import { FieldsetModule } from 'primeng/fieldset';
import { firstValueFrom } from 'rxjs';
import { FloatPasswordInput } from "../../../common/floatpasswordinput";

@Component({
    selector: 'app-usermenu',
    standalone: true,
    imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
    DialogModule,
    PasswordModule,
    ButtonModule,
    FloatLabelModule,
    MultiSelectModule,
    InputTextModule,
    TooltipModule,
    ChipModule,
    FloatTextInput,
    FieldsetModule,
    FloatPasswordInput
],
    template: `
        <div class="flex flex-col gap-2">
            <p-button icon="pi pi-asterisk" label="Change Password" pTooltip="Change your password" (click)="showChangePassword()" [style]="{ width: '100%' }" [hidden]="!canWriteSelf" />
            <p-button icon="pi pi-user-edit" label="Profile" pTooltip="View and edit profile" (click)="showEditProfile()" [style]="{ width: '100%' }" />
            <p-button icon="pi pi-sign-out" label="Log Out" severity="danger" pTooltip="Log out and return to the login screen" (click)="logOut()" [disabled]="isImpersonating" [style]="{ width: '100%' }" />
        </div>

        <p-dialog header="Change Password" [(visible)]="changePasswordVisible" [style]="{ width: '30vw' }" [modal]="true" [draggable]="false" appendTo="body">
            <div class="flex flex-col gap-2">
                <app-floatpasswordinput [(value)]="oldPassword" [feedback]="false" label="Current Password" />
                <app-floatpasswordinput [(value)]="newPassword1" [feedback]="true" label="New Password" />
                <app-floatpasswordinput [(value)]="newPassword2" [feedback]="true" label="Repeat new Password" />
            </div>
            <ng-template #footer>
                <p-button label="Save" icon="pi pi-save" (click)="changePassword()" />
            </ng-template>
        </p-dialog>

        <p-dialog header="Profile" [(visible)]="editProfileVisible" [breakpoints]="{ '960px': '95vw' }" [style]="{ width: '50vw' }" [modal]="true" [draggable]="false" appendTo="body">
            <div class="flex flex-col gap-2">
                <p>Here you can view and modify your current profile information</p>
                <p-fieldset legend="Login Information">
                    <div class="flex flex-col gap-2">
                        <p>Your login name must be unique!</p>
                        <app-floattextinput [(value)]="currentUser.loginName" [disabled]="!canWriteSelf" label="Login Name" icon="pi-sign-in" />
                    </div>
                </p-fieldset>
                <p-fieldset legend="General Information">
                    <div class="flex flex-col gap-2">
                        <app-floattextinput [(value)]="currentUser.firstName" [disabled]="!canWriteSelf" label="First Name" icon="pi-pencil" />
                        <app-floattextinput [(value)]="currentUser.lastName" [disabled]="!canWriteSelf" label="Last Name" icon="pi-pencil" />
                        <app-floattextinput [(value)]="currentUser.email" [disabled]="!canWriteSelf" label="E-Mail" icon="pi-envelope" />
                    </div>
                </p-fieldset>
            </div>
            <ng-template #footer>
                <p-button label="Save" icon="pi pi-save" (click)="updateUser()" [hidden]="!canWriteSelf" />
            </ng-template>
        </p-dialog>
    `
})
export class UserMenu {
    changePasswordVisible: boolean = false;
    oldPassword: string = '';
    newPassword1: string = '';
    newPassword2: string = '';

    canWriteSelf: boolean = PermissionHelpers.HasPermission(PermissionsTable.Core_User_EditProfile);
    isImpersonating: boolean = localStorage.getItem('impersonating') ? true : false;

    editProfileVisible: boolean = false;
    currentUser: UserModel = {} as UserModel;

    constructor(
        private router: Router,
        private http: HttpClient,
        private service: MessageService
    ) {}

    async ngOnInit() {
        this.currentUser = await firstValueFrom(this.http.get<UserModel>(APIURL + Endpoints.Core.Users.Get_User + '?ID=' + JWTTokenHelpers.GetUserID()))
    }

    logOut() {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('perms');
        this.router.navigate(['/']);
    }

    showChangePassword() {
        this.changePasswordVisible = true;
    }

    async changePassword() {
        if (this.newPassword1 != this.newPassword2) {
            alert('New passwords are not identical!');
            return;
        }

        var input = {
            oldPassword: this.oldPassword,
            newPassword: this.newPassword1
        } as UpdatePasswordInput;
        await firstValueFrom(this.http.patch(APIURL + Endpoints.Core.Users.Patch_UpdatePassword, input))
        this.router.navigate(['/platform/auth']);
        this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Password updated!' });
    }

    showEditProfile() {
        this.editProfileVisible = true;
    }

    async updateUser() {
        this.currentUser = await firstValueFrom(this.http.patch<UserModel>(APIURL + Endpoints.Core.Users.Patch_UpdateUser, this.currentUser))
        this.editProfileVisible = false;
        this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Profile updated!' });
    }
}
