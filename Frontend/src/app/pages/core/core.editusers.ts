import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { APIURL } from '../../../globals';
import { CommonModule } from '@angular/common';
import { Endpoints } from '../../../Endpoints';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { Table, TableModule } from 'primeng/table';
import { JWTTokenHelpers } from '../../helpers/jwtTokenHelpers';
import { MessageService } from 'primeng/api';
import { UserModel } from '../../models/Core/userModel';
import { PermissionModel } from '../../models/Core/permissionModel';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { AddCompanyUserInput } from '../../models/Core/addCompanyUserInput';
import { PermissionsTable } from '../../../PermissionsTable';
import { ActivatedRoute } from '@angular/router';
import { ChipModule } from 'primeng/chip';

@Component({
    selector: 'app-core-front',
    imports: [FormsModule, CommonModule, DialogModule, ButtonModule, FloatLabelModule, InputTextModule, MultiSelectModule, PasswordModule, TableModule, ChipModule ],
    template: `
        <div class="card">
            <p>Here you can add, edit and remove users from the system.</p>
            <p>Do remember, if you update the permissions for a user (including yourself) they will have to log out and log back in again for the changes to take effect.</p>
        </div>
        <div class="card">
            <p-table [value]="allUsers" [scrollable]="true" styleClass="mt-4" [paginator]="true" [rows]="9" [loading]="isLoading" selectionMode="single" (onRowSelect)="showEditUser($event.data.id)">
                <ng-template #caption>
                    <div class="flex items-center justify-between">
                        <p-button icon="pi pi-plus" label="Add User" rounded raised (click)="showAddUser()" [hidden]="!canWrite"/>
                        <p-button icon="pi pi-refresh" rounded raised (click)="loadUsers()" />
                    </div>
                </ng-template>
                <ng-template #header>
                    <tr>
                        <th pFrozenColumn class="font-bold">Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </ng-template>
                <ng-template #body let-user>
                    <tr [pSelectableRow]="user">
                        <td pFrozenColumn class="font-bold">{{ user.firstName }} {{ user.lastName }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phoneNumber }}</td>
                    </tr>
                </ng-template>
            </p-table>

            <p-dialog header="Add User" [(visible)]="showAddUserDialog" [breakpoints]="{ '960px': '95vw' }" [style]="{ width: '50vw' }" [modal]="true">
                <div class="card flex flex-col gap-3">
                    <h3>Login Information</h3>
                    <p-floatlabel variant="on">
                        <input pInputText id="loginname" type="text" [(ngModel)]="currentNewUser.loginName"  [style]="{ width: '100%' }"/>
                        <label for="loginname">Login Name</label>
                    </p-floatlabel>

                    <div class="gap-1">
                        <p-password id="password1" [(ngModel)]="newPassword1" placeholder="New Password" [toggleMask]="true" styleClass="mb-1" [fluid]="true" [feedback]="false"></p-password>
                        <p-password id="password2" [(ngModel)]="newPassword2" placeholder="Repeat new Password" [toggleMask]="true" styleClass="mb-1" [fluid]="true" [feedback]="false"></p-password>
                    </div>

                    <p-multiselect [options]="permissionsList" [(ngModel)]="currentNewUser.permissions" optionValue="id" placeholder="Select Permissions" display="chip" [filter]="true" filterBy="id">
                        <ng-template let-permission #item>
                            <div class="flex flex-col gap-2" [style]="{ 'text-wrap': 'auto' }">
                                <label class="text-surface-500 dark:text-surface-400">{{ permission.id }}</label>
                                <label class="font-bold">{{ permission.name }}</label>
                                <label>{{ permission.description }}</label>
                            </div>
                        </ng-template>
                        <ng-template let-items pTemplate="selecteditems">
                            <div *ngFor="let item of items">
                                <p-chip [label]="item"></p-chip>
                            </div>
                        </ng-template>
                    </p-multiselect>

                    <h3>General Information</h3>
                    <p-floatlabel variant="on">
                        <input pInputText id="firstname" type="text" [(ngModel)]="currentNewUser.firstName"  [style]="{ width: '100%' }"/>
                        <label for="firstname">First Name</label>
                    </p-floatlabel>
                    <p-floatlabel variant="on">
                        <input pInputText id="lastname" type="text" [(ngModel)]="currentNewUser.lastName" [style]="{ width: '100%' }" />
                        <label for="lastname">Last Name</label>
                    </p-floatlabel>
                    <p-floatlabel variant="on">
                        <input pInputText id="email" type="text" [(ngModel)]="currentNewUser.email"  [style]="{ width: '100%' }"/>
                        <label for="email">Email</label>
                    </p-floatlabel>
                    <p-floatlabel variant="on">
                        <input pInputText id="phonenumber" type="text" [(ngModel)]="currentNewUser.phoneNumber"  [style]="{ width: '100%' }"/>
                        <label for="phonenumber">Phone Number</label>
                    </p-floatlabel>
                </div>
                <ng-template #footer>
                    <p-button label="Create User" icon="pi pi-save" (click)="addNewUser()" [hidden]="!canWrite" />
                </ng-template>
            </p-dialog>

            <p-dialog [(visible)]="showEditUserDialog" [breakpoints]="{ '960px': '95vw' }" [style]="{ width: '50vw' }" [modal]="true">
                <ng-template #header>
                    <div class="inline-flex items-center justify-center gap-2">
                        <span class="font-bold whitespace-nowrap">{{currentUser.loginName}}</span>
                    </div>
                </ng-template>
                <div class="card flex flex-col gap-3">
                    <h3>Login Information</h3>
                    <p-floatlabel variant="on">
                        <input pInputText id="loginname" type="text" [(ngModel)]="currentUser.loginName" [disabled]="!canWrite"  [style]="{ width: '100%' }"/>
                        <label for="loginname">Login Name</label>
                    </p-floatlabel>

                    <h3 [hidden]="!canReadPermissions">Permissions</h3>
                    <p-multiselect [options]="permissionsList" [(ngModel)]="currentUser.permissions" placeholder="Select Permissions" optionValue="id" display="chip" [filter]="true" [disabled]="!canWrite" *ngIf="canReadPermissions" filterBy="id">
                        <ng-template let-permission #item>
                            <div class="flex flex-col gap-2" [style]="{ 'text-wrap': 'auto' }">
                                <label class="text-surface-500 dark:text-surface-400">{{ permission.id }}</label>
                                <label class="font-bold">{{ permission.name }}</label>
                                <label>{{ permission.description }}</label>
                            </div>
                        </ng-template>
                        <ng-template let-items pTemplate="selecteditems">
                            <div *ngFor="let item of items">
                                <p-chip [label]="item"></p-chip>
                            </div>
                        </ng-template>
                    </p-multiselect>

                    <h3>General Information</h3>
                    <p-floatlabel variant="on">
                        <input pInputText id="firstname" type="text" [(ngModel)]="currentUser.firstName"  [disabled]="!canWrite" [style]="{ width: '100%' }"/>
                        <label for="firstname">First Name</label>
                    </p-floatlabel>
                    <p-floatlabel variant="on">
                        <input pInputText id="lastname" type="text" [(ngModel)]="currentUser.lastName"  [disabled]="!canWrite" [style]="{ width: '100%' }"/>
                        <label for="lastname">Last Name</label>
                    </p-floatlabel>
                    <p-floatlabel variant="on">
                        <input pInputText id="email" type="text" [(ngModel)]="currentUser.email"  [disabled]="!canWrite" [style]="{ width: '100%' }"/>
                        <label for="email">Email</label>
                    </p-floatlabel>
                    <p-floatlabel variant="on">
                        <input pInputText id="phonenumber" type="text" [(ngModel)]="currentUser.phoneNumber"  [disabled]="!canWrite" [style]="{ width: '100%' }"/>
                        <label for="phonenumber">Phone Number</label>
                    </p-floatlabel>
                </div>
                <ng-template #footer>
                    <p-button label="Save" icon="pi pi-save" (click)="updateUser()" [hidden]="!canWrite" />
                    <p-button icon="pi pi-times" label="Delete" severity="danger" [disabled]="cannotDelete(currentUser.id)" (click)="deleteUser(currentUser.id)" [hidden]="!canWrite"></p-button>
                </ng-template>
            </p-dialog>
        </div>
    `
})
export class CompanyManagementEditUsers {
    newPassword1: string = "";
    newPassword2: string = "";
    permissionsList: PermissionModel[] = [];
    showAddUserDialog: boolean = false;
    isLoading : boolean = true;

