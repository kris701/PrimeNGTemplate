import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../../../Endpoints';
import { APIURL } from '../../../../globals';
import { UserModel } from '../../../models/COR/userModel';
import { Injectable } from '@angular/core';
import { PermissionHelpers } from '../helpers/permissionHelpers';
import { PermissionsTable } from '../../../../PermissionsTable';
import { JWTTokenHelpers } from '../helpers/jwtTokenHelpers';

@Injectable()
export class UserInterface {
    public allUsers: UserModel[] = [];

    loaded: boolean = false;
    loading: boolean = false;

    constructor(private http: HttpClient) {
        this.loadAllUsers();
    }

    public RefreshUsers() {
        this.loadAllUsers();
    }

    public GetUserNameByID(id: string | null): string {
        if (id == undefined || id == null || id == '') return 'None';
        if (!this.loaded) this.loadAllUsers();
        var user = this.allUsers.find((x) => x.id == id) as UserModel;
        if (user)
            return user.firstName + ' ' + user.lastName;
        return 'Unknown User';
    }

    loadAllUsers() {
        if (this.loading) return;
        this.loaded = false;
        this.loading = true;
        this.allUsers = [];
        if (!PermissionHelpers.HasPermission(PermissionsTable.COR_Users_Read)){
            if (PermissionHelpers.HasPermission(PermissionsTable.COR_Users_Own_Read)){
                this.http.get<UserModel>(APIURL + Endpoints.COR.Users.Get_User + '?ID=' + JWTTokenHelpers.GetUserID()).subscribe((r) => {
                    this.allUsers.push(r);
                    this.loaded = true;
                    this.loading = false;
                }, (e) => (this.loading = false));
            }
            else {
                this.loaded = true;
                this.loading = false;
            }
            return;
        }
        this.http.get<UserModel[]>(APIURL + Endpoints.COR.Users.Get_AllUsers).subscribe(
            (l) => {
                this.allUsers = l;
                this.loaded = true;
                this.loading = false;
            },
            (e) => (this.loading = false)
        );
    }
}
