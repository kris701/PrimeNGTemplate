import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DrawerModule } from 'primeng/drawer';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';
import { FloatHelp } from '../../../../common/components/floathelp';
import { Splitter } from 'primeng/splitter';
import { TreeModule, TreeNodeContextMenuSelectEvent, TreeNodeDropEvent, TreeNodeExpandEvent, TreeNodeSelectEvent } from 'primeng/tree';
import { ConfirmationService, MenuItem, MessageService, TreeDragDropService, TreeNode } from 'primeng/api';
import { PermissionHelpers } from '../../helpers/permissionHelpers';
import { PermissionsTable } from '../../../../../PermissionsTable';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { APIURL } from '../../../../../globals';
import { Endpoints } from '../../../../../Endpoints';
import { FloatTextInput } from '../../../../common/components/floattextinput';
import { UserInterface } from '../../interfaces/usersinterface';
import { FloatEditor } from '../../../../common/components/floateditor';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ConfirmDialogHelpers } from '../../helpers/confirmdialoghelpers';
import { ProgressSpinner } from 'primeng/progressspinner';
import { ListKnowledgebaseModel } from '../../../../models/CHB/listKnowledgebaseModel';
import { KnowledgebaseModel } from '../../../../models/CHB/knowledgebaseModel';
import { KnowledgebaseItemModel } from '../../../../models/CHB/knowledgebaseItemModel';
import { ListKnowledgebaseItemModel } from '../../../../models/CHB/listKnowledgebaseItemModel';

