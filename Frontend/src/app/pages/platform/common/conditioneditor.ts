import { StringConditionalTypes } from './../../../models/DAI/stringConditionalNode';
import { CommonModule } from "@angular/common";
import { Component, forwardRef, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MenuItem } from "primeng/api";
import { Button } from "primeng/button";
import { Fieldset } from "primeng/fieldset";
import { Evaluatable } from "../../../models/DAI/evaluatable";
import { ListCollectorModel } from "../../../models/DAI/listCollectorModel";
import { EnumIndexer } from "../../../models/EnumIndexer";
import { OrNode } from "../../../models/DAI/orNode";
import { AndNode } from "../../../models/DAI/andNode";
import { CollectorValueNode } from "../../../models/DAI/collectorValueNode";
import { EvaluableTypes } from "../../../models/DAI/evaluableTypes";
import { FalseNode } from "../../../models/DAI/falseNode";
import { StaticValueNode } from "../../../models/DAI/staticValueNode";
import { TrueNode } from "../../../models/DAI/trueNode";
import { Valuable } from "../../../models/DAI/valuable";
import { ValuableTypes } from "../../../models/DAI/valuableTypes";
import { ReservedValueNode } from "../../../models/DAI/reservedValueNode";
import { FloatSelect } from "../../../common/components/floatselect";
import { FloatTextInput } from "../../../common/components/floattextinput";
import { ReservedValueTypes } from "../../../models/DAI/reservedValueTypes";
import { StringConditionalNode } from "../../../models/DAI/stringConditionalNode";
import { IntConditionalNode, IntConditionalTypes } from "../../../models/DAI/intConditionalNode";
import { DatetimeConditionalNode, DatetimeConditionalTypes } from "../../../models/DAI/datetimeConditionalNode";
import { TieredMenuModule } from 'primeng/tieredmenu';
import { Divider } from "primeng/divider";

