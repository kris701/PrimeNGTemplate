import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { APIURL } from '../../../../../../globals';
import { TargetURLModel } from '../../../../../models/DSH/targetURLModel';
import { OMNDefinitionsStatistics } from '../../../../../models/OMN/oMNDefinitionsStatistics';

@Component({
    standalone: true,
    selector: 'app-dsh-reportdefinitionss',
    imports: [CommonModule, ProgressBarModule],
    template: ` <div class="card">
        <p-progressbar mode="indeterminate" [style]="{ height: '6px' }" *ngIf="isLoading" />
        <div class="font-semibold text-xl mb-4">
            <i class="pi pi-crown mr-2" pTooltip="This is a Staff Only item!"></i>
            OMNIA Report Definitions
        </div>
        <p>
            There are a total of <b class="text-xl">{{ statistics.totalDefinitions }}</b> report definitions in the system.
        </p>
        <p>
            Out of those, a total of <b class="text-xl">{{ statistics.totalActiveDefinitions }}</b> definitions are active.
        </p>
    </div>`
})
export class DashboardReportDefinitionss implements OnChanges {
    @Input() model: TargetURLModel | null = null;
    statistics: OMNDefinitionsStatistics = {} as OMNDefinitionsStatistics;
    isLoading: boolean = true;

    constructor(private http: HttpClient) {}

    ngOnChanges(changes: SimpleChanges) {
        if (this.model != null) {
            this.http.get<OMNDefinitionsStatistics>(APIURL + this.model.url).subscribe((r) => {
                this.statistics = r;
                this.isLoading = false;
            });
        }
    }
}
