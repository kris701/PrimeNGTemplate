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
import { ListCollectorModel } from '../../../../models/DAI/listCollectorModel';
import { EvaluableTypes } from '../../../../models/DAI/evaluableTypes';
import { ConditionEditorEvaluableNode } from '../../common/conditioneditor';
import { FloatEditor } from '../../../../common/components/floateditor';
import { FloatTextInput } from '../../../../common/components/floattextinput';
import { TableTextFilterColumn, TableDateFilterColumn, TableBoolFilterColumn } from '../../../../common/components/tables/filtercolumns';
import { TableTagRow, TableDateRow, TableBoolRow } from '../../../../common/components/tables/filterrows';
import { FloatToggleSwitch } from '../../../../common/components/floattoggleswitch';
import { BaseCRUDInterface } from '../../../../common/interfaces/baseCRUDInterface';
import { Evaluatable } from '../../../../models/DAI/evaluatable';
import { FloatHelp } from "../../../../common/components/floathelp";
import { FloatTable } from "../../../../common/components/floattable";
import { FloatDialog } from "../../../../common/components/floatdialog";
import { DQADefinitionModel } from '../../../../models/DQA/dQADefinitionModel';
import { FloatSelect } from "../../../../common/components/floatselect";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "primeng/tabs";
import { Message } from "primeng/message";
import { ConditionTester } from "../../common/conditiontester";
import { DQACriticality } from '../../../../models/DQA/dQACriticality';
import { DQACriticalityEditor } from "./components/dqa.components.criticalitieseditor";
import { DAIAttributeEditor } from "../dai/components/dai.components.attributeeditor";
import { DAIAttributeTester } from "../dai/components/dai.components.attributetester";

