import { SQLCollectoData } from './../../../../../models/DAI/sQLCollectoData';
import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter, ViewChild, input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MenuItem } from "primeng/api";
import { Button } from "primeng/button";
import { Menu, MenuModule } from "primeng/menu";
import { HoursLeftAttribute } from "../../../../../models/BPG/hoursLeftAttribute";
import { ListCollectorModel } from "../../../../../models/DAI/listCollectorModel";
import { ValueAttribute } from "../../../../../models/BPG/valueAttribute";
import { FloatNumberInput } from "../../../../../common/components/floatnumberinput";
import { FloatTextInput } from "../../../../../common/components/floattextinput";
import { FloatSelect } from "../../../../../common/components/floatselect";
import { Attribute } from "../../../../../models/DAI/attribute";
import { AttributeTypes } from "../../../../../models/DAI/attributeTypes";
import { CollectorData } from "../../../../../models/DAI/collectorData";
import { CollectorSource } from "../../../../../models/DAI/collectorSource";
import { Fieldset } from "primeng/fieldset";
import { DAISchemaOverview } from "../dai.schemaoverview";
import { MonacoEditorModule } from "ngx-monaco-editor-v2";
import { GetCollectorSourcesOutput } from "../../../../../models/DAI/getCollectorSourcesOutput";
import { CollectorDataTypes } from '../../../../../models/DAI/collectorDataTypes';

@Component({
    selector: 'app-dai-collectordataeditor',
    imports: [FormsModule, CommonModule, MenuModule, Fieldset, Button, DAISchemaOverview, MonacoEditorModule],
    template: `
    @if (isSQLCollectoData(nodeValue)){
        <p-fieldset legend="SQL">
            <div class="flex flex-col gap-2">
                <p>Every query automatically gets a parameter called '&#64;ReferenceID' which is the ID of the object being checked.</p>
                <div class="flex h-full flex-grow">
                    <ngx-monaco-editor style="flex-grow:1;min-height:200px" [options]="editorOptions" [(ngModel)]="nodeValue.collectorSTP" [disabled]="disabled"> </ngx-monaco-editor>
                </div>
                @if(!disabled && canReadSchema){
                    <p-button label="Schema Overview" (onClick)="schemaOverviewVisible = true" class="w-full" fluid />
                }
                <app-dai-schemaoverview [(schemaOverviewVisible)]="schemaOverviewVisible" [sourceID]="sourceID"/>
            </div>
        </p-fieldset>
    }
    @else {
        <p>Unknown collector data!</p>
    }
    `
})
export class DAICollectorDataEditor {
    @Input() nodeValue: CollectorData | null = null;
    @Output() nodeValueChange = new EventEmitter<CollectorData | null>();

    @Input() sourceID : string = "";

    schemaOverviewVisible : boolean = false;
    @Input() canReadSchema: boolean = false;

    @Input() disabled: boolean = false;

    editorOptions = {theme: 'vs-dark', language: 'sql', automaticLayout: true};

    isSQLCollectoData(v: any): v is SQLCollectoData {
        return this.isOfType(v, CollectorDataTypes.SQL);
    }
    isOfType(v: any, type: CollectorDataTypes) {
        if (v == undefined || v == null) return false;
        return v.$type == type;
    }

    emitUpdate() {
        this.nodeValueChange.emit(this.nodeValue);
    }
}
