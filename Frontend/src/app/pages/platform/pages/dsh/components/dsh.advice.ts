import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { TargetURLModel } from '../../../../../models/DSH/targetURLModel';

@Component({
    standalone: true,
    selector: 'app-dsh-advice',
    imports: [CommonModule, ProgressBarModule],
    template: ` <div class="card">
        <p-progressbar mode="indeterminate" [style]="{ height: '6px' }" *ngIf="isLoading" />
        <div class="font-semibold text-xl mb-4">Advice of the day</div>
        <p>Powered by <a href="https://api.adviceslip.com">AdviceSlip</a></p>
        <p class="text-xl" style="font-style:italic">{{ advice.slip.advice }}</p>
    </div>`
})
export class DashboardAdvice implements OnChanges {
    @Input() model: TargetURLModel | null = null;
    advice: SlipModel = {
        slip: { advice: '' }
    } as SlipModel;
    isLoading: boolean = true;

    constructor(private http: HttpClient) {}

    ngOnChanges(changes: SimpleChanges) {
        if (this.model != null) {
            var test = fetch(this.model.url).then(async (r) => {
                this.advice = JSON.parse(await r.text());
                this.isLoading = false;
            });
        }
    }
}

interface SlipModel {
    slip: AdviceModel;
}

interface AdviceModel {
    id: number;
    advice: string;
}