@Component({
    selector: 'app-conditioneditor-evaluablenode',
    imports: [FormsModule, CommonModule, forwardRef(() => ConditionEditorValuableNode), FloatSelect, Button, TieredMenuModule, Divider],
    template: `
        <div class="flex flex-row">
            <p-button (click)="deleteSelf()" size="small" [style]="{ height: '100%' }" severity="danger" icon="pi pi-times" *ngIf="canDeleteSelf && nodeValue != null" class="evalNoRightRadius" />
            @if (isStringConditionalEventNode(nodeValue)){
                <div class="conditionContainer">
                    <div class="conditionContainerHeader">
                        <span class="pl-2">If (string)</span>
                    </div>
                    <div class="conditionContainerContent flex flex-row items-center">
                        <app-conditioneditor-valuablenode class="w-full" [(nodeValue)]="nodeValue.left" [dataCollectors]="dataCollectors" />
                        <p-button severity="danger" icon="pi pi-times" *ngIf="nodeValue.left" (click)="nodeValue.left = null; emitUpdate()" class="evalNoLeftRadius" />
                        <p-divider layout="vertical"/>
                        <app-floatselect [(selected)]="nodeValue.condition" [options]="stringConditionTypes" label="Condition" optionLabel="label" optionValue="value" />
                        <p-divider layout="vertical"/>
                        <app-conditioneditor-valuablenode class="w-full" [(nodeValue)]="nodeValue.right" [dataCollectors]="dataCollectors" />
                        <p-button severity="danger" icon="pi pi-times" *ngIf="nodeValue.right" (click)="nodeValue.right = null; emitUpdate()" class="evalNoLeftRadius"/>
                    </div>
                </div>
            }
            @if (isIntConditionalEventNode(nodeValue)){
                <div class="conditionContainer">
                    <div class="conditionContainerHeader">
                        <span class="pl-2">If (int)</span>
                    </div>
                    <div class="conditionContainerContent flex flex-row items-center">
                        <app-conditioneditor-valuablenode class="w-full" [(nodeValue)]="nodeValue.left" [dataCollectors]="dataCollectors" />
                        <p-button severity="danger" icon="pi pi-times" *ngIf="nodeValue.left" (click)="nodeValue.left = null; emitUpdate()" class="evalNoLeftRadius" />
                        <p-divider layout="vertical"/>
                        <app-floatselect [(selected)]="nodeValue.condition" [options]="intConditionTypes" label="Condition" optionLabel="label" optionValue="value" />
                        <p-divider layout="vertical"/>
                        <app-conditioneditor-valuablenode class="w-full" [(nodeValue)]="nodeValue.right" [dataCollectors]="dataCollectors" />
                        <p-button severity="danger" icon="pi pi-times" *ngIf="nodeValue.right" (click)="nodeValue.right = null; emitUpdate()" class="evalNoLeftRadius" />
                    </div>
                </div>
            }
            @if (isDatetimeConditionalEventNode(nodeValue)){
                <div class="conditionContainer">
                    <div class="conditionContainerHeader">
                        <span class="pl-2">If (Datetime)</span>
                    </div>
                    <div class="conditionContainerContent flex flex-row items-center">
                        <app-conditioneditor-valuablenode class="w-full" [(nodeValue)]="nodeValue.left" [dataCollectors]="dataCollectors" />
                        <p-button severity="danger" icon="pi pi-times" *ngIf="nodeValue.left" (click)="nodeValue.left = null; emitUpdate()"  class="evalNoLeftRadius"/>
                        <p-divider layout="vertical"/>
                        <app-floatselect [(selected)]="nodeValue.condition" [options]="datetimeConditionTypes" label="Condition" optionLabel="label" optionValue="value" />
                        <p-divider layout="vertical"/>
                        <app-conditioneditor-valuablenode class="w-full" [(nodeValue)]="nodeValue.right" [dataCollectors]="dataCollectors" />
                        <p-button severity="danger" icon="pi pi-times" *ngIf="nodeValue.right" (click)="nodeValue.right = null; emitUpdate()" class="evalNoLeftRadius"  />
                    </div>
                </div>
            }
            @if (isAndNode(nodeValue)){
                <div class="conditionContainer">
                    <div class="conditionContainerHeader">
                        <p-button (click)="targetChildrenNode = nodeValue; andmenu.toggle($event)" size="small" text icon="pi pi-plus" />
                        <p-tieredmenu #andmenu [model]="addAndMenuItems" [popup]="true" appendTo="body" />
                        <span class="pl-2">And</span>
                    </div>

                    <div class="conditionContainerContent flex flex-col gap-2">
                        @if (nodeValue.children.length == 0) {
                            <p class="text-surface-500">No conditions added!</p>
                        }
                        @for (node of nodeValue.children; track node; let idx = $index) {
                            <div class="flex flex-row">
                                <p-button severity="danger" icon="pi pi-times" size="small" class="mt-6" [style]="{ height: '100%' }" (click)="removeIndexFromChildrenNode(nodeValue, idx); emitUpdate()" class="evalNoRightRadius"/>
                                <app-conditioneditor-evaluablenode class="w-full" [(nodeValue)]="nodeValue.children[idx]" [dataCollectors]="dataCollectors" [canDeleteSelf]="false" />
                            </div>
                        }
                    </div>
                </div>
            }
            @if(isOrNode(nodeValue)){
                <div class="conditionContainer">
                    <div class="conditionContainerHeader">
                        <p-button (click)="targetChildrenNode = nodeValue; andmenu.toggle($event)" size="small" text icon="pi pi-plus" />
                        <p-tieredmenu #andmenu [model]="addAndMenuItems" [popup]="true" appendTo="body" />
                        <span class="pl-2">Or</span>
                    </div>

                    <div class="conditionContainerContent flex flex-col gap-2">
                        @if (nodeValue.children.length == 0) {
                            <p class="text-surface-500">No conditions added!</p>
                        }
                        @for (node of nodeValue.children; track node; let idx = $index) {
                            <div class="flex flex-row">
                                <p-button severity="danger" icon="pi pi-times" size="small" class="mt-6" [style]="{ height: '100%' }" (click)="removeIndexFromChildrenNode(nodeValue, idx); emitUpdate()" class="evalNoRightRadius"/>
                                <app-conditioneditor-evaluablenode class="w-full" [(nodeValue)]="nodeValue.children[idx]" [dataCollectors]="dataCollectors" [canDeleteSelf]="false" />
                            </div>
                        }
                    </div>
                </div>
            }
            @if(isTrueNode(nodeValue)){
                <div class="conditionContainer">
                    <div class="conditionContainerHeader">
                        <span class="pl-2">True</span>
                    </div>
                    <div class="conditionContainerContent flex flex-col gap-2">
                        <p class="text-surface-500">Always evaluates to true</p>
                    </div>
                </div>
            }
            @if(isFalseNode(nodeValue)){
                <div class="conditionContainer">
                    <div class="conditionContainerHeader">
                        <span class="pl-2">False</span>
                    </div>
                    <div class="conditionContainerContent flex flex-col gap-2">
                        <p class="text-surface-500">Always evaluates to false</p>
                    </div>
                </div>
            }
            <div class="justify-self-center border w-full" *ngIf="nodeValue == null">
                <p-tieredmenu #menu [model]="addMenuItems" [popup]="true" appendTo="body" />
                <p-button (click)="menu.toggle($event)" icon="pi pi-plus" label="Add Root Condition" fluid />
            </div>
        </div>
    `,
    styles: `
        ::ng-deep.evalNoLeftRadius button {
            height:100%;
            border-top-left-radius:0px !important;
            border-bottom-left-radius:0px !important;
        }
        ::ng-deep.evalNoRightRadius button {
            height:100%;
            border-top-right-radius:0px !important;
            border-bottom-right-radius:0px !important;
        }

        .conditionContainer {
            width:100%;
            border: 1px solid var(--p-fieldset-border-color);
            border-top-right-radius: var(--p-button-border-radius);
            border-bottom-right-radius:var(--p-button-border-radius);
        }
        .conditionContainerHeader {
            padding:2px;
            margin-bottom:5px;
            border-top-right-radius: var(--p-button-border-radius);
            background: var(--p-inputtext-background);
        }
        .conditionContainerContent {
            padding:5px;
        }
        `
})
export class ConditionEditorEvaluableNode implements OnChanges {
    @Input() nodeValue: Evaluatable | null = null;
    @Output() nodeValueChange = new EventEmitter<Evaluatable | null>();

