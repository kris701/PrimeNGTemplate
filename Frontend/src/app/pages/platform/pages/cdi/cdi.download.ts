import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { APIURL } from '../../../../../globals';
import { Endpoints } from '../../../../../Endpoints';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { ClientModel } from '../../../../models/CDI/clientModel';
import { firstValueFrom } from 'rxjs';
import saveAs from 'file-saver';
import { Fieldset } from "primeng/fieldset";
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
    selector: 'app-cdi-download',
    imports: [FormsModule, CommonModule, DialogModule, ButtonModule, FloatLabelModule, InputTextModule, MultiSelectModule, PasswordModule, TableModule, Fieldset, ProgressSpinnerModule],
    template: `
    @if(!isLoading){
        <div class="card">
            <p>Here you can download CargoBI Clients.</p>
            @if(allItems.length == 0){
                <p>No clients available to you...</p>
            }
            @for(group of allItems; track group.name){
                <p-fieldset [legend]="group.name">
                    <div class="flex flex-col gap-2">
                        <p>Here you can download the {{group.name}} client.</p>
                        <p>Select a version below to download!</p>
                        <p-button label="Download {{group.newestVersion.name}} version {{group.newestVersion.version}} (Latest)" rounded raised (onClick)="downloadClient(group.newestVersion)" [disabled]="downloading"/>
                        @for(client of group.otherVersions; track client.id) {
                            <p-button label="Download {{client.name}} version {{client.version}}" (onClick)="downloadClient(client)" text rounded raised [disabled]="downloading"/>
                        }
                    </div>
                </p-fieldset>
            }
        </div>
    }
    @else {
        <p-progress-spinner ariaLabel="loading" />
    }
    @if(downloading){
        <p>Downloading client...</p>
        <p-progress-spinner ariaLabel="loading" />
    }
    `
})
export class CDIDownload {
    allItems: ClientGroup[] = [];
    isLoading: boolean = true;
    downloading: boolean = false;

    canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.CDI_Read);

    constructor(
        private http: HttpClient,
        private service: MessageService
    ) {}

    async ngOnInit() {
        if (this.canRead) await this.loadItems();
    }

    async loadItems() {
        this.isLoading = true;
        var newGroups : ClientGroup[] = []
        var clients = await firstValueFrom(this.http.get<ClientModel[]>(APIURL + Endpoints.CDI.Get_AllClients));
        var clientNames = clients.map(x => x.name);
        clientNames.forEach(x => {
            if (!newGroups.find(y => y.name == x))
                newGroups.push({
                    name: x,
                    newestVersion: {} as ClientModel,
                    otherVersions: []
                } as ClientGroup)
        })
        clients.forEach(x => {
            var target = newGroups.find(y => y.name == x.name)
            if (target)
                target.otherVersions.push(x)
        })
        newGroups.forEach(x => x.otherVersions.sort((a,b) => b.version.localeCompare(a.version)))
        newGroups.forEach(x => {
            var newest = x.otherVersions.splice(0,1)[0];
            if(newest)
                x.newestVersion = newest;
        })
        this.allItems = newGroups;
        this.isLoading = false;
    }

    async downloadClient(target : ClientModel){
        this.downloading = true;
        var response = await firstValueFrom(this.http.get(APIURL + Endpoints.CDI.Get_DownloadClient + '?ID=' + target.id, { responseType: 'blob' }));
        saveAs(response, target.fileName);
        this.downloading = false;
        this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Download complete!' });
    }
}

interface ClientGroup {
    name : string;
    newestVersion : ClientModel;
    otherVersions: ClientModel[];
}
