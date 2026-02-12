import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DateHelpers } from '../../../../helpers/dateHelpers';
import { APIURL } from '../../../../../globals';
import { Endpoints } from '../../../../../Endpoints';
import { ConfirmDialogHelpers } from '../../helpers/confirmdialoghelpers';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TextareaModule } from 'primeng/textarea';
import { FieldsetModule } from 'primeng/fieldset';
import { UserInterface } from '../../interfaces/usersinterface';
import { SplitterModule } from 'primeng/splitter';
import { ReportArgument } from '../../../../models/OMN/reportArgument';
import { ArgumentTypes } from '../../../../models/OMN/argumentTypes';
import { ArgumentEditor } from "./components/argumentseditor";
import { CardHelpDrawer } from "../../common/cardhelpdrawer";
import { TabsModule } from 'primeng/tabs';
import { CalculableszEditor } from "./components/calculableseditor";
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { CreatedUpdatedControl } from '../../../../common/components/createdupdatedcontrol';
import { FloatTextInput } from '../../../../common/components/floattextinput';
import { TableTextFilterColumn, TableBoolFilterColumn, TableDateFilterColumn } from '../../../../common/components/tables/filtercolumns';
import { TableTagRow, TableDateRow, TableBoolRow } from '../../../../common/components/tables/filterrows';
import { FloatMultiSelect } from '../../../../common/components/floatmultiselect';
import { FloatToggleSwitch } from '../../../../common/components/floattoggleswitch';
import { FloatHelp } from "../../../../common/components/floathelp";
import { FloatTable } from "../../../../common/components/floattable";
import { FloatDialog } from "../../../../common/components/floatdialog";
import { BaseCRUDInterface } from '../../../../common/interfaces/baseCRUDInterface';
import { Calculable } from '../../../../models/OMN/calculable';
import { OMNDefinition } from '../../../../models/OMN/oMNDefinition';
import { DAISchemaOverview } from "../dai/dai.schemaoverview";

@Component({
    selector: 'app-omn-definitions',
    imports: [FormsModule, CommonModule, DialogModule, ButtonModule, FloatLabelModule, InputTextModule,
    MultiSelectModule, PasswordModule, TableModule, TagModule, FloatTextInput, ConfirmDialogModule, TextareaModule,
    FieldsetModule, SplitterModule, FloatMultiSelect, ArgumentEditor, FloatToggleSwitch,
    TableTagRow, TableDateRow, TableBoolRow, TableTextFilterColumn, TableBoolFilterColumn, TableDateFilterColumn, TabsModule, CalculableszEditor, MonacoEditorModule, FloatHelp, FloatTable, FloatDialog, DAISchemaOverview],
    template: `
        <app-floathelp header="Report Definitions">
            <p>Help text.</p>
        </app-floathelp>

        <app-floattable [values]="allItems" stateKey="omn-definitions-session" [isLoading]="isLoading" [showAdd]="canWrite" (onAddItem)="showAddItem()" (onLoadItems)="loadItems()" (onShowItem)="showEditItem($event)">
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
                <div class="flex flex-row gap-2">
                    <app-floattextinput [(value)]="currentItem.name" [disabled]="!canWrite" label="Name" icon="pi-pencil" class="w-full " />
                    <app-floattoggleswitch [(value)]="currentItem.isActive" label="Active" [disabled]="!canWrite" />
                </div>
                <app-floatmultiselect [options]="usersInterface.allUsers" [(selected)]="currentItem.users" optionLabel="firstName" optionValue="id" label="Accesible to"/>
                <p>Every query automatically gets a Guid parameter called '&#64;ExecID' that represents the ID of the executing user.</p>
                <app-omn-components-argumentseditor [(currentItem)]="currentItem.arguments" [query]="currentItem.query"/>
                <div class="flex h-full flex-grow">
                    <ngx-monaco-editor style="flex-grow:1;min-height:50%;height:100%" [options]="editorOptions" [(ngModel)]="currentItem.query" [disabled]="!canWrite"> </ngx-monaco-editor>
                </div>
                @if(canReadSchema){
                    <p-button label="Schema Overview" (onClick)="schemaOverviewVisible = true" class="w-full" fluid />
                }
                <app-omn-components-calculableseditor [(currentItem)]="currentItem.calculables"/>
            </ng-template>
        </app-floatdialog>

        <app-dai-schemaoverview [(schemaOverviewVisible)]="schemaOverviewVisible"/>
    `,
    host: {
        class: 'card flex flex flex-col flex-grow'
    }
})
export class OMNDefinitions extends BaseCRUDInterface {
    override newItemTemplate(): any {
        return {
            id: '',
            name: 'Definition Name',
            query: '',
            arguments: [] as ReportArgument[],
            calculables: [] as Calculable[]
        } as OMNDefinition;
    }

    editorOptions = {theme: 'vs-dark', language: 'sql', automaticLayout: true};

    localStorage = localStorage;

    override getAllEndpoint: string = Endpoints.OMN.Definitions.Get_AllDefinitions;
    override getEndpoint: string = Endpoints.OMN.Definitions.Get_Definition;
    override patchEndpoint: string = Endpoints.OMN.Definitions.Patch_UpdateDefinition;
    override postEndpoint: string = Endpoints.OMN.Definitions.Post_AddDefinition;
    override deleteEndpoint: string = Endpoints.OMN.Definitions.Delete_Definition;

    override canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.OMN_Definitions_Read);
    override canWrite: boolean = PermissionHelpers.HasPermission(PermissionsTable.OMN_Definitions_Write);

    canReadSchema: boolean = PermissionHelpers.HasPermission(PermissionsTable.DAI_Schema_Read);
    schemaOverviewVisible : boolean = false;

    constructor(
        http: HttpClient,
        service: MessageService,
        confirmationService: ConfirmationService,
        public usersInterface : UserInterface
    ) {
        super(http, service, confirmationService);
    }

    override async ngOnInit() {
        if (this.canRead) await this.loadItems();
    }

    argumentToString(type : ArgumentTypes) : string{
        switch(type){
            case ArgumentTypes.String: return "String";
            case ArgumentTypes.Bool: return "Bool";
            case ArgumentTypes.Datetime: return "DateTime";
            case ArgumentTypes.Guid: return "Guid";
            default:
                return "Unknown"
        }
    }

    addArgument(){
        this.currentItem.arguments.push({
            name: "@NewArgument",
            type: ArgumentTypes.String
        } as ReportArgument);
    }

    removeArgument(item : ReportArgument){
        var index = this.currentItem.arguments.indexOf(item);
        if (index != -1)
            this.currentItem.arguments.splice(index);
    }
}
