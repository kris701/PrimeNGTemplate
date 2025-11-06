import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TagModule } from 'primeng/tag';
import { Endpoints } from '../../../../../Endpoints';
import { APIURL } from '../../../../../globals';
import { AuthenticateInput } from '../../../../models/Core/authenticateInput';
import { AuthenticationOutput } from '../../../../models/Core/authenticationOutput';
import { JWTTokenModel } from '../../../../models/Core/jWTTokenModel';
import { LayoutService } from '../../../../layout/services/layout.service';
import { FloatTextInput } from '../../../../common/floattextinput';
import { FloatPasswordInput } from '../../../../common/floatpasswordinput';
import { MessageModule } from 'primeng/message';
import { AppConfigurator } from '../../../../layout/app.configurator';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, TagModule, DialogModule, ProgressSpinnerModule, CommonModule, FloatTextInput, FloatPasswordInput, MessageModule, AppConfigurator],
    template: `
        <app-configurator [hidden]="true" />
        <div class=" flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 25px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 2%, rgba(33, 150, 243, 0) 110%)">
                    <div class="w-full card py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-2">
                            @if (layoutService.isDarkTheme()) {
                                <img class="mb-2 w-64 shrink-0 mx-auto" src="src/assets/images/logo_large_transparant.png" />
                            } @else {
                                <img class="mb-2 w-64 shrink-0 mx-auto" src="src/assets/images/logo_large_transparant_inv.png" />
                            }
                            <div class="text-3xl font-medium mb-4">Welcome to Platform!</div>
                        </div>

                        @if (loginOption == LoginOptions.None) {
                            <div class="flex flex-col gap-2">
                                <label class="text-center">Select a sign in method</label>
                                <p-button label="Username and Password" icon="pi pi-key" styleClass="w-full" severity="secondary" raised rounded (click)="loginOption = LoginOptions.Default"></p-button>
                            </div>
                        } @else if (loginOption == LoginOptions.Default) {
                            <div class="flex flex-col gap-2">
                                <p-button icon="pi pi-arrow-left" label="Back" severity="secondary" fluid raised rounded (click)="loginOption = LoginOptions.None"></p-button>
                                <label class="text-center">Username and Password</label>
                                <label class="text-center" *ngIf="loginWasInvalid" [style]="{ color: 'red' }">Username or Password is invalid!</label>

                                <app-floattextinput label="Username or Email" icon="pi-user" [(value)]="loginName" [autoFocus]="true" />

                                <app-floatpasswordinput label="Password" icon="pi-asterisk" [(value)]="password" (onEnter)="doDefaultLogin()" />

                                <p-button label="Sign In" styleClass="w-full" raised rounded (click)="doDefaultLogin()"></p-button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>

        <p-dialog header="Loading..." [(visible)]="isLoggingIn" [modal]="true" [draggable]="false" [closable]="false">
            <p-progress-spinner ariaLabel="loading" [hidden]="!isLoggingIn" [style]="{ margin: '10px' }" />
        </p-dialog>
    `
})
export class Login {
    route = inject(ActivatedRoute);
    constructor(
        private router: Router,
        private http: HttpClient,
        public layoutService: LayoutService,
    ) {}

    LoginOptions = LoginOptions;
    loginOption: LoginOptions = LoginOptions.None;
    loginName: string = '';
    password: string = '';
    isLoggingIn: boolean = false;
    loginWasInvalid: boolean = false;

    otpCode: string = '';
    otpCodeSend: boolean = false;

    async ngOnInit() {
        if (!localStorage.getItem('jwtToken')) {
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('perms');
            localStorage.removeItem('impersonating');
        }
    }

    doDefaultLogin() {
        this.isLoggingIn = true;
        this.loginWasInvalid = false;
        var input = {
            username: this.loginName,
            password: this.password
        } as AuthenticateInput;
        this.http.post<AuthenticationOutput>(APIURL + Endpoints.Core.Authentication.Post_Authenticate, input).subscribe(
            (c) => this.processAuthResult(c),
            (e) => {
                this.isLoggingIn = false;
                this.loginWasInvalid = true;
            }
        );
    }

    processAuthResult(c: AuthenticationOutput) {
        if (c.jwtToken != '') {
            this.loginWasInvalid = false;
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

            var redirectTo = sessionStorage.getItem("redirectTo");
            if (redirectTo){
                sessionStorage.removeItem("redirectTo");
                window.location.replace(redirectTo);
            }
            else window.location.replace('/platform');
        }
    }
}

enum LoginOptions {
    None,
    Default
}
