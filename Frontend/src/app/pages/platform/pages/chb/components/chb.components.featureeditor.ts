import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MenuItem } from "primeng/api";
import { Button } from "primeng/button";
import { MenuModule } from "primeng/menu";
import { ModelFeatureTypes } from "../../../../../models/CHB/modelFeatureTypes";
import { ModelIDFeature } from "../../../../../models/CHB/modelIDFeature";
import { ModelFeature } from "../../../../../models/CHB/modelFeature";
import { EnumIndexer } from "../../../../../models/EnumIndexer";
import { FloatTextInput } from "../../../../../common/components/floattextinput";
import { FloatToggleSwitch } from "../../../../../common/components/floattoggleswitch";
import { KnowledgebaseFeature } from "../../../../../models/CHB/knowledgebaseFeature";
import { SystemPromptFeature } from "../../../../../models/CHB/systemPromptFeature";
import { ThinkingFeature } from "../../../../../models/CHB/thinkingFeature";
import { ToolFeature } from "../../../../../models/CHB/toolFeature";
import { FloatMultiSelect } from "../../../../../common/components/floatmultiselect";
import { TextareaModule } from 'primeng/textarea';
import { ListKnowledgebaseModel } from "../../../../../models/CHB/listKnowledgebaseModel";

@Component({
    selector: 'app-chb-components-featureeditor',
    imports: [FormsModule, CommonModule, Button, MenuModule, FloatTextInput, FloatToggleSwitch, FloatMultiSelect, TextareaModule],
    template: `
    <div class="flex flex-col gap-2">
        <p-menu #menu [model]="addMenuItems" [popup]="true" appendTo="body" />
        <p-button (click)="menu.toggle($event)" icon="pi pi-plus" label="Add" fluid />

        @for (node of nodeValue; track $index) {
            <div class="flex flex-row">
                <p-button (click)="removeByIndex($index)" size="small" class="noRightRadius" severity="danger" icon="pi pi-times" />

                @if(isModelIDFeature(node)){
                    <div class="modelContainer">
                        <div class="modelContainerHeader">
                            <span class="pl-2">Model ID</span>
                        </div>
                        <div class="modelContainerContent flex flex-col gap-2">
                            <app-floattextinput [(value)]="node.modelID" label="Model ID" icon="pi-pencil" class="w-full"/>
                            <app-floattoggleswitch [(value)]="node.pullIfNotExist" label="Pull from Ollama" icon="pi-download"/>
                        </div>
                    </div>
                }
                @else if(isKnowledgebaseFeature(node)){
                    <div class="modelContainer">
                        <div class="modelContainerHeader">
                            <span class="pl-2">Knowledgebase</span>
                        </div>
                        <div class="modelContainerContent flex flex-col gap-2">
                            <app-floatmultiselect [(selected)]="node.knowledgebaseNames" [options]="knowledgebases" optionLabel="name" optionValue="name" label="Knowledgebases" icon="pi-pencil"/>
                        </div>
                    </div>
                }
                @else if(isSystemPromptFeature(node)){
                    <div class="modelContainer">
                        <div class="modelContainerHeader">
                            <span class="pl-2">System Prompt</span>
                        </div>
                        <div class="modelContainerContent flex flex-col gap-2">
                            <textarea rows="5" class="w-full" pTextarea [(ngModel)]="node.prompt" [autoResize]="true"></textarea>
                        </div>
                    </div>
                }
                @else if(isThinkingFeature(node)){
                    <div class="modelContainer">
                        <div class="modelContainerHeader">
                            <span class="pl-2">Thinking</span>
                        </div>
                        <div class="modelContainerContent flex flex-col gap-2">
                            <app-floattoggleswitch [(value)]="node.disableThinking" label="Disable Thinking" icon="pi-download"/>
                        </div>
                    </div>
                }
                @else if(isToolFeature(node)){
                    <div class="modelContainer">
                        <div class="modelContainerHeader">
                            <span class="pl-2">Tool</span>
                        </div>
                        <div class="modelContainerContent flex flex-col gap-2">
                            <app-floatmultiselect [(selected)]="node.toolNames" [options]="tools" label="Tools" icon="pi-pencil"/>
                        </div>
                    </div>
                }
            </div>
        }
    </div>
    `,
        styles: `
            ::ng-deep.noRightRadius button {
                height:100%;
                border-top-right-radius:0px !important;
                border-bottom-right-radius:0px !important;
            }

            .modelContainer {
                width:100%;
                border: 1px solid var(--p-fieldset-border-color);
                border-top-right-radius: var(--p-button-border-radius);
                border-bottom-right-radius:var(--p-button-border-radius);
            }
            .modelContainerHeader {
                padding:2px;
                margin-bottom:5px;
                border-top-right-radius: var(--p-button-border-radius);
                background: var(--p-inputtext-background);
            }
            .modelContainerContent {
                padding:5px;
            }
        `
})
export class ModelFeatureEditor {
    @Input() nodeValue: ModelFeature[] = [];
    @Output() nodeValueChange = new EventEmitter<ModelFeature[]>();

