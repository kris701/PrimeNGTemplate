import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';
import { Drawer } from "primeng/drawer";
import { Tree, TreeNodeSelectEvent } from "primeng/tree";
import { ProgressSpinner } from "primeng/progressspinner";
import { ListTableSchemaModel } from '../../../../models/DAI/listTableSchemaModel';
import { GetTableSchemaOutput } from '../../../../models/DAI/getTableSchemaOutput';

@Component({
    selector: 'app-dai-schemaoverview',
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
    SplitterModule,
    TextareaModule,
    MonacoEditorModule,
    Drawer,
    Tree,
    ProgressSpinner
],
    template: `
        <p-drawer header="Schema Overview" [(visible)]="schemaOverviewVisible" appendTo="body" styleClass="!w-[80vw]" (onShow)="loadSchemaTree()" (onHide)="schemaOverviewVisibleChange.emit()">
            @if(loadingSchemaTree){
                <p-progress-spinner/>
            }
            @else {
                @if(schemaTree.length == 0){
                    <p>No schemas or tables are available to you!</p>
                }
                @else {
                    <p-splitter class="h-full" [panelStyle]="{ 'overflow-y':'auto' }" stateStorage="local" stateKey="dai-collectors-splitter">
                        <ng-template #panel>
                            <p-tree [value]="schemaTree" selectionMode="single" [selection]="selectedItem" (onNodeSelect)="onTreeItemSelect($event)"/>
                        </ng-template>
                        <ng-template #panel>
                            @if(currentDefinition == ""){
                                <p>Select a table definition to view...</p>
                            }
                            @else {
                                <div class="flex h-full flex-grow">
                                    <ngx-monaco-editor style="flex-grow:1;min-height:200px;height:100%" [options]="editorOptions" [ngModel]="currentDefinition" [disabled]="true"> </ngx-monaco-editor>
                                </div>
                            }
                        </ng-template>
                    </p-splitter>
                }
            }
        </p-drawer>
    `
})
export class DAISchemaOverview {
    canReadSchema: boolean = PermissionHelpers.HasPermission(PermissionsTable.DAI_Schema_Read);

    editorOptions = {theme: 'vs-dark', language: 'sql', automaticLayout: true};

    @Input() sourceID : string = '';
    @Input() schemaOverviewVisible : boolean = false;
    @Output() schemaOverviewVisibleChange = new EventEmitter<boolean>();
    lastSourceID : string = '';

    loadingSchemaTree: boolean = true;
    schemaTree : TreeNode[] = []
    selectedItem: TreeNode | null = null;
    currentDefinition : string = "";

    constructor(
        private http: HttpClient
    ) {
    }

    async loadSchemaTree(){
        if (this.lastSourceID == this.sourceID)
            return;
        this.loadingSchemaTree = true;

        var newNodes : TreeNode[] = [];
        var availableSchemas = await firstValueFrom(this.http.get<string[]>(APIURL + Endpoints.DAI.Schema.Schemas.Get_AllSchemas + "?SourceID=" + this.sourceID));
        availableSchemas.forEach(async x => {
            var schemaNode = {
                key: x,
                label: x,
                icon: 'pi pi-folder',
                children: [],
                selectable:false
            } as TreeNode;

            var tableSchemas = await firstValueFrom(this.http.get<ListTableSchemaModel[]>(APIURL + Endpoints.DAI.Schema.Tables.Get_AllTableSchemas + "?TableSchema=" + x + "&SourceID=" + this.sourceID));
            tableSchemas.forEach(y => {
                var name = y.tableSchema + '.' + y.tableName;
                schemaNode.children?.push({
                    key: name,
                    label: name,
                    icon: 'pi pi-table',
                } as TreeNode);
            })

            newNodes.push(schemaNode);
        })
        this.schemaTree = newNodes;
        this.lastSourceID = this.sourceID;
        this.loadingSchemaTree = false;
    }

    async onTreeItemSelect(event: TreeNodeSelectEvent) {
        var key = event.node.key;
        if (key){
            var split = key.split('.')
            var schema = split[0];
            var name = split[1];
            var def = await firstValueFrom(this.http.get<GetTableSchemaOutput>(APIURL + Endpoints.DAI.Schema.Tables.Get_TableSchema + "?TableSchema=" + schema + "&TableName=" + name + "&SourceID=" + this.sourceID));
            this.currentDefinition = def.tableStatement;
        }
    }
}
