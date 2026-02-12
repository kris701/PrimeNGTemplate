import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Button } from "primeng/button";
import { MenuModule } from "primeng/menu";
import { FloatNumberInput } from "../../../../../common/components/floatnumberinput";
import { FloatSelect } from "../../../../../common/components/floatselect";
import { BPGCriticality } from "../../../../../models/BPG/bPGCriticality";
import { EnumIndexer } from "../../../../../models/EnumIndexer";
import { BPGCriticalityStates } from "../../../../../models/BPG/bPGCriticalityStates";
import { DQACriticality } from "../../../../../models/DQA/dQACriticality";
import { DQACriticalityStates } from "../../../../../models/DQA/dQACriticalityStates";

@Component({
    selector: 'app-dqa-criticalitieseditor',
    imports: [FormsModule, CommonModule, Button, MenuModule, FloatSelect, FloatNumberInput],
    template: `
        @if(showAdd){
            <p-button (onClick)="addCriticality()" icon="pi pi-plus" label="Add Criticality" [disabled]="!canWrite" fluid />
        }
        @if(nodeValue != null){
            @if(nodeValue.length > 0){
                <div class="flex flex-col gap-2 mt-2">
                    @for(criticality of nodeValue; track criticality){
                        <div class="flex flex-row">
                            <p-button severity="danger" icon="pi pi-times" class="mt-6" size="small" [style]="{ height: '100%' }" (click)="removeCriticality(criticality)"  class="critNoRightRadius" [disabled]="!canWrite"/>
                            <div class="criticalityContainer">
                                <div class="criticalityContainerHeader">
                                    <span class="pl-2">Criticality</span>
                                </div>

                                <div class="criticalityContainerContent flex flex-col gap-2">
                                    <app-floatselect [(selected)]="criticality.state" [options]="criticalityStates" optionLabel="label" optionValue="value" [disabled]="!canWrite" label="Criticality"/>
                                    <app-floatnumberinput [(value)]="criticality.validPastHours" label="Valid past hours" [disabled]="!canWrite"/>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }
            @else {
                <p>No criticalities defined.</p>
            }
        }
        @else {
            <p>No criticalities defined.</p>
        }
    `,
    styles: `
        ::ng-deep.critNoRightRadius button {
            border-top-right-radius:0px !important;
            border-bottom-right-radius:0px !important;
        }

        .criticalityContainer {
            width:100%;
            border: 1px solid var(--p-fieldset-border-color);
            border-top-right-radius: var(--p-button-border-radius);
            border-bottom-right-radius:var(--p-button-border-radius);
        }
        .criticalityContainerHeader {
            padding:2px;
            margin-bottom:5px;
            border-top-right-radius: var(--p-button-border-radius);
            background: var(--p-inputtext-background);
        }
        .criticalityContainerContent {
            padding:5px;
        }
        `
})
export class DQACriticalityEditor {
    @Input() nodeValue: DQACriticality[] | null = null;
    @Output() nodeValueChange = new EventEmitter<DQACriticality[] | null>();

    @Input() showAdd: boolean = true;

    @Input() canWrite: boolean = true;

    criticalityStates : EnumIndexer[] = [];

    constructor(
    ){
        this.criticalityStates = Object.entries(DQACriticalityStates)
                    .slice(1)
                    .filter((e) => !isNaN(e[0] as any))
                    .map((e) => new EnumIndexer(+e[0], e[1].toString()));
    }

    addCriticality(){
        this.nodeValue?.push({
            state: DQACriticalityStates.None,
            validPastHours: 0
        } as DQACriticality);
    }

    removeCriticality(attribute : DQACriticality){
        if (this.nodeValue){
            var index = this.nodeValue.indexOf(attribute);
            if (index != -1)
            {
                this.nodeValue?.splice(index, 1);
                this.emitUpdate();
            }
        }
    }

    emitUpdate() {
        this.nodeValueChange.emit(this.nodeValue);
    }
}
