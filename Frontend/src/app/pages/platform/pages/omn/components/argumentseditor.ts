import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { EditorModule } from 'primeng/editor';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ReportArgument } from '../../../../../models/OMN/reportArgument';
import { ArgumentTypes } from '../../../../../models/OMN/argumentTypes';
import { EnumIndexer } from '../../../../../models/EnumIndexer';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { PopoverModule } from 'primeng/popover';
import { FloatSelect } from '../../../../../common/components/floatselect';
import { FloatTextInput } from '../../../../../common/components/floattextinput';

@Component({
    selector: 'app-omn-components-argumentseditor',
    imports: [FormsModule, CommonModule, ButtonModule, FloatLabelModule, EditorModule, FloatLabelModule, SelectModule, InputTextModule, TableModule, FloatSelect, TagModule, TooltipModule, FloatTextInput, PopoverModule],
    template: `
        <div class="flex flex-row gap-2 p-2">
            <p-button icon="pi pi-plus" text rounded raised (click)="addItem()" [hidden]="disabled" pTooltip="Add new STP argument"/>
            @for (item of currentItem; track item.name) {
                @if(!query.includes(item.name)){
                    <p-button icon="pi pi-question-circle" [label]="item.name" severity="warn" text rounded raised [disabled]="disabled" pTooltip="This variable is unused in the query!"  (click)="op.toggle($event)"/>
                }
                @else {
                    <p-button icon="pi pi-check-circle" [label]="item.name" severity="success" text rounded raised [disabled]="disabled" pTooltip="This variable is used in the query!"  (click)="op.toggle($event)"/>
                }
                <p-popover #op>
                    <div class="flex flex-col gap-2 w-[25rem]">
                        <app-floattextinput [(value)]="item.name" label="Name" [disabled]="disabled" (OnChanges)="onEdit()"/>
                        <app-floatselect [options]="valueTypes" label="Type" [(selected)]="item.type" [disabled]="disabled" optionValue="value" optionLabel="label" (selectedChange)="onEdit()" />
                        <app-floattextinput [(value)]="item.value" label="Default Value" [disabled]="disabled" (OnChanges)="onEdit()"/>
                        <p-button icon="pi pi-times" label="Delete" severity="danger" fluid (click)="op.hide();op.onDestroy();op.container = null;onDelete(item)" [hidden]="disabled"></p-button>
                    </div>
                </p-popover>
            }
        </div>
    `
})
export class ArgumentEditor {
    @Input() query: string = "";
    @Input() disabled: boolean = false;
    @Input() currentItem: ReportArgument[] = [];
    @Output() currentItemChange = new EventEmitter<ReportArgument[]>();

    valueTypes: EnumIndexer[];

    constructor(){
        this.valueTypes = Object.entries(ArgumentTypes)
            .slice(1)
            .filter((e) => !isNaN(e[0] as any))
            .map((e) => new EnumIndexer(+e[0], e[1].toString()));
    }

    addItem() {
        this.currentItem.push({ name:'@NewArgument', type: ArgumentTypes.String } as ReportArgument);
        this.currentItemChange.emit(this.currentItem);
    }

    onEdit() {
        this.currentItemChange.emit(this.currentItem);
    }

    onDelete(item: ReportArgument) {
        var target = this.currentItem.indexOf(item);
        this.currentItem.splice(target, 1)
        this.currentItemChange.emit(this.currentItem);
    }
}
