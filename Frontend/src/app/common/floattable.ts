import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Table, TableModule, TableService } from "primeng/table";
import { ButtonModule } from "primeng/button";

@Component({
    selector: 'app-floattable',
    providers:[
        // some tomfuckery was required to make the templates work: https://github.com/primefaces/primeng/issues/7985
        TableService,
        {
            provide: Table,
            useFactory: (wrapper : FloatTable) => wrapper.table,
            deps: [FloatTable],
        },
    ],
    imports: [FormsModule, CommonModule, TableModule, ButtonModule, NgTemplateOutlet],
    template: `
        <p-table
            #dt1
            class="h-full flex-grow"
            [scrollable]="true"
            scrollHeight="flex"
            [value]="values"
            stateStorage="local"
            [stateKey]="stateKey"
            [dataKey]="dataKey"
            sortMode="multiple"
            [loading]="isLoading"
            [paginator]="values.length > 10"
            [rows]="10"
            [rowsPerPageOptions]="[10, 25, 50, 100]"
            [showCurrentPageReport]="true"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    @if(showClear){
                        <p-button label="Clear" rounded raised text icon="pi pi-filter-slash" (click)="dt1.clear(); dt1.stateKey ? localStorage.removeItem(dt1.stateKey) : null" />
                    }
                    @if(showAdd){
                        <p-button icon="pi pi-plus" label="Add" rounded raised (click)="onAddItem.emit()"/>
                    }
                    @if(showRefresh){
                        <p-button icon="pi pi-refresh" rounded raised (click)="onLoadItems.emit()" />
                    }
                </div>
            </ng-template>
            <ng-template pTemplate="header">
                @if(values.length > 0 && tableHeader){
                    <tr>
                        <ng-container [ngTemplateOutlet]="tableHeader"></ng-container>
                    </tr>
                }
            </ng-template>
            <ng-template pTemplate="body" let-item>
                @if(tableRows){
                    @if(rowSelectable){
                        <tr (click)="onShowItem.emit(item.id)" class="rowclickable">
                            <ng-container [ngTemplateOutlet]="tableRows" [ngTemplateOutletContext]="{ $implicit: item }"></ng-container>
                        </tr>
                    }
                    @else {
                    <tr>
                        <ng-container [ngTemplateOutlet]="tableRows" [ngTemplateOutletContext]="{ $implicit: item }"></ng-container>
                    </tr>
                    }
                }
            </ng-template>
            <ng-template #emptymessage>
                <td emptymessage>{{noItemsMessage}}</td>
            </ng-template>
        </p-table>
    `,
    host: {
        class: 'flex flex-col gap-2 p-2',
        style: 'flex-grow:1;overflow:hidden'
    }
})
export class FloatTable {
    @ViewChild('dt1', {static: true}) table!: Table;
    @ContentChild('tableHeader', { static: false }) tableHeader: TemplateRef<any> | undefined;
    @ContentChild('tableRows', { static: false }) tableRows: TemplateRef<any> | undefined;

    @Input() disabled: boolean = false;
    @Input() isLoading: boolean = false;

    @Input() showClear: boolean = true;
    @Input() showAdd: boolean = true;
    @Input() showRefresh: boolean = true;

    @Input() rowSelectable: boolean = true;

    @Input() dataKey: string = "id";
    @Input() stateKey: string = "floattable-state";

    @Input() noItemsMessage: string = "No items to see...";

    @Input() values: any[] = [];

    localStorage = localStorage;

    @Output() onAddItem: EventEmitter<any> = new EventEmitter();
    @Output() onLoadItems: EventEmitter<any> = new EventEmitter();
    @Output() onShowItem: EventEmitter<string> = new EventEmitter();
}
