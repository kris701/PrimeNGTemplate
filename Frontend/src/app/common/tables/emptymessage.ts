import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'td[emptymessage]',
    imports: [CommonModule, TableModule],
    template: ` <ng-content></ng-content> `,
    host: {
        class: 'text-surface-500 text-center p-2',
        colspan: '9999'
    }
})
export class TableEmptyMessage {}