    @Input() knowledgebases : ListKnowledgebaseModel[] = [];
    @Input() tools : string[] = [];

    featureTypes: EnumIndexer[];

    addMenuItems: MenuItem[] = [
        {
            label: 'Model ID',
            icon: 'pi pi-chart-line',
            command: () => {
                this.nodeValue.push({
                    $type: ModelFeatureTypes.ModelID,
                    modelID: "Model ID",
                    pullIfNotExist: false
                } as ModelIDFeature);
                this.emitUpdate();
            }
        },
        {
            label: 'Knowledgebase',
            icon: 'pi pi-chart-line',
            command: () => {
                this.nodeValue.push({
                    $type: ModelFeatureTypes.Knowledgebases,
                    knowledgebaseNames: []
                } as KnowledgebaseFeature);
                this.emitUpdate();
            }
        },
        {
            label: 'System Prompt',
            icon: 'pi pi-chart-line',
            command: () => {
                this.nodeValue.push({
                    $type: ModelFeatureTypes.SystemPrompt,
                    prompt: "Prompt"
                } as SystemPromptFeature);
                this.emitUpdate();
            }
        },
        {
            label: 'Thinking',
            icon: 'pi pi-chart-line',
            command: () => {
                this.nodeValue.push({
                    $type: ModelFeatureTypes.Thinking,
                    disableThinking: true
                } as ThinkingFeature);
                this.emitUpdate();
            }
        },
        {
            label: 'Tool',
            icon: 'pi pi-chart-line',
            command: () => {
                this.nodeValue.push({
                    $type: ModelFeatureTypes.Tools,
                    toolNames: []
                } as ToolFeature);
                this.emitUpdate();
            }
        }
    ];

    constructor() {
        this.featureTypes = Object.entries(ModelFeatureTypes)
            .filter((e) => !isNaN(e[0] as any))
            .map((e) => new EnumIndexer(+e[0], e[1].toString()));
    }

    isModelIDFeature(v: any): v is ModelIDFeature {
        return this.isOfType(v, ModelFeatureTypes.ModelID);
    }
    isKnowledgebaseFeature(v: any): v is KnowledgebaseFeature {
        return this.isOfType(v, ModelFeatureTypes.Knowledgebases);
    }
    isSystemPromptFeature(v: any): v is SystemPromptFeature {
        return this.isOfType(v, ModelFeatureTypes.SystemPrompt);
    }
    isThinkingFeature(v: any): v is ThinkingFeature {
        return this.isOfType(v, ModelFeatureTypes.Thinking);
    }
    isToolFeature(v: any): v is ToolFeature {
        return this.isOfType(v, ModelFeatureTypes.Tools);
    }

    isOfType(v: any, type: ModelFeatureTypes) {
        if (v == undefined || v == null) return false;
        return v.$type == type;
    }

    removeByIndex(index: number) {
        if (index != -1) {
            this.nodeValue.splice(index, 1);
            this.emitUpdate();
        }
    }

    emitUpdate() {
        this.nodeValueChange.emit(this.nodeValue);
    }
}
