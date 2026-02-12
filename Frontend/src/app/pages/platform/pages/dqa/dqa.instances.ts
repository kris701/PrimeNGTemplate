import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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
import { TableTextFilterColumn, TableBoolFilterColumn } from '../../../../common/components/tables/filtercolumns';
import { TableBoolRow, TableTagRow } from '../../../../common/components/tables/filterrows';
import { FloatHelp } from "../../../../common/components/floathelp";
import { FloatTable } from "../../../../common/components/floattable";
import { ListDQADefinitionModel } from '../../../../models/DQA/listDQADefinitionModel';
import { DQAInstanceModel } from '../../../../models/DQA/dQAInstanceModel';

@Component({
    selector: 'app-dqa-instances',
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
    TableTextFilterColumn,
    TableTagRow,
    TableBoolRow,
    SplitterModule,
    TextareaModule,
    DividerModule,
    FloatHelp,
    FloatTable,
    TableBoolFilterColumn
],
    template: `
        <app-floathelp header="DQA Instances">
            <p>Help text.</p>
        </app-floathelp>

        <app-floattable [values]="allItems" stateKey="dqa-instances-session" [isLoading]="isLoading" [showAdd]="false" [rowSelectable]="false" (onLoadItems)="loadItems()">
            <ng-template #tableHeader>
                <th textfiltercolumn pSortableColumn="definition.name" displayName="Definition"></th>
                <th textfiltercolumn pSortableColumn="instance.referenceID" displayName="Reference ID"></th>
                <th boolfiltercolumn pSortableColumn="instance.isResolved" displayName="Resolved"></th>
            </ng-template>
            <ng-template #tableRows let-item>
                <td tagrow [value]="item.definition.name"></td>
                <td tagrow [value]="item.instance.referenceID"></td>
                <td boolrow [value]="item.isResolved"></td>
            </ng-template>
        </app-floattable>
    `,
    host: {
        class: 'card flex flex-col flex-grow'
    }
})
export class DQAInstances {
    allItems: CombinedAlert[] = [];
    allDefinitions: ListDQADefinitionModel[] = [];

    isLoading: boolean = true;
    localStorage = localStorage;

    canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.DQA_Instances_Read);
    canReadDefinitions: boolean = PermissionHelpers.HasPermission(PermissionsTable.DQA_Definitions_Read);

    constructor(
        private http: HttpClient
    ) {}

    async ngOnInit() {
        if (this.canReadDefinitions)
            await this.loadDefinitions();
        if (this.canRead)
            await this.loadItems();
    }

    async loadItems() {
        this.isLoading = true;
        var allInstances = await firstValueFrom(this.http.get<DQAInstanceModel[]>(APIURL + Endpoints.DQA.Instances.Get_InstanceOverview));
        var newItems : CombinedAlert[] = []
        allInstances.forEach(x => {
            var def = this.allDefinitions.find(y => y.id == x.definitionID)
            if (def != null)
                newItems.push({
                    instance: x,
                    definition: def
                } as CombinedAlert)
            else
                newItems.push({
                    instance: x,
                    definition: null
                } as CombinedAlert)
        })
        this.allItems = newItems;
        this.isLoading = false;
    }

    async loadDefinitions() {
        this.isLoading = true;
        this.allDefinitions = await firstValueFrom(this.http.get<ListDQADefinitionModel[]>(APIURL + Endpoints.DQA.Definitions.Get_AllDefinitions));
        this.isLoading = false;
    }
}

interface CombinedAlert {
    instance : DQAInstanceModel,
    definition: ListDQADefinitionModel | null
}
