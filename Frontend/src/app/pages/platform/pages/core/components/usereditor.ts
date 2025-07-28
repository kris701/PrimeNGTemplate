import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
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
import { Endpoints } from '../../../../../../Endpoints';
import { APIURL } from '../../../../../../globals';
import { BooleanLabelControl } from '../../../../../common/booleanlabelcontrol';
import { FieldsetModule } from 'primeng/fieldset';
import { CreatedUpdatedControl } from '../../../../../common/createdupdatedcontrol';
import { FloatTextInput } from '../../../../../common/floattextinput';
import { ToggleSwitchLabel } from '../../../../../common/toggleswitchlabel';
import { PermissionModel } from '../../../../../models/Core/permissionModel';
import { UserModel } from '../../../../../models/Core/userModel';
import { JWTTokenHelpers } from '../../../helpers/jwtTokenHelpers';
import { PermissionsEditor } from './permissionsEditor';
import { ConfirmDialogHelpers } from '../../../helpers/confirmdialoghelpers';
import { AddUserInput } from '../../../../../models/Core/addUserInput';
import { TableEmptyMessage } from '../../../../../common/tables/emptymessage';
import { TableTextFilterColumn, TableBoolFilterColumn } from '../../../../../common/tables/filtercolumns';
import { TableBoolRow } from '../../../../../common/tables/filterrows';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-core-components-usereditor',
    imports: [
        FormsModule,
        CommonModule,
        DialogModule,
        ButtonModule,
        FloatLabelModule,
        InputTextModule,
        MultiSelectModule,
        PasswordModule,
        TableModule,
        ChipModule,
        TooltipModule,
        ConfirmDialogModule,
        TagModule,
        FloatTextInput,
        ToggleSwitchLabel,
        TableTextFilterColumn,
        TableEmptyMessage,
        TableBoolRow,
        TableBoolFilterColumn,
        CreatedUpdatedControl,
        PermissionsEditor,
        FieldsetModule
    ],
    template: `

        <p-table
            #dt1
            [value]="allItems"
            stateStorage="local"
            stateKey="core-company-users-session"
            dataKey="id"
            sortMode="multiple"
            [loading]="isLoading"
            [paginator]="allItems.length > 10"
            [rows]="10"
            [rowsPerPageOptions]="[10, 25, 50, 100]"
            [showCurrentPageReport]="true"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <p-button label="Clear" rounded raised text icon="pi pi-filter-slash" (click)="dt1.clear(); dt1.stateKey ? localStorage.removeItem(dt1.stateKey) : null" />
                    <p-button icon="pi pi-plus" label="Add User" rounded raised (click)="showAddItem()" [hidden]="!canWrite" />
                    <p-button icon="pi pi-refresh" rounded raised (click)="loadItems()" />
                </div>
            </ng-template>
            <ng-template #header>
                <tr *ngIf="allItems.length > 0">
                    <th textfiltercolumn pSortableColumn="name" displayName="Name"></th>
                    <th textfiltercolumn pSortableColumn="email" displayName="Email"></th>
                    <th boolfiltercolumn pSortableColumn="isActive" displayName="Active"></th>
                    <th boolfiltercolumn pSortableColumn="isStaff" displayName="Staff"></th>
                </tr>
            </ng-template>
            <ng-template #body let-item>
                <tr (click)="showEditItem(item.id)" class="rowclickable">
                    <td>{{ item.firstName }} {{ item.lastName }}</td>
                    <td>{{ item.email }}</td>
                    <td boolrow [value]="item.isActive"></td>
                    <td boolrow [value]="item.isStaff"></td>
                </tr>
            </ng-template>
            <ng-template #emptymessage>
                <td emptymessage>No users have been made yet...</td>
            </ng-template>
        </p-table>

        <p-dialog [(visible)]="showDialog" [breakpoints]="{ '960px': '95vw' }" [style]="{ width: '50vw' }" [modal]="true" [draggable]="false">
            <ng-template #header>
                <div class="inline-flex items-center justify-center gap-2">
                    <span class="font-bold whitespace-nowrap">{{ currentUser.loginName }}</span>
                    <app-createdupdated [createdAt]="currentUser.createdAt" [updatedAt]="currentUser.updatedAt" />
                </div>
            </ng-template>
            <div class="flex flex-col gap-2">
                <app-toggleswitchlabel [(value)]="currentUser.isActive" label="Is Active?" [disabled]="!canWrite" [hidden]="!canWrite" class="w-full " />
                <app-toggleswitchlabel [(value)]="currentUser.isStaff" label="Is Staff?" [disabled]="!canWrite" [hidden]="!canWrite" class="w-full " />

                <p-fieldset legend="Login Information">
                    <div class="flex flex-col gap-2">
                        <p>The login name must be unique!</p>
                        <app-floattextinput [(value)]="currentUser.loginName" [disabled]="!canWrite" label="Login Name" icon="pi-sign-in" />
                        @if (currentUser.id == '') {
                            <div class="gap-2">
                                <p-password id="password1" [(ngModel)]="newPassword1" placeholder="Password" [toggleMask]="true" styleClass="mb-1" [fluid]="true" [feedback]="true"></p-password>
                                <p-password id="password2" [(ngModel)]="newPassword2" placeholder="Repeat Password" [toggleMask]="true" styleClass="mb-1" [fluid]="true" [feedback]="true"></p-password>
                            </div>
                        }
                    </div>
                </p-fieldset>
                <p-fieldset legend="General Information">
                    <div class="flex flex-col gap-2">
                        <app-floattextinput [(value)]="currentUser.firstName" [disabled]="!canWrite" label="First Name" icon="pi-pencil" />
                        <app-floattextinput [(value)]="currentUser.lastName" [disabled]="!canWrite" label="Last Name" icon="pi-pencil" />
                        <app-floattextinput [(value)]="currentUser.email" [disabled]="!canWrite" label="E-Mail" icon="pi-envelope" />
                    </div>
                </p-fieldset>

                <p-fieldset legend="Permissions">
                    <div class="flex flex-col gap-2">
                        <app-core-components-permissionseditor [options]="permissionsList" [(selected)]="currentUser.permissions" [allowStaff]="currentUser.isStaff"/>
                    </div>
                </p-fieldset>
            </div>
            <ng-template #footer>
                <p-button label="Save" icon="pi pi-save" (click)="saveItem()" [hidden]="!canWrite" />
                <p-confirmdialog />
                <p-button icon="pi pi-times" label="Delete" severity="danger" [disabled]="cannotDelete(currentUser.id)" (click)="deleteItem(currentUser.id)" [hidden]="!canWrite"></p-button>
            </ng-template>
        </p-dialog>
    `
})
export class UserEditor {
    newPassword1: string = '';
    newPassword2: string = '';
    permissionsList: PermissionModel[] = [];
    isLoading: boolean = true;

