import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';
import { Endpoints } from '../../../../Endpoints';
import { APIURL } from '../../../../globals';
import { AuthenticationOutput } from '../../../models/COR/authenticationOutput';
import { ImpersonateInput } from '../../../models/COR/impersonateInput';
import { JWTTokenModel } from '../../../models/COR/jWTTokenModel';
import { ListUserModel } from '../../../models/COR/listUserModel';
import { FloatSelect } from '../../../common/components/floatselect';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-impersonationmenu',
    standalone: true,
    imports: [CommonModule, FormsModule, SelectButtonModule, DialogModule, PasswordModule, ButtonModule, SelectModule, TooltipModule, FloatSelect],
    template: `
        <div class="flex flex-col gap-2" *ngIf="!isImpersonating()">
            <span class="text-sm text-muted-color font-semibold">Select a user to impersonate</span>
            <app-floatselect [(selected)]="targetID" [options]="allUsers" optionLabel="loginName" optionValue="id" (selectedChange)="impersonate()" icon="pi-user" />
        </div>
        <div class="flex flex-col gap-4" *ngIf="isImpersonating()">
            <p-button icon="pi pi-eject" severity="danger" label="Stop Impersonating" (click)="stopImpersonate()" [style]="{ width: '100%' }" />
        </div>
    `
})
export class ImpersonationMenu {
    targetID: string = '';
    allUsers : ListUserModel[] = []

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
    }

    async ngOnInit() {
        if (this.isImpersonating()) return;
        await this.loadAllUsers();
    }

    async loadAllUsers(){
        this.allUsers = await firstValueFrom(this.http.get<ListUserModel[]>(APIURL + Endpoints.COR.Users.Get_AllUsers))
    }

    async impersonate() {
        if (this.targetID == null || this.targetID == '') return;
        var token = localStorage.getItem('jwtToken');
        if (token) localStorage.setItem('impersonating', token);
        var input = {
            targetUser: this.targetID
        } as ImpersonateInput;
        var c = await firstValueFrom(this.http.post<AuthenticationOutput>(APIURL + Endpoints.COR.Authentication.Post_Impersonate, input));
        if (c.jwtToken != '') {
            localStorage.removeItem('perms');
            const helper = new JwtHelperService();
            var result = helper.decodeToken<JWTTokenModel>(c.jwtToken);
            if (!result) return;
            if (result.role == null) result.role = [];
            var permsStr = '';
            result.role.forEach((p) => {
                permsStr += p + ';';
            });
            localStorage.setItem('perms', permsStr);
            localStorage.setItem('jwtToken', c.jwtToken);
            window.location.replace('/platform');
        }
    }

    stopImpersonate() {
        var impToken = localStorage.getItem('impersonating');
        var token = localStorage.getItem('jwtToken');
        if (token && impToken) {
            localStorage.removeItem('perms');
            const helper = new JwtHelperService();
            var result = helper.decodeToken<JWTTokenModel>(impToken);
            if (!result) return;
            if (result.role == null) result.role = [];
            var permsStr = '';
            result.role.forEach((p) => {
                permsStr += p + ';';
            });
            localStorage.setItem('perms', permsStr);
            localStorage.setItem('jwtToken', impToken);
            localStorage.removeItem('impersonating');
            window.location.replace('/platform');
        }
    }

    isImpersonating(): boolean {
        if (localStorage.getItem('impersonating')) return true;
        return false;
    }
}
