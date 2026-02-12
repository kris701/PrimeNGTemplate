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
import { FloatTextInput } from '../../../../common/components/floattextinput';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { TableDateFilterColumn, TableTextFilterColumn, TableBoolFilterColumn } from '../../../../common/components/tables/filtercolumns';
import { TableDateRow, TableTagRow, TableBoolRow } from '../../../../common/components/tables/filterrows';
import { firstValueFrom } from 'rxjs';
import { FloatEditor } from '../../../../common/components/floateditor';
import { SplitterModule } from 'primeng/splitter';
import { TextareaModule } from 'primeng/textarea';
import { Fieldset } from "primeng/fieldset";
import { DividerModule } from 'primeng/divider';
import { DAIAttributeEditor } from "../dai/components/dai.components.attributeeditor";
import { ListCollectorModel } from '../../../../models/DAI/listCollectorModel';
import { EvaluableTypes } from '../../../../models/DAI/evaluableTypes';
import { AndNode } from '../../../../models/DAI/andNode';
import { ConditionEditorEvaluableNode } from '../../common/conditioneditor';
import { TabsModule } from 'primeng/tabs';
import { FloatToggleSwitch } from '../../../../common/components/floattoggleswitch';
import { Evaluatable } from '../../../../models/DAI/evaluatable';
import { BaseCRUDInterface } from '../../../../common/interfaces/baseCRUDInterface';
import { FloatHelp } from "../../../../common/components/floathelp";
import { FloatTable } from "../../../../common/components/floattable";
import { FloatDialog } from "../../../../common/components/floatdialog";
import { FloatSelect } from "../../../../common/components/floatselect";
import { Message } from "primeng/message";
import { BPGDefinitionStepModel } from '../../../../models/BPG/bPGDefinitionStepModel';
import { BPGDefinitionModel } from '../../../../models/BPG/bPGDefinitionModel';
import { AddBPGDefinitionStepInput } from '../../../../models/BPG/addBPGDefinitionStepInput';
import { ConditionTester } from "../../common/conditiontester";
import { BPGCriticality } from '../../../../models/BPG/bPGCriticality';
import { Badge } from "primeng/badge";
import { BPGCriticalityEditor } from "./components/bpg.components.criticalitieseditor";
import { Attribute } from '../../../../models/DAI/attribute';
import { DAIAttributeTester } from "../dai/components/dai.components.attributetester";

