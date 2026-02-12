import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Endpoints } from '../../../../../Endpoints';
import { APIURL } from '../../../../../globals';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { firstValueFrom } from 'rxjs';
import { SplitterModule } from 'primeng/splitter';
import { TextareaModule } from 'primeng/textarea';
import { DividerModule } from 'primeng/divider';
import { ListTriggerModel } from '../../../../models/DAI/listTriggerModel';
import { FloatEditor } from '../../../../common/components/floateditor';
import { FloatTextInput } from '../../../../common/components/floattextinput';
import { TableTextFilterColumn, TableDateFilterColumn, TableBoolFilterColumn } from '../../../../common/components/tables/filtercolumns';
import { TableTagRow, TableDateRow, TableBoolRow } from '../../../../common/components/tables/filterrows';
import { FloatToggleSwitch } from '../../../../common/components/floattoggleswitch';
import { FloatSelect } from '../../../../common/components/floatselect';
import { BaseCRUDInterface } from '../../../../common/interfaces/baseCRUDInterface';
import { FloatHelp } from "../../../../common/components/floathelp";
import { FloatTable } from "../../../../common/components/floattable";
import { FloatDialog } from "../../../../common/components/floatdialog";
import { DQATriggerModel } from '../../../../models/DQA/dQATriggerModel';

@Component({
    selector: 'app-dqa-triggers',
    imports: [
    FormsModule,
    CommonModule,
    DialogModule,
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    MultiSelectModule,
    PasswordModule,
    TableModule,
    EditorModule,
    TagModule,
    FloatTextInput,
    TableTextFilterColumn,
    TableDateFilterColumn,
    TableTagRow,
    TableDateRow,
    TableBoolFilterColumn,
    TableBoolRow,
    SplitterModule,
    FloatToggleSwitch,
    TextareaModule,
    DividerModule,
    FloatSelect,
    FloatEditor,
    FloatHelp,
    FloatTable,
    FloatDialog
],
    template: `
        <app-floathelp header="DQA Triggers">
            <p>Help text.</p>
        </app-floathelp>

        <app-floattable [values]="allItems" stateKey="dqa-triggers-session" [isLoading]="isLoading" [showAdd]="canWrite" (onAddItem)="showAddItem()" (onLoadItems)="loadItems()" (onShowItem)="showEditItem($event)">
            <ng-template #tableHeader>
                <th textfiltercolumn pSortableColumn="name" displayName="Name"></th>
                <th boolfiltercolumn pSortableColumn="isActive" displayName="Active"></th>
                <th datefiltercolumn pSortableColumn="createdAt" displayName="Created At"></th>
                <th datefiltercolumn pSortableColumn="updatedAt" displayName="Updated At"></th>
            </ng-template>
            <ng-template #tableRows let-item>
                <td tagrow [value]="item.name"></td>
                <td boolrow [value]="item.isActive"></td>
                <td daterow [value]="item.createdAt"></td>
                <td daterow [value]="item.updatedAt"></td>
            </ng-template>
        </app-floattable>

        <app-floatdialog [currentItem]="currentItem" [(showDialog)]="showDialog" (onSaveItem)="saveItem()" (onDeleteItem)="deleteItem()" [canWrite]="canWrite">
            <ng-template #body>
                <app-floattoggleswitch [(value)]="currentItem.isActive" label="Is Active?" [disabled]="!canWrite" class="w-full " />
                <app-floattextinput [(value)]="currentItem.name" [disabled]="!canWrite" label="Name" icon="pi-pencil" />
                <app-floateditor [(value)]="currentItem.description" [disabled]="!canWrite" />
                <app-floatselect [(selected)]="currentItem.triggerId" label="Target Trigger" [options]="allTriggers" optionLabel="name" optionValue="id"/>
            </ng-template>
        </app-floatdialog>
    `,
    host: {
        class: 'card flex flex-col flex-grow'
    }
})
export class DQATriggers extends BaseCRUDInterface {
    override newItemTemplate(): any {
        return {
            id: '',
            name: 'New Trigger',
            description:'Description',
            isActive: false,
            triggerId: this.allTriggers[0].id
        } as DQATriggerModel;
    }

    override getAllEndpoint: string = Endpoints.DQA.Triggers.Get_AllTriggers;
    override getEndpoint: string = Endpoints.DQA.Triggers.Get_Trigger;
    override patchEndpoint: string = Endpoints.DQA.Triggers.Patch_UpdateTrigger;
    override postEndpoint: string = Endpoints.DQA.Triggers.Post_AddTrigger;
    override deleteEndpoint: string = Endpoints.DQA.Triggers.Delete_Trigger;

    override canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.DQA_Triggers_Read);
    override canWrite: boolean = PermissionHelpers.HasPermission(PermissionsTable.DQA_Triggers_Write);
    canReadDataTriggers: boolean = PermissionHelpers.HasPermission(PermissionsTable.DAI_Triggers_Read);

    allTriggers: ListTriggerModel[] = [];

    override async ngOnInit() {
        if (this.canReadDataTriggers)
            await this.loadTriggers();
        await super.ngOnInit();
    }

    async loadTriggers() {
        this.isLoading = true;
        this.allTriggers = await firstValueFrom(this.http.get<ListTriggerModel[]>(APIURL + Endpoints.DAI.Triggers.Get_AllTriggers));
        this.isLoading = false;
    }
}
