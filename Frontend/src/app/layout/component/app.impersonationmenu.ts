import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, computed, inject, PLATFORM_ID, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { $t, updatePreset, updateSurfacePalette } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import Lara from '@primeng/themes/lara';
import Nora from '@primeng/themes/nora';
import { PrimeNG } from 'primeng/config';
import { SelectButtonModule } from 'primeng/selectbutton';
import * as jwt_decode from "jwt-decode";
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../../globals';
import { Endpoints } from '../../../Endpoints';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SelectModule } from 'primeng/select';
import { UserInterface } from '../../interfaces/usersinterface';
import { ImpersonateInput } from '../../models/Core/impersonateInput';
import { AuthenticationOutput } from '../../models/Core/authenticationOutput';
import { JWTTokenModel } from '../../models/Core/jWTTokenModel';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'app-impersonationmenu',
    standalone: true,
    imports: [CommonModule, FormsModule, SelectButtonModule, DialogModule, PasswordModule, ButtonModule, SelectModule, TooltipModule],
    template: `
        <div class="flex flex-col gap-2" *ngIf="!isImpersonating()">
            <p-select [options]="userInterface.allUsers" [(ngModel)]="targetID" optionValue="id" placeholder="Select User" display="chip" [filter]="true">
                <ng-template let-user #item>
                    <div class="flex items-center">
                        <span>{{userInterface.GetUserNameByID(user.id)}}</span>
                    </div>
                </ng-template>
                <ng-template let-user pTemplate="selectedItem">
                    <div class="item">
                        <span>{{userInterface.GetUserNameByID(user.id)}}</span>
                    </div>
                </ng-template>
            </p-select>
            <p-button icon="pi pi-user" label="Impersonate"  pTooltip="Impersonate the selected user" (click)="impersonate()" [style]="{ width: '100%' }"/>
        </div>
        <div class="flex flex-col gap-4" *ngIf="isImpersonating()">
            <p-button icon="pi pi-eject" severity="danger" label="Stop Impersonating" (click)="stopImpersonate()" [style]="{ width: '100%' }"/>
        </div>
    `,
    host: {
        class: 'hidden absolute top-[3.25rem] right-0 w-72 p-4 card border border-surface rounded-border origin-top shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]'
    }
})
export class ImpersonationMenu {
    userInterface : UserInterface;
    targetID : string = "";

    constructor(private router: Router, private http: HttpClient, userInterface : UserInterface) {
        this.userInterface = userInterface;
    }
    
    ngOnInit(){
        if (this.isImpersonating())
            return;
    }

    impersonate(){
        if (this.targetID == null || this.targetID == "")
            return;
        var token = localStorage.getItem("jwtToken");
        if (token)
            localStorage.setItem("impersonating", token);
        var input = {
            targetUser: this.targetID
        } as ImpersonateInput;
        this.http.post<AuthenticationOutput>(APIURL + Endpoints.Core.Authentication.Post_Impersonate, input).subscribe(c => {
            if (c.jwtToken != "")
            {
                localStorage.removeItem("perms");
                const helper = new JwtHelperService();
                var result = helper.decodeToken<JWTTokenModel>(c.jwtToken);
                if (!result)
                    return;
                if (result.role == null)
                    result.role = [];
                var permsStr = "";
                result.role.forEach(p => {
                    permsStr += p + ";"
                });
                localStorage.setItem("perms", permsStr);
                localStorage.setItem("jwtToken", c.jwtToken);
                window.location.replace("/");
            }
        });
    }

    stopImpersonate(){
        var impToken = localStorage.getItem("impersonating");
        var token = localStorage.getItem("jwtToken");
        if (token && impToken){
            localStorage.removeItem("perms");
            const helper = new JwtHelperService();
            var result = helper.decodeToken<JWTTokenModel>(impToken);
            if (!result)
                return;
            if (result.role == null)
                result.role = [];
            var permsStr = "";
            result.role.forEach(p => {
                permsStr += p + ";"
            });
            localStorage.setItem("perms", permsStr);
            localStorage.setItem("jwtToken", impToken);
            localStorage.removeItem("impersonating");
            window.location.replace("/");
        }
    }

    isImpersonating() : boolean {
        if (localStorage.getItem("impersonating"))
            return true;
        return false;
    }
}
