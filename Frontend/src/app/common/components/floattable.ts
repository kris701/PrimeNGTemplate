import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Table, TableModule, TableService } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TableEmptyMessage } from './tables/emptymessage';

@Component({
    selector: 'app-floattable',
    providers: [
        // some tomfuckery was required to make the templates work: https://github.com/primefaces/primeng/issues/7985
        TableService,
        {
            provide: Table,
            useFactory: (wrapper: FloatTable) => wrapper.table,
            deps: [FloatTable]
        }
    ],
    imports: [FormsModule, CommonModule, TableModule, ButtonModule, TableEmptyMessage, NgTemplateOutlet],
    template: `
        <p-table
            #dt1
            class="h-full flex-grow"
            [scrollable]="true"
            [scrollHeight]="scrollHeight"
            [value]="values"
            stateStorage="local"
            [stateKey]="stateKey"
            [dataKey]="dataKey"
            sortMode="multiple"
            [loading]="isLoading"
            [paginator]="values.length > defaultPageSize"
            [rows]="defaultPageSize"
            [rowsPerPageOptions]="[defaultPageSize, defaultPageSize * 2, defaultPageSize * 4]"
            [showCurrentPageReport]="true"
            paginatorDropdownAppendTo="body"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        >
            @if (showClear || showAdd || showRefresh) {
                <ng-template #caption>
                    <div class="flex items-center justify-between">
                        @if (showClear) {
                            <p-button label="Clear" text icon="pi pi-filter-slash" (click)="dt1.clear(); dt1.stateKey ? localStorage.removeItem(dt1.stateKey) : null" />
                        }
                        @if (showAdd) {
                            <p-button icon="pi pi-plus" label="Add" (click)="onAddItem.emit()" />
                        }
                        @if (showRefresh) {
                            <p-button icon="pi pi-refresh" (click)="onLoadItems.emit()" />
                        }
                    </div>
                </ng-template>
            }
            <ng-template pTemplate="header">
                @if (values.length > 0 && tableHeader) {
                    <tr>
                        <ng-container [ngTemplateOutlet]="tableHeader"></ng-container>
                    </tr>
                }
            </ng-template>
            <ng-template pTemplate="body" let-item>
                @if (tableRows) {
                    @if (rowSelectable) {
                        <tr (click)="onShowItem.emit(item.id)" class="rowclickable">
                            <ng-container [ngTemplateOutlet]="tableRows" [ngTemplateOutletContext]="{ $implicit: item }"></ng-container>
                        </tr>
                    } @else {
                        <tr>
                            <ng-container [ngTemplateOutlet]="tableRows" [ngTemplateOutletContext]="{ $implicit: item }"></ng-container>
                        </tr>
                    }
                }
            </ng-template>
            <ng-template #emptymessage>
                <td emptymessage>{{ noItemsMessage }}</td>
            </ng-template>
        </p-table>
    `,
    host: {
        class: 'flex flex-col gap-2 p-2',
        style: 'flex-grow:1;overflow:hidden;',
        '[style.height]': "flexheight ? '100%' : '0px'"
    },
    styles: `
        ::ng-deep.p-datatable {
            margin-top: 0px !important;
            border-radius: var(--p-button-border-radius) !important;
        }

        ::ng-deep.p-datatable-header {
            border-width: 0px !important;
        }

        ::ng-deep:root {
            --p-datatable-header-cell-background: var(--p-content-border-color) !important;
            --p-treetable-header-cell-background: var(--p-content-border-color) !important;
        }

        ::ng-deep:root[class*='dark'] {
            --p-datatable-header-cell-background: var(--p-content-border-color) !important;
            --p-treetable-header-cell-background: var(--p-content-border-color) !important;
        }

        .rowclickable {
            cursor: pointer;
        }
        .rowclickable:hover {
            background: var(--p-datatable-row-hover-background) !important;
        }

        ::ng-deep.p-datatable-table-container {
            border-width: 1px 1px 1px 1px;
            border-color: var(--p-datatable-body-cell-border-color);
            border-style: solid;
            border-radius: var(--p-button-border-radius) !important;
        }
    `
})
export class FloatTable {
    @ViewChild('dt1', { static: true }) table!: Table;
    @ContentChild('tableHeader', { static: false }) tableHeader: TemplateRef<any> | undefined;
    @ContentChild('tableRows', { static: false }) tableRows: TemplateRef<any> | undefined;

    @Input() flexheight: boolean = false;

    @Input() disabled: boolean = false;
    @Input() isLoading: boolean = false;

    @Input() showClear: boolean = true;
    @Input() showAdd: boolean = true;
    @Input() showRefresh: boolean = true;

    @Input() rowSelectable: boolean = true;

    @Input() dataKey: string = 'id';
    @Input() stateKey: string = 'floattable-state';

    @Input() noItemsMessage: string = 'No items to see...';

    @Input() values: any[] = [];

    localStorage = localStorage;

    @Output() onAddItem: EventEmitter<any> = new EventEmitter();
    @Output() onLoadItems: EventEmitter<any> = new EventEmitter();
    @Output() onShowItem: EventEmitter<string> = new EventEmitter();

    @Input() defaultPageSize: number = 25;
    @Input() scrollHeight: string = 'flex';
}