@Component({
    selector: 'app-chb-knowledgebases',
    imports: [
    FormsModule,
    CommonModule,
    TreeTableModule,
    DialogModule,
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    EditorModule,
    MultiSelectModule,
    SelectModule,
    DrawerModule,
    TableModule,
    TooltipModule,
    FileUploadModule,
    DrawerModule,
    BadgeModule,
    ConfirmDialogModule,
    FloatHelp,
    Splitter,
    TreeModule,
    FloatTextInput,
    FloatEditor,
    ContextMenuModule,
    ProgressSpinner
],
    providers: [TreeDragDropService],
    template: `
        <div class="card flex flex-col flex-grow">
            <app-floathelp header="CHB Knowledgebase">
                <p>Help text.</p>
            </app-floathelp>

            <div *ngIf="isLoading" class="flex flex-grow h-full items-center">
                <p-progressSpinner />
            </div>

            <p-splitter *ngIf="!isLoading" [panelSizes]="[25, 75]" [minSizes]="[10, 10]" class="h-full flex-grow" stateStorage="local" stateKey="helvdocs-view-panel" [style]="{ border: '0px' }">
                <ng-template #panel>
                    <div class="flex flex-col gap-2 m-2">
                        <p-button icon="pi pi-plus" label="Add Knowledgebase" [hidden]="!canWrite" (onClick)="showSectionDialog = true" fluid class="w-full" />
                        <p-tree
                            [value]="treeSections()"
                            [loading]="isLoading"
                            class="w-full"
                            loadingMode="icon"
                            [contextMenu]="cm"
                            [draggableNodes]="canWrite"
                            [droppableNodes]="canWrite"
                            draggableScope="self"
                            droppableScope="self"
                            selectionMode="single"
                            [selection]="selectedItem"
                            (onNodeExpand)="onTreeItemExpanded($event)"
                            (onNodeSelect)="onTreeItemSelect($event)"
                            (onNodeContextMenuSelect)="onTreeItemContextMenuSelect($event)"
                            (onNodeDrop)="onTreeItemDropped($event)"
                        />
                        <p-contextmenu #cm [model]="contextMenuItems" />
                    </div>
                </ng-template>
                <ng-template #panel>
                    <div class="flex flex-col gap-2 m-2 h-full" *ngIf="currentItem.id != ''">
                        <p class="text-center" style="font-size:2rem">{{ currentItem.name }}</p>
                        <app-floateditor [(value)]="currentItem.content" [disabled]="true" [hidetoolbar]="true" class="h-full mb-3" />
                    </div>
                    <div class="flex items-center justify-center h-full" *ngIf="currentItem.id == ''">
                        <p>Select an item to view...</p>
                    </div>
                </ng-template>
            </p-splitter>

            <p-dialog [(visible)]="showSectionDialog" header="Knowledgebase" [breakpoints]="{ '960px': '95vw' }" modal maximizable [draggable]="false">
                <div class="flex flex-col gap-2 pt-2 flex-grow h-full">
                    <div class="flex flex-row gap-2">
                        <app-floattextinput [(value)]="currentSection.name" [disabled]="!canWrite" label="Name" icon="pi-pencil" class="w-full" />
                    </div>
                    <app-floateditor [(value)]="currentSection.description" [disabled]="!canWrite" *ngIf="showSectionDialog" />
                </div>
                <ng-template #footer>
                    <p-button label="Save" icon="pi pi-save" raised rounded (click)="saveSection()" [hidden]="!canWrite" />
                </ng-template>
            </p-dialog>

            <p-dialog [(visible)]="showItemDialog" header="Item" [breakpoints]="{ '960px': '95vw' }" [style]="{ height: '50vh', width: '50vw' }" modal maximizable [draggable]="false">
                <div class="flex flex-col gap-2 pt-2 flex-grow h-full">
                    <div class="flex flex-row gap-2">
                        <app-floattextinput [(value)]="currentItem.name" [disabled]="!canWrite" label="Name" icon="pi-pencil" class="w-full" />
                    </div>
                    <app-floateditor [(value)]="currentItem.content" [disabled]="!canWrite" *ngIf="showItemDialog" />
                </div>
                <ng-template #footer>
                    <p-button label="Save" icon="pi pi-save" raised rounded (click)="saveItem(currentParent)" [hidden]="!canWrite" />
                </ng-template>
            </p-dialog>
        </div>
    `,
    host: {
        class: 'flex flex-col flex-grow'
    },
    styles: `
        ::ng-deep.p-dialog-content {
            height: 100%;
        }
    `
})
export class CHBKnowledgebases {
    isLoading: boolean = true;
    treeSections = signal<TreeNode<CombinedTreeItem>[]>([]);
    contextMenuItems: MenuItem[] = [];
    selectedItem: TreeNode<CombinedTreeItem> | null = null;

    showSectionDialog: boolean = false;
    currentSection: KnowledgebaseModel = { id: '', name: '', description: '' } as KnowledgebaseModel;

    showItemDialog: boolean = false;
    currentItem: KnowledgebaseItemModel = { id: '', name: '', content: '', knowledgebaseID: '' } as KnowledgebaseItemModel;

    currentParent: CombinedTreeItem | null = null;

    canRead: boolean = PermissionHelpers.HasPermission(PermissionsTable.CHB_Knowledgebases_Read);
    canWrite: boolean = PermissionHelpers.HasPermission(PermissionsTable.CHB_Knowledgebases_Write);

    constructor(
        private http: HttpClient,
        private service: MessageService,
        private confirmationService: ConfirmationService,
        public userInterface: UserInterface
    ) {}

    async ngOnInit() {
        if (this.canRead) await this.loadSections();
    }

    async loadSections() {
        this.isLoading = true;
        var newTreeItems: TreeNode<CombinedTreeItem>[] = [];
        var allSections = await firstValueFrom(this.http.get<ListKnowledgebaseModel[]>(APIURL + Endpoints.CHB.Knowledgebases.Get_AllKnowledgebases));
        allSections.forEach((x) => {
            newTreeItems.push({
                label: x.name,
                leaf: false,
                draggable: false,
                data: {
                    type: TreeItemTypes.Section,
                    id: x.id,
                    sectionID: x.id
                } as CombinedTreeItem
            } as TreeNode<CombinedTreeItem>);
        });
        newTreeItems = newTreeItems.sort((a, b) => a.label!.localeCompare(b.label!));
        this.treeSections.set(newTreeItems);
        this.isLoading = false;
    }