    canRead : boolean = PermissionHelpers.HasPermission(PermissionsTable.Core_Users_Read);
    canWrite : boolean = PermissionHelpers.HasPermission(PermissionsTable.Core_Users_Write);
    canReadPermissions : boolean = PermissionHelpers.HasPermission(PermissionsTable.Core_Permission_Read);

    showEditUserDialog: boolean = false;

    allUsers : UserModel[] = [];
    currentUser : UserModel = {} as UserModel;
    currentNewUser : AddCompanyUserInput = {} as AddCompanyUserInput;

    constructor(private http: HttpClient, private service: MessageService){ }

    ngOnInit(){
        if (this.canReadPermissions)
            this.loadPermissions();
        if (this.canRead)
            this.loadUsers();
    }

    cannotDelete(userID : string) : boolean{
        if (JWTTokenHelpers.GetUserID() == userID)
            return true;
        return false;
    }

    showAddUser(){
        this.currentNewUser = {
            firstName: "New",
            lastName : "User"
        } as AddCompanyUserInput;
        this.showAddUserDialog = true;
    }

    showEditUser(userID : string){
        this.http.get<UserModel>(APIURL + Endpoints.Core.Users.Get_User + "?ID=" + userID).subscribe(u => {
            this.currentUser = u;
            this.showEditUserDialog = true;
        });
    }