@Component({
    selector: 'app-bpg-definitions',
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
    Fieldset,
    ConditionEditorEvaluableNode,
    DividerModule,
    TabsModule,
    FloatHelp,
    FloatTable,
    FloatDialog,
    FloatSelect,
    Message,
    ConditionTester,
    Badge,
    BPGCriticalityEditor,
    DAIAttributeEditor,
    DAIAttributeTester
],
    template: `
        <app-floathelp header="BPG Definitions">
            <p>Help text.</p>
        </app-floathelp>

        <app-floattable [values]="allItems" stateKey="bpg-definitions-session" [isLoading]="isLoading" [showAdd]="canWrite" (onAddItem)="showAddItem()" (onLoadItems)="loadItems()" (onShowItem)="showEditItem($event)">
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
                        <p-tab value="3" class="flex items-center gap-2"><i class="pi pi-question"></i>Condition</p-tab>
                        <p-tab #attributeTab value="4" class="flex items-center gap-2">
                            <i class="pi pi-paperclip"></i>
                            Attributes
                            @if(attributeTab.active()){
                                <p-button (click)="mainAttributeEditor.toggleMenu($event)" size="small" text icon="pi pi-plus" />
                            }
                        </p-tab>
                        <p-tab #stepsTab value="5" class="flex items-center gap-2">
                            <i class="pi pi-list-check"></i>
                            Steps
                            @if(stepsTab.active()){
                                <p-button (onClick)="addProcessStep()" size="small" text icon="pi pi-plus" />
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

                                <app-bpg-criticalitieseditor #mainCriticalitiesEditor [(nodeValue)]="currentItem.criticalityMap" [canWrite]="canWrite" [showAdd]="false"/>
                            </div>
                        </p-tabpanel>
                        <p-tabpanel value="2">
                            <div class="flex flex-col gap-2">
                                <span>To know what users a new BPG instance should apply to, a simple collector is used.</span>
                                <span>You can choose yourself what that collector does, however you must make sure it always returns either a single GUID or a list of GUIDs!</span>
                                <span>These GUIDs should be IDs of users in THIS system, and not users in the CW system!</span>
                                <p-message closable="true">Remember, you can bind users in the CBI system to CW users under 'Edit Users'</p-message>
                                <app-floatselect [(selected)]="currentItem.usersCollectorID" [options]="allCollectors" [disabled]="!canWrite" optionLabel="name" optionValue="id" label="User collector"/>
                            </div>
                        </p-tabpanel>
                        <p-tabpanel value="3">
                            <div class="flex flex-col gap-2">
                                <span>Here you can define the condition for this process to be attached to an item.</span>
                                <app-conditioneditor-evaluablenode [(nodeValue)]="currentItem.triggerCondition" [dataCollectors]="allCollectors" [canDeleteSelf]="true"/>
                                <app-conditiontester [(nodeValue)]="currentItem.triggerCondition" [dataCollectors]="allCollectors"/>
                            </div>
                        </p-tabpanel>
                        <p-tabpanel value="4">
                            <div class="flex flex-col gap-2">
                                <span>Here you can set additional attributes that you want to display for this process.</span>
                                <app-dai-attributeeditor #mainAttributeEditor [(nodeValue)]="currentItem.attributes" [dataCollectors]="allCollectors" [showAdd]="false"/>
                                @if(currentItem.attributes.length > 0){
                                    <app-dai-attributetester [(nodeValue)]="currentItem.attributes"/>
                                }
                            </div>
                        </p-tabpanel>
                        <p-tabpanel value="5">
                            <div class="flex flex-col gap-2">
                                <span>Here you can add steps to the process. Each step has their own trigger and completed conditions, depending on if you want the step to always show or not</span>
                                <span>A process is marked as completed when all the steps (that have been triggered) has their completed condition fulfilled.</span>
                                @if(currentItem.steps.length > 0){
                                    @for(step of currentItem.steps; track step.id){
                                        <p-fieldset #parentField [toggleable]="true" [collapsed]="true" class="fullWidthFieldsetHeader">
                                            <ng-template #header>
                                                <div class="flex flex-row gap-2 items-center w-full">
                                                    @if(parentField.collapsed){
                                                        <span class="font-bold">{{step.name}}</span>
                                                    }
                                                    @else {
                                                        <app-floattextinput [(value)]="step.name" [disabled]="!canWrite" class="w-full" icon="pi-pencil" />
                                                    }
                                                    <div class="flex flex-grow"></div>
                                                    <p-button icon="pi pi-arrow-up" size="small" text [disabled]="!canWrite || step.orderIndex == 0 || currentItem.steps.length == 1" (onClick)="moveStepUp(step);$event.stopImmediatePropagation()"/>
                                                    <p-button icon="pi pi-arrow-down" size="small" text [disabled]="!canWrite || step.orderIndex == currentItem.steps.length - 1 || currentItem.steps.length == 1" (onClick)="moveStepDown(step);$event.stopImmediatePropagation()"/>
                                                    <p-button icon="pi pi-times" severity="danger" size="small" text [disabled]="!canWrite" (onClick)="removeStep(step);$event.stopImmediatePropagation()"/>
                                                </div>
                                            </ng-template>
                                            <div class="flex flex-col gap-2">
                                                <app-floateditor [(value)]="step.description" [disabled]="!canWrite" />
                                                <p-fieldset [toggleable]="true" [collapsed]="true">
                                                    <ng-template #header>
                                                        <div class="flex flex-row gap-2 items-center">
                                                            <span class="font-bold">Trigger Condition</span>
                                                            <p-badge [value]="triggerCond.conditionCount"/>
                                                        </div>
                                                    </ng-template>
                                                    <app-conditioneditor-evaluablenode #triggerCond [(nodeValue)]="step.triggerCondition" [dataCollectors]="allCollectors" [canDeleteSelf]="true"/>
                                                    <app-conditiontester [(nodeValue)]="step.triggerCondition" [dataCollectors]="allCollectors"/>
                                                </p-fieldset>
                                                <p-fieldset [toggleable]="true" [collapsed]="true">
                                                    <ng-template #header>
                                                        <div class="flex flex-row gap-2 items-center">
                                                            <span class="font-bold">Completed Condition</span>
                                                            <p-badge [value]="completeCond.conditionCount"/>
                                                        </div>
                                                    </ng-template>
                                                    <app-conditioneditor-evaluablenode #completeCond [(nodeValue)]="step.checkCondition" [dataCollectors]="allCollectors" [canDeleteSelf]="true"/>
                                                    <app-conditiontester [(nodeValue)]="step.checkCondition" [dataCollectors]="allCollectors"/>
                                                </p-fieldset>
                                                <p-fieldset [toggleable]="true" [collapsed]="true">
                                                    <ng-template #header>
                                                        <div class="flex flex-row gap-2 items-center">
                                                            <span class="font-bold">Attributes</span>
                                                            <p-badge [value]="step.attributes.length"/>
                                                        </div>
                                                    </ng-template>
                                                    <app-dai-attributeeditor [(nodeValue)]="step.attributes" [dataCollectors]="allCollectors"/>
                                                </p-fieldset>
                                            </div>
                                        </p-fieldset>
                                    }
                                }
                                @else {
                                    <p>No steps created yet!</p>
                                }
                            </div>
                        </p-tabpanel>
                    </p-tabpanels>
                </p-tabs>
            </ng-template>
        </app-floatdialog>
    `,
    host: {
        class: 'card flex flex-col flex-grow'
    },
    styles: `
        ::ng-deep.fullWidthFieldsetHeader > fieldset > .p-fieldset-legend {
            width: 100%;
        }

        ::ng-deep.fullWidthFieldsetHeader button {
            width: 100%;
        }
    `
})
export class BPGDefinitions extends BaseCRUDInterface {
    override newItemTemplate(): any {
        return {
            id: '',
            name: 'New Definition',
            description: 'Description',
            isActive: false,
            triggerCondition: { $type:EvaluableTypes.And, children: [] } as Evaluatable,
            steps: [] as AddBPGDefinitionStepInput[],
            attributes: [] as Attribute[],
            criticalityMap: [] as BPGCriticality[]
        } as BPGDefinitionModel;
    }