    @Input() dataCollectors: ListCollectorModel[] = [];

    @Input() canDeleteSelf: boolean = true;

    conditionCount : number = 0;

    stringConditionTypes: EnumIndexer[];
    intConditionTypes: EnumIndexer[];
    datetimeConditionTypes: EnumIndexer[];

    addMenuItems: MenuItem[] = [
        {
            label: 'If',
            icon: 'pi pi-chart-line',
            items: [
                {
                    label: 'If (string)',
                    icon: 'pi pi-chart-line',
                    command: () => {
                        this.nodeValue = this.addNewStringConditionalNode();
                        this.emitUpdate();
                    }
                },
                {
                    label: 'If (int)',
                    icon: 'pi pi-chart-line',
                    command: () => {
                        this.nodeValue = this.addNewIntConditionalNode();
                        this.emitUpdate();
                    }
                },
                {
                    label: 'If (datetime)',
                    icon: 'pi pi-chart-line',
                    command: () => {
                        this.nodeValue = this.addNewDatetimeConditionalNode();
                        this.emitUpdate();
                    }
                }
            ]
        },
        {
            label: 'And',
            icon: 'pi pi-plus',
            command: () => {
                this.nodeValue = this.addNewAndNode();
                this.emitUpdate();
            }
        },
        {
            label: 'Or',
            icon: 'pi pi-plus',
            command: () => {
                this.nodeValue = this.addNewOrNode();
                this.emitUpdate();
            }
        },
        {
            label: 'True',
            icon: 'pi pi-circle-fill',
            command: () => {
                this.nodeValue = this.addNewTrueNode();
                this.emitUpdate();
            }
        },
        {
            label: 'False',
            icon: 'pi pi-circle',
            command: () => {
                this.nodeValue = this.addNewFalseNode();
                this.emitUpdate();
            }
        }
    ];

    targetChildrenNode: AndNode | OrNode | undefined;
    addAndMenuItems: MenuItem[] = [
        {
            label: 'If',
            icon: 'pi pi-chart-line',
            items: [
                {
                    label: 'If (string)',
                    icon: 'pi pi-chart-line',
                    command: () => {
                        if (!this.targetChildrenNode) return;
                        this.targetChildrenNode.children.push(this.addNewStringConditionalNode());
                        this.emitUpdate();
                    }
                },
                {
                    label: 'If (int)',
                    icon: 'pi pi-chart-line',
                    command: () => {
                        if (!this.targetChildrenNode) return;
                        this.targetChildrenNode.children.push(this.addNewIntConditionalNode());
                        this.emitUpdate();
                    }
                },
                {
                    label: 'If (datetime)',
                    icon: 'pi pi-chart-line',
                    command: () => {
                        if (!this.targetChildrenNode) return;
                        this.targetChildrenNode.children.push(this.addNewDatetimeConditionalNode());
                        this.emitUpdate();
                    }
                },
            ]
        },
        {
            label: 'And',
            icon: 'pi pi-plus',
            command: () => {
                if (!this.targetChildrenNode) return;
                this.targetChildrenNode.children.push(this.addNewAndNode());
                this.emitUpdate();
            }
        },
        {
            label: 'Or',
            icon: 'pi pi-plus',
            command: () => {
                if (!this.targetChildrenNode) return;
                this.targetChildrenNode.children.push(this.addNewOrNode());
                this.emitUpdate();
            }
        },
        {
            label: 'True',
            icon: 'pi pi-circle-fill',
            command: () => {
                if (!this.targetChildrenNode) return;
                this.targetChildrenNode.children.push(this.addNewTrueNode());
                this.emitUpdate();
            }
        },
        {
            label: 'False',
            icon: 'pi pi-circle',
            command: () => {
                if (!this.targetChildrenNode) return;
                this.targetChildrenNode.children.push(this.addNewFalseNode());
                this.emitUpdate();
            }
        }
    ];

