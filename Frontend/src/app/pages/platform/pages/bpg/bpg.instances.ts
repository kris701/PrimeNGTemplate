import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
import { Endpoints } from '../../../../../Endpoints';
import { APIURL } from '../../../../../globals';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { firstValueFrom } from 'rxjs';
import { SplitterModule } from 'primeng/splitter';
import { TextareaModule } from 'primeng/textarea';
import { DividerModule } from 'primeng/divider';
import { TableTextFilterColumn } from '../../../../common/components/tables/filtercolumns';
import { TableTagRow } from '../../../../common/components/tables/filterrows';
import { FloatHelp } from "../../../../common/components/floathelp";
import { FloatTable } from "../../../../common/components/floattable";
import { BPGInstanceModel } from '../../../../models/BPG/bPGInstanceModel';
import { ListBPGDefinitionModel } from '../../../../models/BPG/listBPGDefinitionModel';

@Component({
    selector: 'app-bpg-instances',
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
    SplitterModule,
    TextareaModule,
    DividerModule,
    FloatHelp,
    FloatTable
],
    template: `
        <app-floathelp header="BPG Instances">
            <p>Help text.</p>
        </app-floathelp>

        <app-floattable [values]="allItems" stateKey="bpg-instances-session" [isLoading]="isLoading" [showAdd]="false" [rowSelectable]="false" (onLoadItems)="loadItems()">
            <ng-template #tableHeader>
                <th textfiltercolumn pSortableColumn="definition.name" displayName="Definition"></th>
                <th textfiltercolumn pSortableColumn="instance.referenceID" displayName="Reference ID"></th>
                <th textfiltercolumn pSortableColumn="instance.state" displayName="State"></th>
            </ng-template>
            <ng-template #tableRows let-item>
                <td tagrow [value]="item.definition.name"></td>
                <td tagrow [value]="item.instance.referenceID"></td>
                <td tagrow [value]="stateNames![item.instance.state]" [severity]="item.instance.state ? stateSeverityMap![item.instance.state] : 'secondary'"></td>
            </ng-template>
        </app-floattable>
    `,
    host: {
        class: 'card flex flex-col flex-grow'
    }
})
export class BPGInstances {
    allItems: CombinedBPG[] = [];
    allDefinitions: ListBPGDefinitionModel[] = [];

    isLoading: boolean = true;
    localStorage = localStorage;

    stateSeverityMap: { [value: string]: 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | undefined } | undefined = {
        '0': 'secondary',
        '1': 'success',
        '2': 'warn',
        '3': 'info'
    };
    stateNames: { [value: string]: string } | undefined = {
        '0': 'None',
        '1': 'Complete',
        '2': 'Pending',
        '3': 'In Progress'
    };

    canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.BPG_Instances_Read);
    canReadDefinitions: boolean = PermissionHelpers.HasPermission(PermissionsTable.BPG_Definitions_Read);

    route = inject(ActivatedRoute);
    loadedQueryOnce: boolean = false;
    constructor(
        private http: HttpClient,
        private service: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    async ngOnInit() {
        if (this.canReadDefinitions)
            await this.loadDefinitions();
        if (this.canRead)
            await this.loadItems();
    }

    async loadItems() {
        this.isLoading = true;
        var allInstances = await firstValueFrom(this.http.get<BPGInstanceModel[]>(APIURL + Endpoints.BPG.Instances.Get_InstanceOverview));
        var newItems : CombinedBPG[] = []
        allInstances.forEach(x => {
            var def = this.allDefinitions.find(y => y.id == x.definitionID)
            if (def != null)
                newItems.push({
                    instance: x,
                    definition: def
                } as CombinedBPG)
            else
                newItems.push({
                    instance: x,
                    definition: null
                } as CombinedBPG)
        })
        this.allItems = newItems;
        this.isLoading = false;
    }

    async loadDefinitions() {
        this.isLoading = true;
        this.allDefinitions = await firstValueFrom(this.http.get<ListBPGDefinitionModel[]>(APIURL + Endpoints.BPG.Definitions.Get_AllDefinitions));
        this.isLoading = false;
    }
}

interface CombinedBPG {
    instance : BPGInstanceModel,
    definition: ListBPGDefinitionModel | null
}
