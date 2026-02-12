import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditorModule } from 'primeng/editor';

@Component({
    selector: 'app-floateditor',
    imports: [FormsModule, CommonModule, EditorModule],
    template: `
        @if (disabled || hidetoolbar) {
            <p-editor [(ngModel)]="value" [ngClass]="['w-full', 'fullheighteditor', noborder ? 'nobordernotoolbar' : '', hidetoolbar ? 'hidetoolbareditor' : '']" [readonly]="disabled" (ngModelChange)="valueChanged()">
                <ng-template #header> </ng-template>
            </p-editor>
        } @else {
            <p-editor [(ngModel)]="value" [ngClass]="['w-full', 'fullheighteditor', noborder ? 'nobordereditor' : '', hidetoolbar ? 'hidetoolbareditor' : '']" (ngModelChange)="valueChanged()"> </p-editor>
        }
    `,
    host: {
        class: 'h-full'
    },
    styles: `
        .fullheighteditor {
            display: flex !important;
            flex-direction: column !important;
            height: 100%;
        }

        ::ng-deep.nobordereditor .p-editor-toolbar {
            border: 0px !important;
            padding: 0px !important;
            box-shadow: none !important;
            border-radius: 0px !important;
        }

        ::ng-deep.nobordereditor .p-editor-content {
            border: 0px !important;
            padding: 0px !important;
            box-shadow: none !important;
            border-radius: 0px !important;
        }

        ::ng-deep.nobordereditor .ql-editor {
            border-radius: 0px !important;
            padding: 0.2rem 0.5rem !important;
        }

        ::ng-deep.hidetoolbareditor .p-editor-toolbar {
            border: 0px !important;
            padding: 0px !important;
        }

        ::ng-deep.hidetoolbareditor .p-editor-content {
            border: 1px solid var(--p-editor-content-border-color) !important;
            border-radius: var(--p-editor-content-border-radius) !important;
        }

        ::ng-deep.hidetoolbareditor .ql-editor {
            border-radius: var(--p-editor-content-border-radius) var(--p-editor-content-border-radius) !important;
        }

        ::ng-deep.nobordernotoolbar .p-editor-toolbar {
            border: 0px !important;
            padding: 0px !important;
            box-shadow: none !important;
            border-radius: 0px !important;
        }

        ::ng-deep.nobordernotoolbar .p-editor-content {
            border: 0px !important;
            padding: 0px !important;
            box-shadow: none !important;
            border-radius: 0px !important;
        }

        ::ng-deep.nobordernotoolbar .ql-editor {
            border-radius: 0px !important;
            padding: 0.2rem 0.5rem !important;
        }
    `
})
export class FloatEditor implements OnChanges {
    @Input() disabled: boolean = false;
    @Input() noborder: boolean = false;
    @Input() hidetoolbar: boolean = false;

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