    async saveSection() {
        if (this.currentSection.id == '') await firstValueFrom(this.http.post(APIURL + Endpoints.CHB.Knowledgebases.Post_AddKnowledgebase, this.currentSection));
        else await firstValueFrom(this.http.patch(APIURL + Endpoints.CHB.Knowledgebases.Patch_UpdateKnowledgebase, this.currentSection));
        this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Knowledgebase saved!' });
        this.showSectionDialog = false;
        this.currentSection = { id: '', name: '', description: '' } as KnowledgebaseModel;
        await this.loadSections();
    }

    async onTreeItemExpanded(event: TreeNodeExpandEvent) {
        if (!event.node.children && event.node.data.type == TreeItemTypes.Section) {
            await this.loadSectionItems(event.node.data.id);
        }
    }

    async saveItem(parent: CombinedTreeItem | null) {
        if (!parent) return;

        if (parent.type == TreeItemTypes.Section)
            this.currentItem.knowledgebaseID = parent.id;

        if (this.currentItem.id == '') await firstValueFrom(this.http.post(APIURL + Endpoints.CHB.Knowledgebases.Items.Post_AddItem, this.currentItem));
        else {
            await firstValueFrom(this.http.patch(APIURL + Endpoints.CHB.Knowledgebases.Items.Patch_UpdateItem, this.currentItem));
        }
        this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Item saved!' });

        this.showItemDialog = false;
        this.currentItem = { id: '', name: '', content: '', knowledgebaseID: '' } as KnowledgebaseItemModel;
        await this.loadSectionItems(parent.sectionID);
    }

    async loadSectionItems(sectionID: string) {
        const _nodes = this.treeSections();
        var section = _nodes.find((x) => x.data?.id == sectionID);
        if (!section || !section.data) return;
        section.loading = true;

        section.children = [];
        var allItems = await firstValueFrom(this.http.get<ListKnowledgebaseItemModel[]>(APIURL + Endpoints.CHB.Knowledgebases.Items.Get_AllItems + '?ID=' + section.data.id));
        var newChildren: TreeNode<CombinedTreeItem>[] = [];
        allItems.forEach((x) => {
            newChildren.push({
                label: x.name,
                draggable: true,
                droppable: true,
                data: {
                    type: TreeItemTypes.Item,
                    sectionID: sectionID,
                    id: x.id
                } as CombinedTreeItem
            });
        });
        this.sortAll(newChildren);

        section.children = newChildren;

        var index = _nodes.indexOf(section)
        if (index != -1)
            _nodes[index] = { ...section, loading: false };
        this.treeSections.set([..._nodes]);
    }

    sortAll(nodes: TreeNode<CombinedTreeItem>[]) {
        nodes = nodes.sort((a, b) => a.label!.localeCompare(b.label!));
        nodes.forEach((x) => {
            if (x.children) this.sortAll(x.children);
        });
    }

    async onTreeItemSelect(event: TreeNodeSelectEvent) {
        if (event.node.data.type == TreeItemTypes.Item) {
            await this.SetSelectedItem(event.node.data.id);
        } else if (event.node.data.type == TreeItemTypes.Section) {
            this.currentItem = { id: '', name: 'New Item', content: '', knowledgebaseID: '' } as KnowledgebaseItemModel;
        }
    }

    async SetSelectedItem(id: string) {
        this.currentItem = await firstValueFrom(this.http.get<KnowledgebaseItemModel>(APIURL + Endpoints.CHB.Knowledgebases.Items.Get_Item + '?ID=' + id));
    }

