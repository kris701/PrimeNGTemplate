import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { BooleanLabelControl } from '../booleanlabelcontrol';

@Component({
    selector: 'td[daterow]',
    imports: [CommonModule, TagModule],
    template: ` {{ value == null ? 'Never' : (value | date: 'dd/MM/yyyy') }} `
})
export class TableDateRow {
    @Input() value: string | Date | null = '';
}

@Component({
    selector: 'td[datetimerow]',
    imports: [CommonModule, TagModule],
    template: ` {{ value == null ? 'Never' : (value | date: 'dd/MM/yyyy HH:mm:ss') }} `
})
export class TableDateTimeRow {
    @Input() value: string | Date | null = '';
}

@Component({
    selector: 'td[tagrow]',
    imports: [CommonModule, TagModule],
    template: ` <p-tag [severity]="severity">{{ value }}</p-tag> `
})
export class TableTagRow {
    @Input() value: string | null | undefined = '';
    @Input() severity: string | 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | undefined | null = 'secondary';
}

@Component({
    selector: 'td[tagsrow]',
    imports: [CommonModule, TagModule],
    template: `
        <div class="flex flex-row gap-2">
            @for (tag of values; track tag) {
                <p-tag [severity]="severity">{{ tag }}</p-tag>
            }
        </div>
    `
})
export class TableTagsRow {
    @Input() values: string[] | null | undefined = [];
    @Input() severity: string | 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | undefined | null = 'secondary';
}

@Component({
    selector: 'td[boolrow]',
    imports: [CommonModule, TagModule, BooleanLabelControl],
    template: ` <app-booleanlabel [value]="value" /> `
})
export class TableBoolRow {
    @Input() value: boolean = false;
}
