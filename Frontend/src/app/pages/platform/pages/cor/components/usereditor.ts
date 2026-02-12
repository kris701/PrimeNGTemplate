import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { FieldsetModule } from 'primeng/fieldset';
import { PermissionModel } from '../../../../../models/COR/permissionModel';
import { UserModel } from '../../../../../models/COR/userModel';
import { JWTTokenHelpers } from '../../../helpers/jwtTokenHelpers';
import { PermissionsEditor } from './permissionsEditor';
import { AddUserInput } from '../../../../../models/COR/addUserInput';
import { FloatTextInput } from '../../../../../common/components/floattextinput';
import { TableTextFilterColumn, TableBoolFilterColumn } from '../../../../../common/components/tables/filtercolumns';
import { TableBoolRow } from '../../../../../common/components/tables/filterrows';
import { FloatToggleSwitch } from '../../../../../common/components/floattoggleswitch';
import { firstValueFrom } from 'rxjs';
import { FloatTable } from "../../../../../common/components/floattable";
import { FloatDialog } from "../../../../../common/components/floatdialog";
import { BaseCRUDInterface } from '../../../../../common/interfaces/baseCRUDInterface';
import { PermissionHelpers } from '../../../helpers/permissionHelpers';
import { PermissionsTable } from '../../../../../../PermissionsTable';
import { UserInterface } from '../../../interfaces/usersinterface';
import { FloatPasswordInput } from "../../../../../common/components/floatpasswordinput";
import { ListGlbStaffModel } from '../../../../../models/CWO/listGlbStaffModel';
import { FloatSelect } from "../../../../../common/components/floatselect";

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
    FloatToggleSwitch,
    PermissionsEditor,
    FieldsetModule,
    TableTextFilterColumn,
    TableBoolFilterColumn,
    TableBoolRow,
    FloatTable,
    FloatDialog,
    FloatPasswordInput,
    FloatSelect
],
    template: `
        <app-floattable [values]="allItems" stateKey="core-users-session" [isLoading]="isLoading" [showAdd]="canWrite" (onAddItem)="showAddItem()" (onLoadItems)="loadItems()" (onShowItem)="showEditItem($event)">
            <ng-template #tableHeader>
                <th textfiltercolumn pSortableColumn="name" displayName="Name"></th>
                <th textfiltercolumn pSortableColumn="email" displayName="Email"></th>
                <th boolfiltercolumn pSortableColumn="isAtive" displayName="Active"></th>
            </ng-template>
            <ng-template #tableRows let-item>
                <td>{{ item.firstName }} {{ item.lastName }}</td>
                <td>{{ item.email }}</td>
                <td boolrow [value]="item.isActive"></td>
            </ng-template>
        </app-floattable>

        <app-floatdialog
            [currentItem]="currentItem"
            [(showDialog)]="showDialog"
            headerField="loginName"
            (onSaveItem)="saveItem()"
            (onDeleteItem)="deleteItem()"
            [canWrite]="canWrite"
            [style]="{'width':'50vw'}"
        >
            <ng-template #body>
                <app-floattoggleswitch [(value)]="currentItem.isActive" label="Active" [disabled]="!canWrite" [hidden]="!canWrite" class="w-full " />

                <p-fieldset legend="Login Information">
                    <div class="flex flex-col gap-2">
                        <p>The login name must be unique!</p>
                        <app-floattextinput [(value)]="currentItem.loginName" [disabled]="!canWrite" label="Login Name" icon="pi-sign-in" />
                        @if (currentItem.id == '') {
                            <app-floatpasswordinput [(value)]="newPassword1" [feedback]="true" label="Password" />
                            <app-floatpasswordinput [(value)]="newPassword2" [feedback]="true" label="Repeat Password" />
                        }
                    </div>
                </p-fieldset>
                <p-fieldset legend="General Information">
                    <div class="flex flex-col gap-2">
                        <app-floattextinput [(value)]="currentItem.firstName" [disabled]="!canWrite" label="First Name" icon="pi-pencil" />
                        <app-floattextinput [(value)]="currentItem.lastName" [disabled]="!canWrite" label="Last Name" icon="pi-pencil" />
                        <app-floattextinput [(value)]="currentItem.email" [disabled]="!canWrite" label="E-Mail" icon="pi-envelope" />
                        @if(canReadCWUsers){
                            <app-floatselect [(selected)]="currentItem.cwUserID" [showClear]="true" [options]="allCWUsers" optionValue="id" optionLabel="loginName" [disabled]="!canWrite" label="Linked CargoWise User"/>
                        }
                    </div>
                </p-fieldset>

                <div class="flex flex-row gap-2">
                    <p-fieldset class="w-full" legend="Permissions">
                        <div class="flex flex-col gap-2">
                            <app-core-components-permissionseditor [options]="permissionsList" [(selected)]="currentItem.permissions" [allowStaff]="currentItem.isStaff" />
                        </div>
                    </p-fieldset>
                </div>
            </ng-template>
        </app-floatdialog>
    `,
    host: {
        class: 'flex flex-col flex-grow'
    }
})
export class UserEditor extends BaseCRUDInterface {
    newPassword1: string = '';
    newPassword2: string = '';
    permissionsList: PermissionModel[] = [];

