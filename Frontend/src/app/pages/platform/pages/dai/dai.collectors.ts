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
import { CollectorModel } from '../../../../models/DAI/collectorModel';
import { FloatEditor } from '../../../../common/components/floateditor';
import { FloatTextInput } from '../../../../common/components/floattextinput';
import { TableTextFilterColumn, TableDateFilterColumn } from '../../../../common/components/tables/filtercolumns';
import { TableTagRow, TableDateRow } from '../../../../common/components/tables/filterrows';
import { BaseCRUDInterface } from '../../../../common/interfaces/baseCRUDInterface';
import { FloatHelp } from "../../../../common/components/floathelp";
import { FloatTable } from "../../../../common/components/floattable";
import { FloatDialog } from "../../../../common/components/floatdialog";
import { Fieldset } from "primeng/fieldset";
import { HttpClient } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserInterface } from '../../interfaces/usersinterface';
import { GetCollectorValueInput } from '../../../../models/DAI/getCollectorValueInput';
import { CollectorDataTypes } from '../../../../models/DAI/collectorDataTypes';
import { CollectorData } from '../../../../models/DAI/collectorData';
import { DAICollectorDataEditor } from "./components/dai.components.collectordataeditor";
import { GetCollectorSourcesOutput } from '../../../../models/DAI/getCollectorSourcesOutput';
import { FloatSelect } from "../../../../common/components/floatselect";
import { CollectorSourceTypes } from '../../../../models/DAI/collectorSourceTypes';
import { SQLCollectoData } from '../../../../models/DAI/sQLCollectoData';
import { FloatToggleSwitch } from "../../../../common/components/floattoggleswitch";

@Component({
    selector: 'app-dai-collectors',
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
    Fieldset,
    DAICollectorDataEditor,
    FloatSelect
],
    template: `
        <app-floathelp header="DAI Data Collectors">
            <p>Help text.</p>
        </app-floathelp>

        <app-floattable [values]="allItems" stateKey="dai-collectors-session" [isLoading]="isLoading" [showAdd]="canWrite" (onAddItem)="showAddItem()" (onLoadItems)="loadItems()" (onShowItem)="showEditItem($event)">
            <ng-template #tableHeader>
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
                    <app-floatselect [(selected)]="currentItem.sourceID" label="Source" [options]="collectorSources" optionLabel="name" optionValue="id" (selectedChange)="setCorrectCollectorData()"/>

                    <app-dai-collectordataeditor [(nodeValue)]="currentItem.collectorData" [sourceID]="currentItem.sourceID" [canReadSchema]="canReadSchema" [disabled]="!canWrite"/>

                    <p-fieldset legend="Execute" class="flex flex-col gap-2 w-full">
                        <div class="flex flex-col gap-2">
                            <div class="flex flex-row gap-2">
                                <app-floattextinput [(value)]="testingReferenceId" label="Reference ID" class="w-full"/>
                                <p-button label="Test" (onClick)="testCollector()" class="w-full" fluid/>
                            </div>
                            @if (testingSuccess){
                                <p>The result of the collector is '{{testingLastResult}}'</p>
                            }
                        </div>
                    </p-fieldset>
                </div>
            </ng-template>
        </app-floatdialog>
    `,
    host: {
        class: 'card flex flex-col flex-grow'
    }
})
export class DAICollectors extends BaseCRUDInterface {
    override newItemTemplate(): any {
        var sourceType = this.collectorSources[0].$type;
        var collectorData : CollectorData = {}
        switch(sourceType){
            case CollectorSourceTypes.SQL:
                collectorData = {
                    $type: CollectorDataTypes.SQL,
                    collectorSTP: 'SELECT 0'
                } as SQLCollectoData
            break;
        }

        return {
            id: '',
            name: 'New Collector',
            description: 'Description',
            collectorData: collectorData,
            sourceID: this.collectorSources[0].id
        } as CollectorModel;
    }

    override getAllEndpoint: string = Endpoints.DAI.Collectors.Get_AllCollectors;
    override getEndpoint: string = Endpoints.DAI.Collectors.Get_Collector;
    override patchEndpoint: string = Endpoints.DAI.Collectors.Patch_UpdateCollector;
    override postEndpoint: string = Endpoints.DAI.Collectors.Post_AddCollector;
    override deleteEndpoint: string = Endpoints.DAI.Collectors.Delete_Collector;

    override canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.DAI_Collectors_Read);
    override canWrite: boolean = PermissionHelpers.HasPermission(PermissionsTable.DAI_Collectors_Write);

    canReadSchema: boolean = PermissionHelpers.HasPermission(PermissionsTable.DAI_Schema_Read);

    collectorSources: GetCollectorSourcesOutput[] = [];

    testingReferenceId : string = "";
    testingLastResult : string = "";
    testingSuccess : boolean = false;

    constructor(
        http: HttpClient,
        service: MessageService,
        public usersInterface : UserInterface,
        confirmationService: ConfirmationService
    ) {
        super(http, service, confirmationService);
    }

    override async ngOnInit() {
        if(this.canRead)
            await this.loadCollectorSources();
        await super.ngOnInit();
    }

    async loadCollectorSources(){
        this.isLoading = true;
        this.collectorSources = await firstValueFrom(this.http.get<GetCollectorSourcesOutput[]>(APIURL + Endpoints.DAI.Collectors.Get_AllSources));
        this.isLoading = false;
    }

    override async showEditItem(id: string){
        this.testingLastResult = "";
        this.testingSuccess = false;
        super.showEditItem(id);
    }

    async testCollector(){
        this.testingLastResult = "";
        this.testingSuccess = false;
        var body = {
            referenceID: this.testingReferenceId,
            collector: {
                name: 'tmp',
                description: 'desc',
                collectorData: this.currentItem.collectorData,
                sourceID: this.currentItem.sourceID
            } as CollectorModel
        } as GetCollectorValueInput

        this.testingLastResult = await firstValueFrom(this.http.post<string>(APIURL + Endpoints.DAI.Collectors.Post_TestCollector, body));
        this.service.add({ severity: 'success', summary: 'Collector evaluated!', detail: '' });
        this.testingSuccess = true;
    }

    setCorrectCollectorData(){
        var target = this.collectorSources.find(x => x.id == this.currentItem.sourceID);
        if (target){
            var sourceType = target.$type;
            switch(sourceType)
            {
                case CollectorSourceTypes.SQL:
                    if (this.currentItem.collector.$type != CollectorDataTypes.SQL){
                        this.currentItem.collector = {
                            $type: CollectorDataTypes.SQL,
                            collectorSTP: 'SELECT 0'
                        } as SQLCollectoData
                    }
                break;
            }
        }
    }
}