@Component({
    selector: 'app-dqa-definitions',
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
    FloatEditor,
    ConditionEditorEvaluableNode,
    DividerModule,
    FloatHelp,
    FloatTable,
    FloatDialog,
    FloatSelect,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Message,
    ConditionTester,
    DQACriticalityEditor,
    DAIAttributeEditor,
    DAIAttributeTester
],
    template: `
        <app-floathelp header="DQA Definitions">
            <p>Help text.</p>
        </app-floathelp>

        <app-floattable [values]="allItems" stateKey="dqa-definitions-session" [isLoading]="isLoading" [showAdd]="canWrite" (onAddItem)="showAddItem()" (onLoadItems)="loadItems()" (onShowItem)="showEditItem($event)">
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

        <app-floatdialog [currentItem]="currentItem" [(showDialog)]="showDialog" (onSaveItem)="saveItem()" (onDeleteItem)="deleteItem()" [canWrite]="canWrite" [style]="{'width':'80vw','height':'80vh'}">
            <ng-template #body>
                <p-tabs value="0" class="h-full">
                    <p-tablist style="min-height:4vh">
                        <p-tab value="0" class="flex items-center gap-2"><i class="pi pi-pen-to-square"></i>Details</p-tab>
                        <p-tab #criticalitiesTab value="1" class="flex items-center gap-2">
                            <i class="pi pi-calendar-clock"></i>
                            Criticalities
                            @if(criticalitiesTab.active()){
                                <p-button (click)="mainCriticalitiesEditor.addCriticality()" size="small" text icon="pi pi-plus" />
                            }
                        </p-tab>
                        <p-tab value="2" class="flex items-center gap-2"><i class="pi pi-user"></i>User Collector</p-tab>
                        <p-tab value="3" class="flex items-center gap-2"><i class="pi pi-question"></i>Trigger Condition</p-tab>
                        <p-tab value="4" class="flex items-center gap-2"><i class="pi pi-check"></i>Check Condition</p-tab>
                        <p-tab #attributeTab value="5" class="flex items-center gap-2">
                            <i class="pi pi-paperclip"></i>
                            Attributes
                            @if(attributeTab.active()){
                                <p-button (click)="mainAttributeEditor.toggleMenu($event)" size="small" text icon="pi pi-plus" />
                            }
                        </p-tab>
                    </p-tablist>
                    <p-tabpanels class="h-full">
                        <p-tabpanel value="0" class="flex flex-col h-full">
                            <div class="flex flex-col gap-2 h-full">
                                <div class="flex flex-row gap-2">
                                    <app-floattextinput [(value)]="currentItem.name" [disabled]="!canWrite" label="Name" icon="pi-pencil"  class="w-full" />
                                    <app-floattoggleswitch [(value)]="currentItem.isActive" label="Active" [disabled]="!canWrite" />
                                </div>
                                <app-floateditor [(value)]="currentItem.description" [disabled]="!canWrite" />
                            </div>
                        </p-tabpanel>
                        <p-tabpanel value="1">
                            <div class="flex flex-col gap-2">
                                <span>Here you can define criticalities.</span>
                                <span>The default criticality is none, but if you add a criticality and set it to be valid from 0 hours after creation, that criticality will be the default.</span>
                                <p-message closable="true">The criticalities correspond to different colors in the Cargo BI Assistant widget</p-message>
                                <app-dqa-criticalitieseditor #mainCriticalitiesEditor [(nodeValue)]="currentItem.criticalityMap" [canWrite]="canWrite" [showAdd]="false"/>
                            </div>
                        </p-tabpanel>
                        <p-tabpanel value="2">
                            <div class="flex flex-col gap-2">
                                <span>To know what users a new DQA instance should apply to, a simple collector is used.</span>
                                <span>You can choose yourself what that collector does, however you must make sure it always returns either a single GUID or a list of GUIDs!</span>
                                <span>These GUIDs should be IDs of users in THIS system, and not users in the CW system!</span>
                                <p-message closable="true">Remember, you can bind users in the CBI system to CW users under 'Edit Users'</p-message>
                                <app-floatselect [(selected)]="currentItem.usersCollectorID" [options]="allCollectors" [disabled]="!canWrite" optionLabel="name" optionValue="id" label="User collector"/>
                            </div>
                        </p-tabpanel>
                        <p-tabpanel value="3">
                            <div class="flex flex-col gap-2">
                                <span>Define what conditions should be true for creating a DQA instance.</span>
                                <app-conditioneditor-evaluablenode [(nodeValue)]="currentItem.triggerCondition" [dataCollectors]="allCollectors"/>
                                <app-conditiontester [(nodeValue)]="currentItem.triggerCondition" [dataCollectors]="allCollectors"/>
                            </div>
                        </p-tabpanel>
                        <p-tabpanel value="4">
                            <div class="flex flex-col gap-2">
                                <span>Define what check should pass for an active DQA instance to become resolved.</span>
                                <app-conditioneditor-evaluablenode [(nodeValue)]="currentItem.checkCondition" [dataCollectors]="allCollectors"/>
                                <app-conditiontester [(nodeValue)]="currentItem.checkCondition" [dataCollectors]="allCollectors"/>
                            </div>
                        </p-tabpanel>
                        <p-tabpanel value="5">
                            <div class="flex flex-col gap-2">
                                <span>Here you can set additional attributes that you want to display for this alert.</span>
                                <app-dai-attributeeditor #mainAttributeEditor [(nodeValue)]="currentItem.attributes" [dataCollectors]="allCollectors" [showAdd]="false"/>
                                @if(currentItem.attributes.length > 0){
                                    <app-dai-attributetester [(nodeValue)]="currentItem.attributes"/>
                                }
                            </div>
                        </p-tabpanel>
                    </p-tabpanels>
                </p-tabs>
            </ng-template>
        </app-floatdialog>
    `,
    host: {
        class: 'card flex flex flex-col flex-grow'
    }
})
export class DQADefinitions extends BaseCRUDInterface {
    override newItemTemplate(): any {
        return {
            id: '',
            name: 'New Definition',
            description: 'Description',
            isActive: false,
            triggerCondition: { $type:EvaluableTypes.And, children: [] } as Evaluatable,
            checkCondition: { $type:EvaluableTypes.And, children: [] } as Evaluatable,
            usersCollectorID: this.allCollectors[0].id,
            criticalityMap: [] as DQACriticality[]
        } as DQADefinitionModel;
    }

    override getAllEndpoint: string = Endpoints.DQA.Definitions.Get_AllDefinitions;
    override getEndpoint: string = Endpoints.DQA.Definitions.Get_Definition;
    override patchEndpoint: string = Endpoints.DQA.Definitions.Patch_UpdateDefinition;
    override postEndpoint: string = Endpoints.DQA.Definitions.Post_AddDefinition;
    override deleteEndpoint: string = Endpoints.DQA.Definitions.Delete_Definition;

    override canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.DQA_Definitions_Read);
    override canWrite: boolean = PermissionHelpers.HasPermission(PermissionsTable.DQA_Definitions_Write);
    canReadDataCollectors: boolean = PermissionHelpers.HasPermission(PermissionsTable.DAI_Collectors_Read);

    override showSaveDialog: boolean = true;
    override savewDialogMessage : string = "Are you sure you want to save this item? This will delete ALL existing DQA instances for this definition!";

    allCollectors: ListCollectorModel[] = [];

    override async ngOnInit() {
        if (this.canReadDataCollectors)
            await this.loadCollectors();
        await super.ngOnInit();
    }

    async loadCollectors() {
        this.isLoading = true;
        this.allCollectors = await firstValueFrom(this.http.get<ListCollectorModel[]>(APIURL + Endpoints.DAI.Collectors.Get_AllCollectors));
        this.isLoading = false;
    }
}
