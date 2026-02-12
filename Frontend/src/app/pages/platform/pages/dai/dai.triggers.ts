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
import { PermissionsTable } from '../../../../../PermissionsTable';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { firstValueFrom } from 'rxjs';
import { SplitterModule } from 'primeng/splitter';
import { TextareaModule } from 'primeng/textarea';
import { Divider } from "primeng/divider";
import { TriggerModel } from '../../../../models/DAI/triggerModel';
import { FloatEditor } from '../../../../common/components/floateditor';
import { FloatTextInput } from '../../../../common/components/floattextinput';
import { TableTextFilterColumn, TableDateFilterColumn } from '../../../../common/components/tables/filtercolumns';
import { TableTagRow, TableDateRow } from '../../../../common/components/tables/filterrows';
import { BaseCRUDInterface } from '../../../../common/interfaces/baseCRUDInterface';
import { FloatHelp } from "../../../../common/components/floathelp";
import { FloatTable } from "../../../../common/components/floattable";
import { FloatDialog } from "../../../../common/components/floatdialog";
import { DAISchemaOverview } from "./dai.schemaoverview";
import { DAITriggerDataEditor } from "./components/dai.components.triggerdataeditor";
import { FloatSelect } from "../../../../common/components/floatselect";
import { FloatToggleSwitch } from "../../../../common/components/floattoggleswitch";
import { GetTriggerSourcesOutput } from '../../../../models/DAI/getTriggerSourcesOutput';
import { TriggerSourceTypes } from '../../../../models/DAI/triggerSourceTypes';
import { TriggerDataTypes } from '../../../../models/DAI/triggerDataTypes';
import { SQLTriggerData } from '../../../../models/DAI/sQLTriggerData';
import { APIURL } from '../../../../../globals';
import { TriggerData } from '../../../../models/DAI/triggerData';

@Component({
    selector: 'app-dai-triggers',
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
    SplitterModule,
    TextareaModule,
    FloatEditor,
    FloatHelp,
    FloatTable,
    FloatDialog,
    DAITriggerDataEditor,
    FloatSelect
],
    template: `
        <app-floathelp header="DAI Table Triggers">
            <p>Help text.</p>
        </app-floathelp>

        <app-floattable [values]="allItems" stateKey="dai-triggers-session" [isLoading]="isLoading" [showAdd]="canWrite" (onAddItem)="showAddItem()" (onLoadItems)="loadItems()" (onShowItem)="showEditItem($event)">
            <ng-template
            emplate #tableHeader>
                <th textfiltercolumn pSortableColumn="name" displayName="Name"></th>
                <th datefiltercolumn pSortableColumn="createdAt" displayName="Created At"></th>
                <th datefiltercolumn pSortableColumn="updatedAt" displayName="Updated At"></th>
            </ng-template>
            <ng-template #tableRows let-item>
                <td tagrow [value]="item.name"></td>
                <td daterow [value]="item.createdAt"></td>
                <td daterow [value]="item.updatedAt"></td>
            </ng-template>
        </app-floattable>

        <app-floatdialog [currentItem]="currentItem" [(showDialog)]="showDialog" (onSaveItem)="saveItem()" (onDeleteItem)="deleteItem()" [canWrite]="canWrite">
            <ng-template #body>
                <div class="card flex flex-col gap-2 w-full h-full">
                    <app-floattextinput [(value)]="currentItem.name" [disabled]="!canWrite" label="Name" icon="pi-pencil" />
                    <app-floateditor [(value)]="currentItem.description" [disabled]="!canWrite" style/>
                    <app-floatselect [(selected)]="currentItem.sourceID" label="Source" [options]="triggerSources" optionLabel="name" optionValue="id" (selectedChange)="setCorrectTriggerData()"/>

                    <app-dai-triggerdataeditor [(nodeValue)]="currentItem.triggerData" [sourceID]="currentItem.sourceID" [canReadSchema]="canReadSchema" [disabled]="!canWrite"/>
                </div>
            </ng-template>
        </app-floatdialog>
    `,
    host: {
        class: 'card flex flex-col flex-grow'
    }
})
export class DAITriggers extends BaseCRUDInterface {
    override newItemTemplate(): any {
        var sourceType = this.triggerSources[0].$type;
        var triggerData : TriggerData = {}
        switch(sourceType){
            case TriggerSourceTypes.SQL:
                triggerData = {
                    $type: TriggerDataTypes.SQL,
                    schemaName: '<schema>',
                    tableName: '<table>',
                    referenceIDColumn: '<reference column>',
                    createdAtColumn: '<created at column>',
                    updatedAtColumn: '<updated at column>'
                } as SQLTriggerData
            break;
        }

        return {
            id: '',
            name: 'New Trigger',
            description: 'Description',
            triggerData: triggerData,
            sourceID: this.triggerSources[0].id
        } as TriggerModel;
    }

    override getAllEndpoint: string = Endpoints.DAI.Triggers.Get_AllTriggers;
    override getEndpoint: string = Endpoints.DAI.Triggers.Get_Trigger;
    override patchEndpoint: string = Endpoints.DAI.Triggers.Patch_UpdateTrigger;
    override postEndpoint: string = Endpoints.DAI.Triggers.Post_AddTrigger;
    override deleteEndpoint: string = Endpoints.DAI.Triggers.Delete_Trigger;

    override canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.DAI_Triggers_Read);
    override canWrite: boolean = PermissionHelpers.HasPermission(PermissionsTable.DAI_Triggers_Write);

    canReadSchema: boolean = PermissionHelpers.HasPermission(PermissionsTable.DAI_Schema_Read);

    triggerSources: GetTriggerSourcesOutput[] = [];

    override async ngOnInit() {
        if(this.canRead)
            await this.loadTriggerSources();
        await super.ngOnInit();
    }

    async loadTriggerSources(){
        this.isLoading = true;
        this.triggerSources = await firstValueFrom(this.http.get<GetTriggerSourcesOutput[]>(APIURL + Endpoints.DAI.Triggers.Get_AllSources));
        this.isLoading = false;
    }

    setCorrectTriggerData(){
            var target = this.triggerSources.find(x => x.id == this.currentItem.sourceID);
            if (target){
                var sourceType = target.$type;
                switch(sourceType)
                {
                    case TriggerSourceTypes.SQL:
                        if (this.currentItem.collector.$type != TriggerDataTypes.SQL){
                            this.currentItem.collector = {
                                $type: TriggerDataTypes.SQL,
                                schemaName: '<schema>',
                                tableName: '<table>',
                                referenceIDColumn: '<reference column>',
                                createdAtColumn: '<created at column>',
                                updatedAtColumn: '<updated at column>'
                            } as SQLTriggerData
                        }
                    break;
                }
            }
        }
}