    constructor() {
        this.stringConditionTypes = [
            new EnumIndexer(StringConditionalTypes.Equals, "=="),
            new EnumIndexer(StringConditionalTypes.NotEquals, "!="),
            new EnumIndexer(StringConditionalTypes.Contains, "Contains"),
        ];
        this.intConditionTypes = [
            new EnumIndexer(IntConditionalTypes.Equals, "=="),
            new EnumIndexer(IntConditionalTypes.NotEquals, "!="),
            new EnumIndexer(IntConditionalTypes.LessThan, "<"),
            new EnumIndexer(IntConditionalTypes.LessThanOrEqual, "<="),
            new EnumIndexer(IntConditionalTypes.GreaterThan, ">"),
            new EnumIndexer(IntConditionalTypes.GreaterThanOrEqual, ">="),
        ];
        this.datetimeConditionTypes = [
            new EnumIndexer(DatetimeConditionalTypes.Equals, "=="),
            new EnumIndexer(DatetimeConditionalTypes.NotEquals, "!="),
            new EnumIndexer(DatetimeConditionalTypes.LessThan, "<"),
            new EnumIndexer(DatetimeConditionalTypes.LessThanOrEqual, "<="),
            new EnumIndexer(DatetimeConditionalTypes.GreaterThan, ">"),
            new EnumIndexer(DatetimeConditionalTypes.GreaterThanOrEqual, ">="),
        ];
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['nodeValue'] && changes['nodeValue'].previousValue != changes['nodeValue'].currentValue)
            this.conditionCount = this.getConditionCount(this.nodeValue);
    }

    isStringConditionalEventNode(v: any): v is StringConditionalNode {
        return this.isOfType(v, EvaluableTypes.StringConditional);
    }
    isIntConditionalEventNode(v: any): v is IntConditionalNode {
        return this.isOfType(v, EvaluableTypes.IntConditional);
    }
    isDatetimeConditionalEventNode(v: any): v is DatetimeConditionalNode {
        return this.isOfType(v, EvaluableTypes.DatetimeConditional);
    }
    isAndNode(v: any): v is AndNode {
        return this.isOfType(v, EvaluableTypes.And);
    }
    isOrNode(v: any): v is OrNode {
        return this.isOfType(v, EvaluableTypes.Or);
    }
    isTrueNode(v: any): v is TrueNode {
        return this.isOfType(v, EvaluableTypes.True);
    }
    isFalseNode(v: any): v is FalseNode {
        return this.isOfType(v, EvaluableTypes.False);
    }

    isOfType(v: any, type: EvaluableTypes) {
        if (v == undefined || v == null) return false;
        return v.$type == type;
    }

    addNewStringConditionalNode(): StringConditionalNode {
        return {
            $type: EvaluableTypes.StringConditional,
            left: null,
            condition: StringConditionalTypes.Equals,
            right: null
        } as StringConditionalNode;
    }

    addNewIntConditionalNode(): IntConditionalNode {
        return {
            $type: EvaluableTypes.IntConditional,
            left: null,
            condition: IntConditionalTypes.Equals,
            right: null
        } as IntConditionalNode;
    }

    addNewDatetimeConditionalNode(): DatetimeConditionalNode {
        return {
            $type: EvaluableTypes.DatetimeConditional,
            left: null,
            condition: DatetimeConditionalTypes.Equals,
            right: null
        } as DatetimeConditionalNode;
    }

    addNewAndNode(): AndNode {
        return {
            $type: EvaluableTypes.And,
            children: []
        } as AndNode;
    }

    addNewOrNode(): OrNode {
        return {
            $type: EvaluableTypes.Or,
            children: []
        } as OrNode;
    }

    addNewTrueNode(): TrueNode {
        return {
            $type: EvaluableTypes.True
        } as TrueNode;
    }

    addNewFalseNode(): FalseNode {
        return {
            $type: EvaluableTypes.False
        } as FalseNode;
    }

    removeIndexFromChildrenNode(node: AndNode | OrNode, index: number) {
        if (index != -1) {
            node.children.splice(index, 1);
            this.emitUpdate();
        }
    }

    emitUpdate() {
        this.nodeValueChange.emit(this.nodeValue);
        this.conditionCount = this.getConditionCount(this.nodeValue);
    }

    getConditionCount(node : Evaluatable | null) : number{
        if (this.nodeValue == null)
            return 0;

        var count = 1;
        if (this.isAndNode(node))
            node.children.forEach(x => count += this.getConditionCount(node.children))
        if (this.isOrNode(node))
            node.children.forEach(x => count += this.getConditionCount(node.children))

        return count;
    }

    deleteSelf(){
        this.nodeValue = null;
        this.nodeValueChange.emit(this.nodeValue);
    }
}