    async onTreeItemContextMenuSelect(event: TreeNodeContextMenuSelectEvent) {
        this.selectedItem = event.node;
        if (event.node.data.type == TreeItemTypes.Section) {
            this.currentItem = { id: '', name: 'New Item', content: '', knowledgebaseID: '' } as KnowledgebaseItemModel;
            this.currentParent = event.node.data;
            this.contextMenuItems = [
                {
                    label: 'Edit Knowledgebase',
                    icon: 'pi pi-pen-to-square',
                    visible: this.canWrite,
                    command: async () => {
                        this.currentSection = await firstValueFrom(this.http.get<KnowledgebaseModel>(APIURL + Endpoints.CHB.Knowledgebases.Get_Knowledgebase + '?ID=' + event.node.data.id));
                        this.showSectionDialog = true;
                    }
                },
                {
                    label: 'Add Item',
                    icon: 'pi pi-plus',
                    visible: this.canWrite,
                    command: async () => {
                        this.currentItem = { id: '', name: 'New Item', content: '', knowledgebaseID: '' } as KnowledgebaseItemModel;
                        this.showItemDialog = true;
                    }
                },
                {
                    label: 'Delete Knowledgebase',
                    icon: 'pi pi-times',
                    visible: this.canWrite,
                    command: async () => {
                        await this.confirmationService.confirm({
                            ...ConfirmDialogHelpers.DeleteContent(),
                            message: 'Are you sure you want to delete this knowledgebase and all its items?',
                            accept: async () => {
                                await firstValueFrom(this.http.delete(APIURL + Endpoints.CHB.Knowledgebases.Delete_Knowledgebase + '?ID=' + event.node.data.id));
                                this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Knowlegebase deleted!' });
                                await this.loadSections();
                            }
                        });
                    }
                }
            ];
        } else if (event.node.data.type == TreeItemTypes.Item) {
            await this.SetSelectedItem(event.node.data.id);
            this.currentParent = event.node.data;
            this.contextMenuItems = [
                {
                    label: 'Edit Item',
                    icon: 'pi pi-pen-to-square',
                    visible: this.canWrite,
                    command: async () => {
                        await this.SetSelectedItem(event.node.data.id);
                        this.showItemDialog = true;
                    }
                },
                {
                    label: 'Delete Item',
                    icon: 'pi pi-times',
                    visible: this.canWrite,
                    command: async () => {
                        await this.confirmationService.confirm({
                            ...ConfirmDialogHelpers.DeleteContent(),
                            message: 'Are you sure you want to delete this item?',
                            accept: async () => {
                                await firstValueFrom(this.http.delete(APIURL + Endpoints.CHB.Knowledgebases.Items.Delete_Item + '?ID=' + event.node.data.id));
                                this.service.add({ severity: 'info', summary: 'Info Message', detail: 'Item deleted!' });
                                this.currentItem = { id: '', name: 'New Item', content: '', knowledgebaseID: '' } as KnowledgebaseItemModel;
                                await this.loadSectionItems(event.node.data.sectionID);
                            }
                        });
                    }
                }
            ];
        }
    }

    async onTreeItemDropped(event: TreeNodeDropEvent) {
        if (!event.dragNode || !event.dropNode) return;
        if (event.dropNode.data.type == TreeItemTypes.Section) {
            var dragItem = await firstValueFrom(this.http.get<KnowledgebaseItemModel>(APIURL + Endpoints.CHB.Knowledgebases.Items.Get_Item + '?ID=' + event.dragNode.data.id));
            dragItem.knowledgebaseID = event.dropNode.data.id;
            await firstValueFrom(this.http.patch(APIURL + Endpoints.CHB.Knowledgebases.Items.Patch_UpdateItem, dragItem));
            await this.loadSectionItems(dragItem.knowledgebaseID);
        }
    }
}

interface CombinedTreeItem {
    type: TreeItemTypes;
    id: string;

    sectionID: string;
}

enum TreeItemTypes {
    Section,
    Item
}