    override canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.COR_Users_Read);
    override canWrite: boolean = PermissionHelpers.HasPermission(PermissionsTable.COR_Users_Write);
    canReadPermissions: boolean = PermissionHelpers.HasPermission(PermissionsTable.COR_Permission_Read);
    canReadCWUsers: boolean = PermissionHelpers.HasPermission(PermissionsTable.CWO_GlbStaff_Read);

    allCWUsers : ListGlbStaffModel[] = [];

    override getAllEndpoint: string = Endpoints.COR.Users.Get_AllUsers;
    override getEndpoint: string = Endpoints.COR.Users.Get_User;
    override patchEndpoint: string = Endpoints.COR.Users.Patch_UpdateUser;
    override postEndpoint: string = Endpoints.COR.Users.Post_AddUser;
    override deleteEndpoint: string = Endpoints.COR.Users.Delete_User;

    override loadOnInit: boolean = false;

    override newItemTemplate(): any {
        return {
            id: '',
            loginName: 'newusername',
            firstName: 'New',
            lastName: 'User',
            email: 'None',
            isActive: true,
            isStaff: false,
            cwUserID: null
        } as UserModel;
    }

    constructor(
        http: HttpClient,
        public userInterface: UserInterface,
        service: MessageService,
        confirmationService: ConfirmationService
    ) {
        super(http, service, confirmationService);
    }

    override async ngOnInit() {
        await this.loadItems();
    }

    override async loadItems() {
        this.isLoading = true;
        if (this.canReadPermissions) {
            this.permissionsList = await firstValueFrom(this.http.get<PermissionModel[]>(APIURL + Endpoints.COR.Permissions.Get_AllPermissions));
        }
        if (this.canReadCWUsers) {
            this.allCWUsers = await firstValueFrom(this.http.get<ListGlbStaffModel[]>(APIURL + Endpoints.CWO.Get_AllGlobalStaff));
        }
        if (this.canRead) {
            this.allItems = await firstValueFrom(this.http.get<UserModel[]>(APIURL + Endpoints.COR.Users.Get_AllUsers));
        }
        this.isLoading = false;
    }

    override async deleteItem() {
        if (JWTTokenHelpers.GetUserID() == this.currentItem.id) {
            this.service.add({ severity: 'error', summary: 'Delete error!', detail: 'You cannot delete your own user!' });
            return;
        }
        if (this.allItems.length == 1) {
            this.service.add({ severity: 'error', summary: 'Delete error!', detail: 'There must always be at least one user!' });
            return;
        }
        super.deleteItem();
    }

    override async showAddItem() {
        this.newPassword1 = '';
        this.newPassword2 = '';
        super.showAddItem();
    }

    override async saveItem() {
        if (this.currentItem.id == '') {
            if (this.newPassword1 != this.newPassword2) {
                alert('New passwords are not identical!');
                return;
            }
            if (this.newPassword1 == '') {
                alert('New users must have a set password!');
                return;
            }

            var inputModel = {
                ...this.currentItem,
                password: this.newPassword1
            } as AddUserInput;

            await firstValueFrom(this.http.post<UserModel>(APIURL + Endpoints.COR.Users.Post_AddUser, inputModel));
            this.service.add({ severity: 'success', summary: 'Item Created!', detail: 'A new user was created' });
        } else {
            await firstValueFrom(this.http.patch<UserModel>(APIURL + Endpoints.COR.Users.Patch_UpdateUser, this.currentItem));
            this.service.add({ severity: 'success', summary: 'Item Updated!', detail: 'The user was updated with the new values' });
        }
        this.showDialog = false;
        await this.loadItems();
        this.userInterface.RefreshUsers();
    }
}
