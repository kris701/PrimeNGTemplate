import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../../../../globals';
import { Endpoints } from '../../../../../Endpoints';
import { SerializableReport } from '../../../../models/OMN/serializableReport';
import { GetReportInput } from '../../../../models/OMN/getReportInput';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ArgumentTypes } from '../../../../models/OMN/argumentTypes';
import { Divider } from "primeng/divider";
import { firstValueFrom } from 'rxjs';
import { FloatTextInput } from '../../../../common/components/floattextinput';
import { Tag } from "primeng/tag";
import { ListOMNDefinition } from '../../../../models/OMN/listOMNDefinition';
import { FloatTable } from "../../../../common/components/floattable";
import { TableTextFilterColumn, TableBoolFilterColumn, TableDateFilterColumn } from '../../../../common/components/tables/filtercolumns';
import { TableBoolRow, TableDateRow, TableTagRow } from '../../../../common/components/tables/filterrows';
import { FloatHelp } from "../../../../common/components/floathelp";

@Component({
    selector: 'app-omn-reports',
    imports: [FormsModule, CommonModule, TabsModule, ProgressSpinnerModule, TableModule, ButtonModule, FloatTextInput, Divider, Tag, FloatTable, TableTextFilterColumn, TableBoolFilterColumn, TableDateFilterColumn, TableTagRow, TableBoolRow, TableDateRow, FloatHelp],
    template: `
        <app-floathelp header="Reports">
            <p>Help text.</p>
        </app-floathelp>

        @if (allReportDefs.length == 0){
            <p class="text-center h-full" style="align-content: center;">You have no reports available to your user.</p>
        }
        @else {
            @if (currentTab == ''){
                <p class="text-center w-full h-full" style="position:absolute;align-content: center;">Select a report to view it.</p>
            }
            <p-tabs #tabs [(value)]="currentTab" (valueChange)="loadReport($event)" class="h-full flex-grow">
                <p-tablist>
                    @for (reportDef of allReportDefs; track reportDef.id) {
                        <p-tab [value]="reportDef.id">{{ reportDef.name }}</p-tab>
                    }
                </p-tablist>
                <p-tabpanels class="flex flex-grow" [style]="{ 'overflow-y': 'auto', height: '100%' }">
                    @for (reportDef of allReportDefs; track reportDef.id) {
                        <p-tabpanel [value]="reportDef.id" class="h-full w-full">
                            <div class="flex flex-col gap-2 h-full">
                                @if (!allReports[reportDef.id]){
                                    <p-progress-spinner ariaLabel="loading" />
                                }
                                @else {
                                    <div class="flex flex-row gap-2 mb-2">
                                        <p-button icon="pi pi-refresh" (click)="loadReport(reportDef.id)" />
                                        @for(arg of reportDef.arguments; track arg.name){
                                            <app-floattextinput [(value)]="arg.value" [label]="arg.name" icon="pi-pencil" (onEnter)="loadReport(reportDef.id)"/>
                                        }
                                    </div>

                                    <app-floattable
                                        [values]="allReports[reportDef.id].rows"
                                        stateKey="omn-definitions-session-" + reportDef.id
                                        [isLoading]="isLoading"
                                        [showAdd]="false"
                                        [rowSelectable]="false"
                                        (onLoadItems)="loadItems()"
                                    >
                                        <ng-template #tableHeader>
                                            @for(col of allReports[reportDef.id].header; track col.name){
                                                @if (col.type == ArgumentTypes.String){
                                                    <th textfiltercolumn [pSortableColumn]="col.name" [displayName]="col.name"></th>
                                                }
                                                @else if (col.type == ArgumentTypes.Bool){
                                                    <th boolfiltercolumn [pSortableColumn]="col.name" [displayName]="col.name"></th>
                                                }
                                                @else if (col.type == ArgumentTypes.Datetime){
                                                    <th datefiltercolumn [pSortableColumn]="col.name" [displayName]="col.name"></th>
                                                }
                                                @else {
                                                    <th>{{ col.name }}</th>
                                                }
                                            }
                                        </ng-template>
                                        <ng-template #tableRows let-item>
                                            @for(col of allReports[reportDef.id].header; track col.name){
                                                    @if (col.type == ArgumentTypes.String){
                                                        <td tagrow [value]="item[col.name]"></td>
                                                    }
                                                    @else if (col.type == ArgumentTypes.Bool){
                                                        <td boolrow [value]="item[col.name]"></td>
                                                    }
                                                    @else if (col.type == ArgumentTypes.Datetime){
                                                        <td daterow [value]="item[col.name]"></td>
                                                    }
                                                    @else {
                                                        <td tagrow [value]="item[col.name]"></td>
                                                    }
                                            }
                                        </ng-template>
                                    </app-floattable>

                                    <p-divider/>
                                    <div class="flex flex-row gap-2 mb-2">
                                        @for(calKey of Object.keys(allReports[reportDef.id].calculables); track calKey){
                                            <p-tag>
                                                <div class="flex flex-row gap-2">
                                                    <i class="pi pi-calculator"></i>
                                                    <p style="margin-bottom:0px">{{calKey}}</p>
                                                    <p>{{allReports[reportDef.id].calculables[calKey]}}</p>
                                                </div>
                                            </p-tag>
                                        }
                                    </div>
                                }
                            </div>
                        </p-tabpanel>
                    }
                </p-tabpanels>
            </p-tabs>
        }
    `,
    host: {
        style: 'position:relative',
        class: 'card flex flex flex-col flex-grow'
    }
})
export class OMNReports {
    allReportDefs : ListOMNDefinition[] = []
    allReports : { [key : string] : SerializableReport } = {}
    isLoading : boolean = false;
    currentTab : string = "";

    localStorage = localStorage;

    Object = Object;

    ArgumentTypes = ArgumentTypes;

    canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.OMN_Reports_Read);

    constructor(
        private http: HttpClient
    ) {
    }

    async ngOnInit() {
        if (this.canRead)
            await this.loadItems();
    }

    async loadItems() {
        this.isLoading = true;
        this.allReportDefs = await firstValueFrom(this.http.get<ListOMNDefinition[]>(APIURL + Endpoints.OMN.Reports.Get_AllReport))
        this.isLoading = false;
    }

    async loadReport(event : string | number | undefined){
        if (!event)
            return;
        delete this.allReports[event];
        var target = this.allReportDefs.find(x => x.id == event)
        if (target){
            var args : { [key : string] : any } = {}
            target.arguments.forEach(a => {
                args[a.name] = a.value;
            })

            var inputModel = {
                id: target.id,
                arguments:  args
            } as GetReportInput
            var report = await firstValueFrom(this.http.post<SerializableReport>(APIURL + Endpoints.OMN.Reports.Get_Report, inputModel))
            this.allReports[event] = report;
        }
    }
}
