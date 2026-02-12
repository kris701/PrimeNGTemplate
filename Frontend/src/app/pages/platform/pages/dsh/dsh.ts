import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DashboardGeneral } from './components/dsh.general';
import { CommonModule } from '@angular/common';
import { DashboardAdvice } from './components/dsh.advice';
import { Endpoints } from '../../../../../Endpoints';
import { APIURL } from '../../../../../globals';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { DashboardModel } from '../../../../models/DSH/dashboardModel';
import { TargetURLModel } from '../../../../models/DSH/targetURLModel';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DashboardReports } from "./components/dsh.reports";
import { DashboardReportDefinitionss } from "./components/dsh.reportdefinitions";
import { FloatToggleSwitch } from '../../../../common/components/floattoggleswitch';

@Component({
    selector: 'app-dsh',
    imports: [
    CommonModule,
    DashboardGeneral,
    DashboardAdvice,
    ButtonModule,
    MenuModule,
    FloatToggleSwitch,
    DashboardReports,
    DashboardReportDefinitionss
],
    template: `
        <div class="flex flex-col gap-2" *ngIf="canRead">
            <p-button text icon="pi pi-cog" rounded (click)="dashboardsettingsmenu.toggle($event)" />
            <p-menu #dashboardsettingsmenu [popup]="true" [style]="{ width: '30rem' }">
                <ng-template #start>
                    <div class="flex flex-col gap-2 p-5">
                        <p>Dashboard Elements</p>
                        <app-floattoggleswitch [(value)]="settings.isGeneralEnabled" label="General" class="w-full" (valueChange)="saveSettings()" />
                        <app-floattoggleswitch [(value)]="settings.isReportsEnabled" label="OMNIA Reports" class="w-full" *ngIf="canReadReports" (valueChange)="saveSettings()" />
                        <app-floattoggleswitch [(value)]="settings.isReportDefinitionsEnabled" label="OMNIA Report Definitions" class="w-full" *ngIf="canReadReportDefinitions" (valueChange)="saveSettings()" />
                        <app-floattoggleswitch [(value)]="settings.isAdviceEnabled" label="Advice" class="w-full" (valueChange)="saveSettings()" />
                    </div>
                </ng-template>
            </p-menu>

            <div class="dashboardwrapper gap-8">
                <app-dsh-general [model]="dashboardModel" *ngIf="settings.isGeneralEnabled" />
                @if (reportsStatistics != null) {
                    <app-dsh-reports [model]="reportsStatistics" *ngIf="settings.isReportsEnabled" />
                }
                @if (reportDefinitionsStatistics != null) {
                    <app-dsh-reportdefinitionss [model]="reportDefinitionsStatistics" *ngIf="settings.isReportDefinitionsEnabled" />
                }
                <app-dsh-advice [model]="adviceTarget" *ngIf="settings.isAdviceEnabled" />
            </div>
        </div>

        <div class="card" *ngIf="!canRead">You dont have permission to view the dashboard.</div>
    `,
    styles: `
        @media (min-width: 800px) {
            ::ng-deep .dashboardwrapper2col {
                grid-column: span 2;
            }
        }
        @media (max-width: 800px) {
            .dashboardwrapper {
                display: grid;
                grid-template-columns: 1fr;
                grid-auto-flow: dense;
            }
        }
        @media (min-width: 800px) {
            .dashboardwrapper {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
                grid-auto-flow: dense;
            }
        }

        .dashboardwrapper > * {
            display: contents;
            margin-bottom: 0px !important;
        }
    `
})
export class Dashboard {
    canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.DSH_Read);

    canReadReports: boolean = PermissionHelpers.HasPermission(PermissionsTable.OMN_Reports_Statistics_Read);
    canReadReportDefinitions: boolean = PermissionHelpers.HasPermission(PermissionsTable.OMN_Definitions_Statistics_Read);

    dashboardModel: DashboardModel = {} as DashboardModel;

    adviceTarget: TargetURLModel | null = null;
    reportsStatistics: TargetURLModel | null = null;
    reportDefinitionsStatistics: TargetURLModel | null = null;

    settings: DashboardSettings = {
        isGeneralEnabled: true
    } as DashboardSettings;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        if (this.canRead) this.loadDashboard();
        var savedSettings = localStorage.getItem('dashboardsettings');
        if (savedSettings) this.settings = JSON.parse(savedSettings);
    }

    loadDashboard() {
        this.http.get<DashboardModel>(APIURL + Endpoints.DSH.Get_DashboardInfo).subscribe((r) => {
            this.dashboardModel = r;
            if (this.canReadReports) this.reportsStatistics = this.getTargetByName('reports');
            if (this.canReadReportDefinitions) this.reportDefinitionsStatistics = this.getTargetByName('reportdefinitions');
            this.adviceTarget = this.getTargetByName('advice');
        });
    }

    getTargetByName(name: string): TargetURLModel | null {
        var target = this.dashboardModel.urls.find((x) => x.moduleName == name);
        if (target) return target;
        return null;
    }

    saveSettings() {
        if (!localStorage.getItem('impersonating')) localStorage.setItem('dashboardsettings', JSON.stringify(this.settings));
    }
}

class DashboardSettings {
    isGeneralEnabled: boolean = true;
    isAdviceEnabled: boolean = true;
    isReportsEnabled: boolean = true;
    isReportDefinitionsEnabled: boolean = true;
}