    localStorage = localStorage;

    @Input() canRead: boolean = false;
    @Input() canWrite: boolean = false;
    @Input() canReadPermissions: boolean = false;

    showDialog: boolean = false;

    allItems: UserModel[] = [];
    currentUser: UserModel = {} as UserModel;

    constructor(
        private http: HttpClient,
        private service: MessageService,
        private confirmationService: ConfirmationService,
    ) {}

    async ngOnInit(){
        await this.loadAll();
    }

    async loadAll() {
        if (this.canReadPermissions) await this.loadPermissions();
        if (this.canRead) await this.loadItems();
    }

    cannotDelete(userID: string): boolean {
        if (this.allItems.length == 1) return true;
        if (JWTTokenHelpers.GetUserID() == userID) return true;
        return false;
    }

    showAddItem() {
        this.currentUser = {
            id: '',
            loginName: 'newusername',
            firstName: 'New',
            lastName: 'User',
            email: 'None',
            isActive: true,
            isStaff: false
        } as UserModel;
        this.showDialog = true;
    }

    async showEditItem(userID: string) {
        this.currentUser = await firstValueFrom(this.http.get<UserModel>(APIURL + Endpoints.Core.Users.Get_User + '?ID=' + userID))
        this.showDialog = true;
    }

    async deleteItem(userID: string) {
        await this.confirmationService.confirm({
            ...ConfirmDialogHelpers.DeleteContent(),
            message: 'Are you sure you want to delete this user?',
            accept: async () => {
                await firstValueFrom(this.http.delete(APIURL + Endpoints.Core.Users.Delete_User + '?ID=' + userID))
                this.service.add({ severity: 'info', summary: 'Info Message', detail: 'User deleted!' });
                this.showDialog = false;
                await this.loadItems();
            }
        });
    }

    async loadItems() {
        this.isLoading = true;
        this.allItems = await firstValueFrom(this.http.get<UserModel[]>(APIURL + Endpoints.Core.Users.Get_AllUsers))
        this.isLoading = false;
    }

    async loadPermissions() {
        this.isLoading = true;
        this.permissionsList = await firstValueFrom(this.http.get<PermissionModel[]>(APIURL + Endpoints.Core.Permissions.Get_AllPermissions));
        this.isLoading = false;
    }

    async saveItem() {
        if (this.currentUser.id == '') {
            if (this.newPassword1 != this.newPassword2) {
                alert('New passwords are not identical!');
                return;
            }
            if (this.newPassword1 == '') {
                alert('New users must have a set password!');
                return;
            }

            var inputModel = {
                ...this.currentUser,
                password: this.newPassword1
            } as AddUserInput;

            await firstValueFrom(this.http.post<UserModel>(APIURL + Endpoints.Core.Users.Post_AddUser, inputModel))
            this.showDialog = false;
            this.service.add({ severity: 'info', summary: 'Info Message', detail: 'User created!' });
            await this.loadItems();
        } else {
            await firstValueFrom(this.http.patch<UserModel>(APIURL + Endpoints.Core.Users.Patch_UpdateUser, this.currentUser))
            this.showDialog = false;
            this.service.add({ severity: 'info', summary: 'Info Message', detail: 'User updated!' });
            await this.loadItems();
        }
    }
}
