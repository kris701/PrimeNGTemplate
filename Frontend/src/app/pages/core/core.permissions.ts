import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { APIURL } from '../../../globals';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { Endpoints } from '../../../Endpoints';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Table, TableModule } from 'primeng/table';
import { PermissionModel } from '../../models/Core/permissionModel';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-core-permissions',
    imports: [FormsModule, DataViewModule, CommonModule, DialogModule, ButtonModule, FloatLabelModule, InputTextModule, MultiSelectModule, PasswordModule, TableModule, TagModule ],
    template: `
        <div class="card">
            Here is the list of currently available permission values and their description.
        </div>
        <div class="card" [style]="{ height: '100%' }">
            <p-table [value]="permissionsList" [scrollable]="true" styleClass="mt-4" [paginator]="true" [rows]="13">
                <ng-template #header>
                    <tr>
                        <th style="min-width:200px" pFrozenColumn class="font-bold">Name</th>
                        <th style="min-width:100px">Id</th>
                        <th style="min-width:200px">Description</th>
                    </tr>
                </ng-template>
                <ng-template #body let-customer>
                    <tr>
                        <td pFrozenColumn class="font-bold">{{ customer.name }}</td>
                        <td style="min-width:100px"><p-tag severity="info">{{ customer.id }}</p-tag></td>
                        <td>{{ customer.description }}</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    `
})
export class CompanyManagementPermissions {
    permissionsList: PermissionModel[] = [];
 
    constructor(private http: HttpClient){ }

    ngOnInit(){
        this.permissionsList = [];
        this.http.get<PermissionModel[]>(APIURL + Endpoints.Core.Authentication.Get_AllPermissions).subscribe(l => {
            this.permissionsList = l;
        });
    }
}