    override getAllEndpoint: string = Endpoints.BPG.Definitions.Get_AllDefinitions;
    override getEndpoint: string = Endpoints.BPG.Definitions.Get_Definition;
    override patchEndpoint: string = Endpoints.BPG.Definitions.Patch_UpdateDefinition;
    override postEndpoint: string = Endpoints.BPG.Definitions.Post_AddDefinition;
    override deleteEndpoint: string = Endpoints.BPG.Definitions.Delete_Definition;

    override canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.BPG_Definitions_Read);
    override canWrite: boolean = PermissionHelpers.HasPermission(PermissionsTable.BPG_Definitions_Write);
    canReadDataCollectors: boolean = PermissionHelpers.HasPermission(PermissionsTable.DAI_Collectors_Read);

    override showSaveDialog: boolean = true;
    override savewDialogMessage : string = "Are you sure you want to save this item? This will delete ALL existing BPG instances for this definition!";

    allCollectors: ListCollectorModel[] = [];

    override async ngOnInit() {
        if (this.canReadDataCollectors)
            await this.loadCollectors();
        await super.ngOnInit();
    }

    override async showEditItem(id: string){
        await super.showEditItem(id);
        var steps = this.currentItem.steps;
        steps.sort((a : BPGDefinitionStepModel,b : BPGDefinitionStepModel) => a.orderIndex - b.orderIndex)
        this.currentItem.steps = [...steps]
    }

    async loadCollectors() {
        this.isLoading = true;
        this.allCollectors = await firstValueFrom(this.http.get<ListCollectorModel[]>(APIURL + Endpoints.DAI.Collectors.Get_AllCollectors));
        this.isLoading = false;
    }

    addProcessStep(){
        var step = {
            name: 'Name',
            description: 'Description',
            orderIndex: this.currentItem.steps.length,
            triggerCondition:  { $type:EvaluableTypes.And, children: [] } as AndNode,
            checkCondition: { $type:EvaluableTypes.And, children: [] } as AndNode,
            attributes:  [] as Attribute[]
        } as AddBPGDefinitionStepInput;
        this.currentItem.steps.push(step)

        this.compressOrderIndexes();
    }

    moveStepUp(step : BPGDefinitionStepModel){
        if (step.orderIndex <= 0)
            return;
        var otherStep = this.currentItem.steps[step.orderIndex - 1]
        otherStep.orderIndex = step.orderIndex;
        step.orderIndex -= 1;

        this.compressOrderIndexes();
    }

    moveStepDown(step : BPGDefinitionStepModel){
        if (step.orderIndex >= this.currentItem.steps.length)
            return;
        var otherStep = this.currentItem.steps[step.orderIndex + 1]
        otherStep.orderIndex = step.orderIndex;
        step.orderIndex += 1;

        this.compressOrderIndexes();
    }

    removeStep(step : BPGDefinitionStepModel){
        this.currentItem.steps.splice(step.orderIndex, 1);
        this.compressOrderIndexes();
    }

    compressOrderIndexes(){
        this.currentItem.steps.sort((a : BPGDefinitionStepModel,b : BPGDefinitionStepModel) => a.orderIndex - b.orderIndex)
        for(var i = 0; i < this.currentItem.steps.length; i++)
            this.currentItem.steps[i].orderIndex = i;
    }
}
