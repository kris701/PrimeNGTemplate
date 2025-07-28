import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { EnvironmentInterface } from '../interfaces/environmentinterface';

@Component({
    selector: 'app-common-importexport',
    imports: [CommonModule, TooltipModule, ButtonModule],
    template: `
        <div class="flex items-center gap-2">
            @if (item.id != '') {
                <p-button icon="pi pi-file-export" pTooltip="Export this item to your clipboard." size="small" [rounded]="true" variant="outlined" severity="info" (onClick)="exportToClipboard()" />
            }
            <p-button icon="pi pi-file-import" pTooltip="Import the item from your clipboard." size="small" [rounded]="true" variant="outlined" severity="info" (onClick)="importFromClipboard()" />
        </div>
    `
})
export class ImportExportControl {
    @Input() item: any = null;
    @Output() itemChange = new EventEmitter<any | null>();

    constructor(
        private service: MessageService,
        private environmentInterface: EnvironmentInterface
    ) {}

    importFromClipboard() {
        navigator.clipboard.readText().then((r) => {
            var asItem = JSON.parse(r);
            asItem.id = '';
            if (asItem.environment) asItem.environment = this.environmentInterface.currentEnvironment.id;
            if (asItem.environmentID) asItem.environmentID = this.environmentInterface.currentEnvironment.id;
            this.item = asItem;
            this.itemChange.emit(this.item);
            this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Item imported!' });
        });
    }

    exportToClipboard() {
        var asJson = JSON.stringify(this.item);
        navigator.clipboard.writeText(asJson);
        this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Item exported!' });
    }
}
