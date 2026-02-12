import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Endpoints } from '../../../../../Endpoints';
import { APIURL } from '../../../../../globals';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { TableDateFilterColumn, TableTextFilterColumn } from '../../../../common/components/tables/filtercolumns';
import { TableEmptyMessage } from '../../../../common/components/tables/emptymessage';
import { TableTagRow, TableDateTimeRow } from '../../../../common/components/tables/filterrows';
import { firstValueFrom } from 'rxjs';
import { CardHelpDrawer } from '../../common/cardhelpdrawer';
import { SplitterModule } from 'primeng/splitter';
import { TextareaModule } from 'primeng/textarea';
import { DividerModule } from 'primeng/divider';
import { FloatSelect } from '../../../../common/components/floatselect';
import { BPGInstanceLogModel } from '../../../../models/BPG/bPGInstanceLogModel';

@Component({
    selector: 'app-process-logs',
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
    EditorModule,
    TagModule,
    CardHelpDrawer,
    TableTextFilterColumn,
    TableDateFilterColumn,
    TableEmptyMessage,
    TableTagRow,
    TableDateTimeRow,
    SplitterModule,
    TextareaModule,
    DividerModule,
    FloatSelect
],
    template: `
        <app-cardhelp header="Process Logs">
            <p>Help text.</p>
        </app-cardhelp>

        <div class="flex flex-col gap-2 flex-grow">
            <div class="flex flex-row gap-2">
                <app-floatselect [(selected)]="currentReferenceID" [options]="logHistory" [editable]="true" class="w-full"/>
                <p-button label="Search" icon="pi pi-search" (onClick)="onReferenceIDChange()"/>
                <p-button label="Clear History" icon="pi pi-trash" (onClick)="clearHistory()"/>
            </div>
            @if (allLogItems.length > 0){
                <div class="flex flex-col gap-2 p-2" style="flex-grow:1;height:0px;overflow:hidden">
                    <p-table
                        #dt1
                        class="h-full flex-grow"
                        [scrollable]="true"
                        scrollHeight="flex"
                        [value]="allLogItems"
                        stateStorage="local"
                        stateKey="process-logs-session"
                        dataKey="id"
                        sortMode="multiple"
                        [loading]="isLoading"
                        [paginator]="allLogItems.length > 10"
                        [rows]="10"
                        [rowsPerPageOptions]="[10, 25, 50, 100]"
                        [showCurrentPageReport]="true"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                    >
                        <ng-template #caption>
                            <div class="flex items-center justify-between">
                                <p-button icon="pi pi-refresh" rounded raised (click)="onReferenceIDChange()" />
                            </div>
                        </ng-template>
                        <ng-template #header>
                            <tr *ngIf="allLogItems.length > 0">
                                <th textfiltercolumn pSortableColumn="type" displayName="Type"></th>
                                <th textfiltercolumn pSortableColumn="message" displayName="Message"></th>
                                <th datefiltercolumn pSortableColumn="timestamp" displayName="Timestamp"></th>
                            </tr>
                        </ng-template>
                        <ng-template #body let-item>
                            <tr>
                                <td tagrow [value]="typeNames![item.type]" [severity]="item.type ? typeSeverityMap![item.type] : 'secondary'"></td>
                                <td>{{item.message}}</td>
                                <td datetimerow [value]="item.timestamp"></td>
                            </tr>
                        </ng-template>
                        <ng-template #emptymessage>
                            <td emptymessage>No logs exists for this id...</td>
                        </ng-template>
                    </p-table>
                </div>
            }
            @else {
                <p>Input a reference ID to continue...</p>
            }
        </div>
    `,
    host: {
        class: 'card flex flex-col flex-grow'
    }
})
export class BPGLogs {
    currentReferenceID : string = "";
    isLoading : boolean = false;

    allLogItems : BPGInstanceLogModel[] = []
    typeSeverityMap: { [value: string]: 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | undefined } | undefined = {
        '0': 'secondary',
        '1': 'danger',
        '2': 'warn',
        '3': 'info'
    };
    typeNames: { [value: string]: string } | undefined = {
        '0': 'None',
        '1': 'Error',
        '2': 'Warning',
        '3': 'Info'
    };

    logHistory : string[] = []

    canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.BPG_Instances_Logs_Read);
    canWrite: boolean = PermissionHelpers.HasPermission(PermissionsTable.BPG_Instances_Logs_Write);

    constructor(
        private http: HttpClient,
        private service: MessageService,
        private confirmationService: ConfirmationService
    ) {
        var history = localStorage.getItem("processloghistory");
        if (history)
            this.logHistory = JSON.parse(history);
    }

    async onReferenceIDChange(){
        if (this.currentReferenceID == "")
            return;
        var index = this.logHistory.indexOf(this.currentReferenceID);
        if (index == -1)
            this.logHistory.push(this.currentReferenceID);
        if (this.logHistory.length > 50)
            this.logHistory.pop();
        localStorage.setItem("bpgloghistory", JSON.stringify(this.logHistory));
        this.isLoading = true;
        this.allLogItems = await firstValueFrom(this.http.get<BPGInstanceLogModel[]>(APIURL + Endpoints.BPG.Instances.Logs.Get_AllLogs + "?ReferenceID=" + this.currentReferenceID));
        this.isLoading = false;
    }

    clearHistory(){
        this.logHistory = []
        localStorage.setItem("bpgloghistory", JSON.stringify(this.logHistory));
    }
}
