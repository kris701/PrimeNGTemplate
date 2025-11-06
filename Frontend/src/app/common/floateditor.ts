import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditorModule } from 'primeng/editor';

@Component({
    selector: 'app-floateditor',
    imports: [FormsModule, CommonModule, EditorModule],
    template: `
        @if (disabled) {
            <p-editor [(ngModel)]="value" [ngClass]="['w-full', 'fullheighteditor', noborder ? 'nobordernotoolbar' : 'hidetoolbareditor']" [readonly]="true">
                <ng-template #header> </ng-template>
            </p-editor>
        } @else {
            <p-editor [(ngModel)]="value" class="w-full fullheighteditor" (ngModelChange)="valueChanged()"> </p-editor>
        }
    `,
    host: {
        class: 'h-full'
    }
})
export class FloatEditor implements OnChanges {
    @Input() disabled: boolean = false;
    @Input() noborder: boolean = false;

    @Input() value: string | null = null;
    @Output() valueChange = new EventEmitter<string | null>();

    ngOnChanges(changes: SimpleChanges) {
        if (changes['value']) {
            if (changes['value'].currentValue != changes['value'].previousValue) {
                this.value = changes['value'].currentValue;
                this.valueChanged();
            }
        }
    }

    valueChanged() {
        this.valueChange.emit(this.value);
    }
}
