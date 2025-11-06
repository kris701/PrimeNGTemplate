import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { firstValueFrom } from 'rxjs';
import { CreatedUpdatedControl } from "./createdupdatedcontrol";
import { APIURL } from '../../globals';
import { ConfirmDialogHelpers } from '../pages/helvform/helpers/confirmdialoghelpers';
import { RouterHelpers } from '../pages/helvform/helpers/routerHelpers';

@Component({
    selector: 'app-floatdialog',
    imports: [
        FormsModule,
        CommonModule,
        DialogModule,
        ButtonModule,
        FloatLabelModule,
        InputTextModule,
        MultiSelectModule,
        PasswordModule,
        EditorModule,
        TagModule,
        TableModule,
        CreatedUpdatedControl
    ],
    template: `
        <p-dialog [(visible)]="showDialog" [breakpoints]="{ '960px': '95vw' }" modal maximizable [draggable]="false" (onHide)="showDialogChange.emit(showDialog)" (onShow)="showDialogChange.emit(showDialog)">
            @if(currentItem && showDialog){
                <ng-template #header>
                    <div class="inline-flex items-center justify-center gap-2">
                        @if(showQueryRef){
                            <p-button icon="pi pi-link" severity="secondary" rounded raised (click)="getQueryRef()" [hidden]="currentItem.id == ''" />
                        }
                        @if(headerField in currentItem && headerStr == undefined){
                            <span class="font-bold whitespace-nowrap">{{ currentItem[headerField] }}</span>
                        }
                        @else if(headerStr) {
                            <span class="font-bold whitespace-nowrap">{{ headerStr }}</span>
                        }
                        <app-createdupdated [createdAt]="currentItem.createdAt" [updatedAt]="currentItem.updatedAt" />
                    </div>
                </ng-template>
                <div class="flex flex-col gap-2 pt-2 flex-grow h-full">
                    <ng-container [ngTemplateOutlet]="body"></ng-container>
                </div>
                <ng-template #footer>
                    <p-button label="Save" icon="pi pi-save" raised rounded (click)="saveItem()" [hidden]="!canWrite" />
                    <p-button icon="pi pi-times" label="Delete" raised rounded severity="danger" (click)="deleteItem(currentItem.id)" [hidden]="!canWrite || currentItem.id == ''"></p-button>
                </ng-template>
            }
        </p-dialog>
    `
})
export class FloatDialog {
    @ContentChild('body', { static: false }) body: TemplateRef<any> | undefined;
    @Output() loadItems: EventEmitter<any> = new EventEmitter();

    @Input() queryRefStr : string | undefined;
    @Input() showQueryRef : boolean = true;

    @Input() headerField : string = "name";
    @Input() headerStr : string | undefined;

    @Input() currentItem: any | undefined;
    localStorage = localStorage;

    @Input() showDialog : boolean = false;
    @Output() showDialogChange = new EventEmitter<boolean>();

    @Input() patchEndpoint : string = "";
    @Input() postEndpoint : string = "";
    @Input() deleteEndpoint : string = "";

    @Input() canWrite: boolean = true;

    constructor(
        private http: HttpClient,
        private service: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    async saveItem() {
        if (!this.canWrite)
            throw new Error("You do not have write permissions!");

        if (this.currentItem.id != '') {
            await firstValueFrom(this.http.patch(APIURL + this.patchEndpoint, this.currentItem));
            this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Item updated!' });
        } else {
            await firstValueFrom(this.http.post(APIURL + this.postEndpoint, this.currentItem));
            this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Item created!' });
        }
        this.showDialog = false;
        this.showDialogChange.emit(this.showDialog);
        await this.loadItems.emit();
    }

    async deleteItem(id: string) {
        if (!this.canWrite)
            throw new Error("You do not have write permissions!");

        await this.confirmationService.confirm({
            ...ConfirmDialogHelpers.DeleteContent(),
            message: 'Are you sure you want to delete this item?',
            accept: async () => {
                await firstValueFrom(this.http.delete(APIURL + this.deleteEndpoint + '?ID=' + id));
                this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Item deleted!' });
                this.showDialog = false;
                this.showDialogChange.emit(this.showDialog);
                await this.loadItems.emit();
            }
        });
    }

    async getQueryRef() {
        if (!this.queryRefStr || !this.showQueryRef)
            return;
        var queryStr = RouterHelpers.generateRouteFromQueryString(this.queryRefStr);
        if (queryStr) {
            navigator.clipboard.writeText(RouterHelpers.generateURLFromQueryModel(queryStr));
            this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Item reference copied to clipboard!' });
        }
    }
}
