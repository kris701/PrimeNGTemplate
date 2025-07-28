import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ChipModule } from 'primeng/chip';
import { MultiSelectChangeEvent, MultiSelectModule } from 'primeng/multiselect';

@Component({
    selector: 'app-floatmultiselect',
    imports: [FormsModule, CommonModule, ButtonModule, DrawerModule, TableModule, TagModule, MultiSelectModule, InputIconModule, IconFieldModule, FloatLabelModule, ChipModule],
    template: `
        <p-floatlabel variant="on">
            <p-iconfield>
                <p-inputicon styleClass="pi {{ icon }}" *ngIf="icon != ''" style="z-index:1" />
                <p-multiselect
                    dataKey="id"
                    id="floatmultiselectlabel"
                    [options]="indexedOptions"
                    [disabled]="disabled"
                    [(ngModel)]="indexedSelection"
                    class="raiseround"
                    panelStyleClass="raiseround"
                    [filter]="true"
                    [showClear]="showClear"
                    [filterBy]="optionValue + ',' + optionLabel + ',value'"
                    (onChange)="selectionChanged()"
                    fluid
                    appendTo="body"
                    optionLabel="value"
                >
                    <ng-template let-items pTemplate="selectedItems">
                        <div class="pr-6" *ngIf="icon != ''"></div>
                        <div *ngFor="let item of items">
                            @if (editable && !disabled) {
                                <p-chip [label]="getOptionLabel(item.value)" [removable]="true" (onRemove)="removeSelected(item.id)" />
                            } @else {
                                <p-tag [severity]="getSeverity(item.value)"> {{ getOptionLabel(item.value) }}</p-tag>
                            }
                        </div>
                    </ng-template>
                    <ng-template let-item pTemplate="item">
                        @if (editable && !disabled) {
                            <div class="item flex flex-row gap-2 w-full">
                                <input
                                    class="round w-full"
                                    pInputText
                                    type="text"
                                    [(ngModel)]="item.value"
                                    fluid
                                    (blur)="updateOptions()"
                                    (click)="$event.stopPropagation()"
                                    (keydown)="$event.stopPropagation()"
                                    variant="filled"
                                    style="padding:2px;padding-left:10px"
                                />
                                <p-button
                                    fluid
                                    rounded
                                    severity="danger"
                                    size="small"
                                    icon="pi pi-times"
                                    (click)="$event.stopPropagation(); removeOption(item.id)"
                                    pTooltip="Delete this conversation"
                                    [style]="{ width: '2rem', height: '2rem' }"
                                    [outlined]="true"
                                />
                            </div>
                        } @else {
                            <p-tag [severity]="getSeverity(item.value)"> {{ getOptionLabel(item.value) }}</p-tag>
                        }
                    </ng-template>
                    <ng-template pTemplate="footer">
                        <div class="p-3" *ngIf="editable && !disabled">
                            <p-button label="Add" fluid severity="secondary" rounded text size="small" icon="pi pi-plus" (onClick)="addOption()" />
                        </div>
                    </ng-template>
                </p-multiselect>
            </p-iconfield>
            <label for="floatmultiselectlabel">{{ label }}</label>
        </p-floatlabel>
    `
})
export class FloatMultiSelectControl implements OnChanges {
    @Input() showClear: boolean = false;
    @Input() options: any[] = [];
    @Output() optionsChange = new EventEmitter<any[]>();

    indexedSelection: IndexedItem[] = [];
    indexedOptions: IndexedItem[] = [];

    @Input() disabled: boolean = false;

    @Input() icon: string = '';
    @Input() label: string = '';

    @Input() severityMap: { [value: string]: 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | undefined } | undefined = undefined;
    @Input() severity: 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | undefined = 'secondary';

    @Input() optionLabel: string = '';
    @Input() optionValue: string = '';

    @Input() editable: boolean = false;

    @Input() selected: any[] | null | undefined = undefined;
    @Output() selectedChange = new EventEmitter<any[] | null | undefined>();

    ngOnChanges(changes: SimpleChanges) {
        if (changes['selected'] && changes['selected'].currentValue != changes['selected'].previousValue) {
            this.selected = changes['selected'].currentValue;
            this.indexSelection();
        }
        if (changes['options'] && changes['options'].currentValue != changes['options'].previousValue) {
            this.options = changes['options'].currentValue;
            this.indexOptions();
        }
    }

    indexOptions() {
        this.indexedOptions = [];
        var index = 0;
        this.options.forEach((x) =>
            this.indexedOptions.push({
                id: index++,
                value: x
            } as IndexedItem)
        );
    }

    indexSelection() {
        this.indexedSelection = [];
        if (this.selected)
            this.selected.forEach((x) => {
                var exists = this.indexedOptions.find((y) => this.getOptionValue(y.value) == x);
                if (exists) this.indexedSelection.push(exists);
                else {
                    var newItem = {
                        id: this.indexedOptions.length,
                        value: x
                    } as IndexedItem;
                    this.indexedOptions.push(newItem);
                    this.indexedSelection.push(newItem);
                }
            });
    }

    getSeverity(item: any): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | undefined {
        if (this.severityMap == undefined) return this.severity;
        var target = this.severityMap[this.getOptionValue(item)];
        if (target) return target;
        return 'secondary';
    }

    getOptionLabel(item: any) {
        if (this.optionLabel == null || this.optionLabel == '') return item;
        return item[this.optionLabel];
    }

    getOptionValue(item: any) {
        if (this.optionValue == null || this.optionValue == '') return item;
        return item[this.optionValue];
    }

    selectionChanged() {
        this.updateSelection();
    }

    addOption() {
        var name = 'Item';
        var offset = 1;
        while (this.indexedOptions.find((x) => x.value == name)) name = 'Item ' + offset++;
        this.indexedOptions.push({
            value: name,
            id: this.indexedOptions.length
        });
        this.updateOptions();
    }

    removeSelected(id: number) {
        var index = this.indexedSelection.findIndex((x) => x.id == id);
        if (id != -1) {
            this.indexedSelection.splice(index, 1);
            this.updateSelection();
        }
    }

    removeOption(id: number) {
        var index = this.indexedOptions.findIndex((x) => x.id == id);
        if (index != -1) {
            this.removeSelected(id);
            this.indexedOptions.splice(index, 1);
            this.updateOptions();
        }
    }

    updateSelection() {
        this.selected = this.indexedSelection.map((x) => this.getOptionValue(x.value));
        this.selectedChange.emit(this.selected);
    }

    updateOptions() {
        this.options = this.indexedOptions.map((x) => x.value);
        this.optionsChange.emit(this.options);
    }
}

interface IndexedItem {
    id: number;
    value: any;
}
