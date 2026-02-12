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
import { SplitterModule } from 'primeng/splitter';
import { TextareaModule } from 'primeng/textarea';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { FloatTextInput } from '../../../../common/components/floattextinput';
import { TableTextFilterColumn, TableDateFilterColumn } from '../../../../common/components/tables/filtercolumns';
import { TableTagRow, TableDateRow } from '../../../../common/components/tables/filterrows';
import { BaseCRUDInterface } from '../../../../common/interfaces/baseCRUDInterface';
import { FloatHelp } from "../../../../common/components/floathelp";
import { FloatTable } from "../../../../common/components/floattable";
import { FloatDialog } from "../../../../common/components/floatdialog";
import { HttpClient } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserInterface } from '../../interfaces/usersinterface';
import { AddLLMInput } from '../../../../models/CHB/addLLMInput';
import { ModelFeatureEditor } from "./components/chb.components.featureeditor";
import { LLMModel } from '../../../../models/CHB/lLMModel';
import { ModelFeature } from '../../../../models/CHB/modelFeature';
import { firstValueFrom } from 'rxjs';
import { APIURL } from '../../../../../globals';
import { Divider } from "primeng/divider";
import { KnowledgebaseModel } from '../../../../models/CHB/knowledgebaseModel';
import { ListKnowledgebaseModel } from '../../../../models/CHB/listKnowledgebaseModel';
import { ConversationContextTypes } from '../../../../models/CHB/conversationContextTypes';
import { EnumIndexer } from '../../../../models/EnumIndexer';
import { FloatMultiSelect } from "../../../../common/components/floatmultiselect";

@Component({
    selector: 'app-chb-models',
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
    MonacoEditorModule,
    FloatHelp,
    FloatTable,
    FloatDialog,
    ModelFeatureEditor,
    Divider,
    FloatMultiSelect
],
    template: `
        <app-floathelp header="CHB Models">
            <p>Help text.</p>
        </app-floathelp>

        <app-floattable [values]="allItems" stateKey="chb-models-session" [isLoading]="isLoading" [showAdd]="canWrite" (onAddItem)="showAddItem()" (onLoadItems)="loadItems()" (onShowItem)="showEditItem($event)">
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

        <app-floatdialog [currentItem]="currentItem" [(showDialog)]="showDialog" (onSaveItem)="saveItem()" (onDeleteItem)="deleteItem()" [canWrite]="canWrite" [style]="{'width':'80vw','height':'80vh'}">
            <ng-template #body>
                <div class="card flex flex-col gap-2 w-full h-full">
                    <app-floattextinput [(value)]="currentItem.name" [disabled]="!canWrite" label="Name" icon="pi-pencil" />
                    <app-floatmultiselect [(selected)]="currentItem.requiredContexts" [options]="contextTypes" optionLabel="label" optionValue="value" label="Required Contexts"/>
                    <p-divider/>
                    <p>Model Features</p>
                    <app-chb-components-featureeditor [(nodeValue)]="currentItem.features" [tools]="tools" [knowledgebases]="knowledgebases" />
                </div>
            </ng-template>
        </app-floatdialog>
    `,
    host: {
        class: 'card flex flex-col flex-grow'
    }
})
export class CHBModels extends BaseCRUDInterface {
    override newItemTemplate(): any {
        return {
            id:'',
            name: 'New Model',
            features: [] as ModelFeature[],
            requiredContexts: [] as ConversationContextTypes[]
        } as LLMModel;
    }

    override getAllEndpoint: string = Endpoints.CHB.Models.Get_AllModels;
    override getEndpoint: string = Endpoints.CHB.Models.Get_Model;
    override patchEndpoint: string = Endpoints.CHB.Models.Patch_UpdateModel;
    override postEndpoint: string = Endpoints.CHB.Models.Post_AddModel;
    override deleteEndpoint: string = Endpoints.CHB.Models.Delete_Model;

    override canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.CHB_Messages_Read);
    override canWrite: boolean = PermissionHelpers.HasPermission(PermissionsTable.CHB_Messages_Write);

    canReadKnowledgebases : boolean = PermissionHelpers.HasPermission(PermissionsTable.CHB_Knowledgebases_Read);
    canReadTools : boolean = PermissionHelpers.HasPermission(PermissionsTable.CHB_Tools_Read);

    knowledgebases : ListKnowledgebaseModel[] = [];
    tools : string[] = [];

    contextTypes : EnumIndexer[] = [];

    constructor(
        http: HttpClient,
        service: MessageService,
        public usersInterface : UserInterface,
        confirmationService: ConfirmationService
    ) {
        super(http, service, confirmationService);
        this.contextTypes = Object.entries(ConversationContextTypes)
            .filter((e) => !isNaN(e[0] as any))
            .map((e) => new EnumIndexer(+e[0], e[1].toString()));
    }

    override async ngOnInit() {
        await super.ngOnInit();

        if (this.canReadKnowledgebases)
            this.knowledgebases = await firstValueFrom(this.http.get<ListKnowledgebaseModel[]>(APIURL + Endpoints.CHB.Knowledgebases.Get_AllKnowledgebases));
        if (this.canReadTools)
            this.tools = await firstValueFrom(this.http.get<string[]>(APIURL + Endpoints.CHB.Tools.Get_AllTools));
    }
}
