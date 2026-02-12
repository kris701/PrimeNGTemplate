import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { EditorModule } from 'primeng/editor';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { EnumIndexer } from '../../../../../models/EnumIndexer';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { PopoverModule } from 'primeng/popover';
import { Calculable } from '../../../../../models/OMN/calculable';
import { CalculableTypes } from '../../../../../models/OMN/calculableTypes';
import { MinCalculable } from '../../../../../models/OMN/minCalculable';
import { MaxCalculable } from '../../../../../models/OMN/maxCalculable';
import { AvgCalculable } from '../../../../../models/OMN/avgCalculable';
import { FloatSelect } from '../../../../../common/components/floatselect';
import { FloatTextInput } from '../../../../../common/components/floattextinput';

@Component({
    selector: 'app-omn-components-calculableseditor',
    imports: [FormsModule, CommonModule, ButtonModule, FloatLabelModule, EditorModule, FloatLabelModule, SelectModule, InputTextModule, TableModule, TagModule, TooltipModule, FloatTextInput, PopoverModule, FloatSelect],
    template: `
        <div class="flex flex-row gap-2 p-2">
            <p-button icon="pi pi-plus" text rounded raised (click)="addItem()" [hidden]="disabled" pTooltip="Add new calculable"/>
            @for (item of currentItem; track $index) {
                <p-button icon="pi pi-calculator" [label]="item.name" severity="success" text rounded raised [disabled]="disabled" (click)="op.toggle($event)"/>
                <p-popover #op appendTo="body">
                    <div class="flex flex-col gap-2 w-[25rem]">
                        <app-floattextinput [(value)]="item.name" label="Name" [disabled]="disabled" (OnChanges)="onEdit()"/>
                        @if ('$type' in item){
                            <app-floatselect [options]="valueTypes" label="Type" [(selected)]="item.$type" [disabled]="disabled" optionValue="value" optionLabel="label" (selectedChange)="onEdit()" />

                            @switch (item.$type) {
                                @case (CalculableTypes.Min) {
                                    @if(isMinCalculable(item)){
                                        <app-floattextinput [(value)]="item.column" label="Column Name" [disabled]="disabled" (OnChanges)="onEdit()"/>
                                        <app-floattextinput [(value)]="item.unit" label="Unit" [disabled]="disabled" (OnChanges)="onEdit()"/>
                                    }
                                }
                                @case (CalculableTypes.Max) {
                                    @if(isMaxCalculable(item)){
                                        <app-floattextinput [(value)]="item.column" label="Column Name" [disabled]="disabled" (OnChanges)="onEdit()"/>
                                        <app-floattextinput [(value)]="item.unit" label="Unit" [disabled]="disabled" (OnChanges)="onEdit()"/>
                                    }
                                }
                                @case (CalculableTypes.Avg) {
                                    @if(isAvgCalculable(item)){
                                        <app-floattextinput [(value)]="item.column" label="Column Name" [disabled]="disabled" (OnChanges)="onEdit()"/>
                                        <app-floattextinput [(value)]="item.unit" label="Unit" [disabled]="disabled" (OnChanges)="onEdit()"/>
                                    }
                                }
                                @default {
                                    <p>Unknown calculable type!</p>
                                }
                            }
                        }
                        @else {
                            <p>Calculable definition is malformed?</p>
                        }
                        <p-button icon="pi pi-times" label="Delete" severity="danger" fluid (click)="op.hide();op.onDestroy();op.container = null;onDelete(item)" [hidden]="disabled"></p-button>
                    </div>
                </p-popover>
            }
        </div>
    `
})
export class CalculableszEditor {
    @Input() disabled: boolean = false;
    @Input() currentItem: Calculable[] = [];
    @Output() currentItemChange = new EventEmitter<Calculable[]>();

    valueTypes: EnumIndexer[];

    CalculableTypes = CalculableTypes;

    constructor(){
        this.valueTypes = Object.entries(CalculableTypes)
            .slice(1)
            .filter((e) => !isNaN(e[0] as any))
            .map((e) => new EnumIndexer(+e[0], e[1].toString()));
    }

    addItem() {
        this.currentItem.push({ $type: CalculableTypes.Min, name:'Calculable', column: '<column>', unit: '<unit>' } as MinCalculable);
        this.currentItemChange.emit(this.currentItem);
    }

    onEdit() {
        this.currentItemChange.emit(this.currentItem);
    }

    onDelete(item: Calculable) {
        var target = this.currentItem.indexOf(item);
        this.currentItem.splice(target, 1)
        this.currentItemChange.emit(this.currentItem);
    }

    isMinCalculable(v: any): v is MinCalculable {
        return this.isOfType(v, CalculableTypes.Min);
    }
    isMaxCalculable(v: any): v is MaxCalculable {
        return this.isOfType(v, CalculableTypes.Max);
    }
    isAvgCalculable(v: any): v is AvgCalculable {
        return this.isOfType(v, CalculableTypes.Avg);
    }
    isOfType(v: any, type: CalculableTypes) {
        if (v == undefined || v == null) return false;
        return v.$type == type;
    }
}
