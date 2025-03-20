import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, computed, inject, PLATFORM_ID, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../../globals';
import { Endpoints } from '../../../Endpoints';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JWTTokenHelpers } from '../../helpers/jwtTokenHelpers';
import { UpdatePasswordInput } from '../../models/Core/updatePasswordInput';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { UserModel } from '../../models/Core/userModel';
import { MessageService } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { PermissionsTable } from '../../../PermissionsTable';
import { TooltipModule } from 'primeng/tooltip';
import { ChipModule } from 'primeng/chip';

@Component({
    selector: 'app-usermenu',
    standalone: true,
    imports: [CommonModule, FormsModule, SelectButtonModule, DialogModule, PasswordModule, ButtonModule, FloatLabelModule, MultiSelectModule, InputTextModule, TooltipModule, ChipModule],
    template: `
        <div class="flex flex-col gap-2">
            <p-button icon="pi pi-key" label="Change Password" pTooltip="Change your password" (click)="showChangePassword()" [style]="{ width: '100%' }" [hidden]="!canChangePassword"/>
            <p-button icon="pi pi-user" label="View Profile" pTooltip="View and edit profile" (click)="showEditProfile()" [style]="{ width: '100%' }"/>
            <p-button icon="pi pi-sign-out" label="Log Out" severity="danger" pTooltip="Log out and return to the login screen" (click)="logOut()" [disabled]="isImpersonating" [style]="{ width: '100%' }"/>
            
            <p-dialog header="Change Password" [(visible)]="changePasswordVisible" [style]="{ width: '30vw' }" [modal]="true">
                <div class="card flex flex-col gap-2">
                    <p-password id="password1" [(ngModel)]="oldPassword" placeholder="Old Password" [toggleMask]="true" styleClass="mb-1" [fluid]="true" [feedback]="false"></p-password>
                    <p-password id="password2" [(ngModel)]="newPassword1" placeholder="New Password" [toggleMask]="true" styleClass="mb-1" [fluid]="true" [feedback]="true"></p-password>
                    <p-password id="password3" [(ngModel)]="newPassword2" placeholder="Repeat new Password" [toggleMask]="true" styleClass="mb-1" [fluid]="true" [feedback]="true"></p-password>
                </div>
                <ng-template #footer>
                    <p-button label="Confirm" (click)="changePassword()" />
                </ng-template>
            </p-dialog>

            <p-dialog header="Profile" [(visible)]="editProfileVisible" [breakpoints]="{ '960px': '95vw' }" [style]="{ width: '50vw' }" [modal]="true">
                <div class="card flex flex-col">
                    <p>Here you can view and modify your current profile information</p>
                    <h3>Login Information</h3>
                    <p>Your login name must be unique!</p>
                    <p-floatlabel variant="on">
                        <input pInputText id="loginname" type="text" [(ngModel)]="currentUser.loginName" [disabled]="!canEditProfile" [style]="{ width: '100%' }"/>
                        <label for="loginname">Login Name</label>
                    </p-floatlabel>

                    <h3>General Information</h3>
                    <div class="flex flex-col gap-2">
                        <p-floatlabel variant="on">
                            <input pInputText id="firstname" type="text" [(ngModel)]="currentUser.firstName"  [disabled]="!canEditProfile" [style]="{ width: '100%' }"/>
                            <label for="firstname">First Name</label>
                        </p-floatlabel>
                        <p-floatlabel variant="on">
                            <input pInputText id="lastname" type="text" [(ngModel)]="currentUser.lastName"  [disabled]="!canEditProfile" [style]="{ width: '100%' }"/>
                            <label for="lastname">Last Name</label>
                        </p-floatlabel>
                        <p-floatlabel variant="on">
                            <input pInputText id="email" type="text" [(ngModel)]="currentUser.email"  [disabled]="!canEditProfile" [style]="{ width: '100%' }"/>
                            <label for="email">Email</label>
                        </p-floatlabel>
                        <p-floatlabel variant="on">
                            <input pInputText id="phonenumber" type="text" [(ngModel)]="currentUser.phoneNumber"  [disabled]="!canEditProfile" [style]="{ width: '100%' }"/>
                            <label for="phonenumber">Phone Number</label>
                        </p-floatlabel>
                    </div>
                </div>
                <ng-template #footer>
                    <p-button label="Save" (click)="updateUser()" [hidden]="!canEditProfile" />
                </ng-template>
            </p-dialog>
        </div>
    `,
    host: {
        class: 'hidden absolute top-[3.25rem] right-0 w-72 p-4 card border border-surface rounded-border origin-top shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]'
    }
})
export class UserMenu {
    changePasswordVisible: boolean = false;
    oldPassword:string = "";
    newPassword1:string = "";
    newPassword2:string = "";

    canChangePassword : boolean = PermissionHelpers.HasPermission(PermissionsTable.Core_User_ChangePassword);
    canEditProfile : boolean = PermissionHelpers.HasPermission(PermissionsTable.Core_User_EditProfile);
    isImpersonating : boolean = localStorage.getItem("impersonating") ? true : false;

    editProfileVisible: boolean = false;
    currentUser : UserModel = {} as UserModel;

    constructor(private router: Router, private http: HttpClient, private service: MessageService) {}

    ngOnInit(){
        this.http.get<UserModel>(APIURL + Endpoints.Core.Users.Get_User + "?ID=" + JWTTokenHelpers.GetUserID()).subscribe(r => {
            this.currentUser = r;
        })
    }

    logOut() {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("perms");
        this.router.navigate(["/auth/login"]);
    }

    showChangePassword(){
        this.changePasswordVisible = true;
    }

    changePassword(){
        if (this.newPassword1 != this.newPassword2)
        {
            alert("New passwords are not identical!");
            return;
        }

        var input = {
            oldPassword: this.oldPassword,
            newPassword: this.newPassword1
        } as UpdatePasswordInput;
        this.http.post<UpdatePasswordInput>(APIURL + Endpoints.Core.Authentication.Post_UpdatePassword, input).subscribe(
            () => {
                this.router.navigate(["/auth/login"]);
            }
        );
    }

    showEditProfile(){
        this.editProfileVisible = true;
    }

    updateUser() {
        this.http.patch<UserModel>(APIURL + Endpoints.Core.Users.Patch_UpdateUser, this.currentUser).subscribe(() => {
            this.editProfileVisible = false;
            this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Profile updated!' });
        });
    }
}
