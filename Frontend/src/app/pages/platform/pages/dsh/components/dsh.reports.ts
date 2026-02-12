import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { APIURL } from '../../../../../../globals';
import { TargetURLModel } from '../../../../../models/DSH/targetURLModel';
import { ReportsStatistics } from '../../../../../models/OMN/reportsStatistics';

@Component({
    standalone: true,
    selector: 'app-dsh-reports',
    imports: [CommonModule, ProgressBarModule],
    template: ` <div class="card">
        <p-progressbar mode="indeterminate" [style]="{ height: '6px' }" *ngIf="isLoading" />
        <div class="font-semibold text-xl mb-4">OMNIA Reports</div>
        <p>
            There are a total of <b class="text-xl">{{ statistics.totalAvailableReports }}</b> reports available to you in OMNIA.
        </p>
    </div>`
})
export class DashboardReports implements OnChanges {
    @Input() model: TargetURLModel | null = null;
    statistics: ReportsStatistics = {} as ReportsStatistics;
    isLoading: boolean = true;

    constructor(private http: HttpClient) {}

    ngOnChanges(changes: SimpleChanges) {
        if (this.model != null) {
            this.http.get<ReportsStatistics>(APIURL + this.model.url).subscribe((r) => {
                this.statistics = r;
                this.isLoading = false;
            });
        }
    }
}