    deleteUser(userID : string){
        if (confirm("Are you sure you want to delete this user?")){
            this.http.delete(APIURL + Endpoints.Core.Users.Delete_User + "?ID=" + userID).subscribe(() => {
                this.service.add({ severity: 'info', summary: 'Info Message', detail: 'User deleted!' });
                this.loadUsers();
            });
        }
    }

    loadUsers(){
        this.isLoading = true;
        this.http.get<UserModel[]>(APIURL + Endpoints.Core.Users.Get_AllUsers).subscribe(l => {
            this.allUsers = l;
            this.isLoading = false;
        });
    }

    loadPermissions(){
        this.permissionsList = [];
        this.http.get<PermissionModel[]>(APIURL + Endpoints.Core.Authentication.Get_AllPermissions).subscribe(l => {            
            this.permissionsList = l;
        });
    }
    
    async addNewUser() {
        if (this.newPassword1 != this.newPassword2)
        {
            alert("New passwords are not identical!");
            return;
        }
        if (this.newPassword1 == "")
        {
            alert("New users must have a set password!");
            return;
        }

        this.currentNewUser.password = this.newPassword1;

        console.log(this.currentNewUser)

        this.http.post<UserModel>(APIURL + Endpoints.Core.Users.Post_AddUser, this.currentNewUser).subscribe(() => {
            this.showAddUserDialog = false;
            this.service.add({ severity: 'info', summary: 'Info Message', detail: 'User created!' });
            this.loadUsers();
        });
    }

    updateUser() {
        this.http.patch<UserModel>(APIURL + Endpoints.Core.Users.Patch_UpdateUser, this.currentUser).subscribe(() => {
            this.showEditUserDialog = false;
            this.service.add({ severity: 'info', summary: 'Info Message', detail: 'User updated!' });
            this.loadUsers();
        });
    }
}