import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { VersionTag } from './globals';
import { JWTTokenHelpers } from './app/helpers/jwtTokenHelpers';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, ToastModule, TagModule],
    template: `<p-toast /><router-outlet></router-outlet><p-tag [style]="{ 'position': 'fixed', 'right':'15px', 'bottom':'15px', 'z-index':'9999' }">Version {{versionTag}}</p-tag>`
})
export class AppComponent {
    versionTag : string = VersionTag;

    constructor(private router: Router, private service: MessageService){ }

    ngOnInit(){
        if (!JWTTokenHelpers.IsTokenSet())
            this.router.navigate(["/auth/login"]);
        else if (JWTTokenHelpers.IsExpired()){
            this.router.navigate(["/auth/login"]);
            this.service.add({ severity: 'warning', summary: 'Warning Message', detail: 'JWT Token expired! Please login again.' });
        }
    }
}