@Component({
    selector: 'app-conditioneditor-valuablenode',
    imports: [FormsModule, CommonModule, FloatTextInput, Button, FloatSelect, TieredMenuModule],
    template: `
        @if(isStaticNode(nodeValue)){
            <app-floattextinput [(value)]="nodeValue.value" label="Static" class="noRightRadius"/>
        }
        @if(isCollectorNode(nodeValue)){
            <app-floatselect [options]="dataCollectors" [(selected)]="nodeValue.collectorID" optionLabel="name" optionValue="id" label="Data Collector" class="noRightRadius"/>
        }
        @if(isReservedValueNode(nodeValue)){
            <app-floatselect [options]="reservedNodeIDs" [(selected)]="nodeValue.id" optionLabel="name" optionValue="id"label="Reserved Value" class="noRightRadius"/>
        }
        <div class="justify-self-center w-full" *ngIf="nodeValue == null">
            <p-tieredmenu #menu [model]="addMenuItems" [popup]="true" appendTo="body" />
            <p-button (click)="menu.toggle($event)" severity="warn" fluid label="Add" icon="pi pi-plus" />
        </div>
    `,
    styles: `
        ::ng-deep.noRightRadius input {
            border-top-right-radius:0px !important;
            border-bottom-right-radius:0px !important;
        }
        ::ng-deep.noRightRadius p-select {
            border-top-right-radius:0px !important;
            border-bottom-right-radius:0px !important;
        }
    `
})
export class ConditionEditorValuableNode {
    @Input() nodeValue: Valuable | null = null;
    @Output() nodeValueChange = new EventEmitter<Valuable | null>();

    @Input() dataCollectors: ListCollectorModel[] = [];

    reservedNodeIDs : ReservedItem[] = [
        { id:ReservedValueTypes.ReferenceID, name:'Reference ID' } as ReservedItem,
        { id:ReservedValueTypes.Null, name:'Null' } as ReservedItem,
    ]

    addMenuItems: MenuItem[] = [
        {
            label: 'Static',
            icon: 'pi pi-code',
            command: () => this.addNewStaticNode()
        },
        {
            label: 'Collector Data',
            icon: 'pi pi-code',
            command: () => this.addCollectorValueNode()
        },
        {
            label: 'Reserved',
            icon: 'pi pi-code',
            command: () => this.addReservedValueNode()
        }
    ];

    isStaticNode(v: any): v is StaticValueNode {
        return this.isOfType(v, ValuableTypes.Static);
    }
    isCollectorNode(v: any): v is CollectorValueNode {
        return this.isOfType(v, ValuableTypes.Collector);
    }
    isReservedValueNode(v: any): v is ReservedValueNode {
        return this.isOfType(v, ValuableTypes.Reserved);
    }
    isOfType(v: any, type: ValuableTypes) {
        if (v == undefined || v == null) return false;
        return v.$type == type;
    }

    addNewStaticNode() {
        this.nodeValue = {
            $type: ValuableTypes.Static,
            value: 'Value'
        } as StaticValueNode;
        this.emitUpdate();
    }

    addCollectorValueNode() {
        var targetId = '';
        if (this.dataCollectors.length > 0)
            targetId = this.dataCollectors[0].id
        this.nodeValue = {
            $type: ValuableTypes.Collector,
            collectorID: targetId
        } as CollectorValueNode;

        this.emitUpdate();
    }

    addReservedValueNode() {
        this.nodeValue = {
            $type: ValuableTypes.Reserved,
            id: this.reservedNodeIDs[0].id,
        } as ReservedValueNode;

        this.emitUpdate();
    }

    emitUpdate() {
        this.nodeValueChange.emit(this.nodeValue);
    }
}

interface ReservedItem {
    name: string;
    id: ReservedValueTypes
}
