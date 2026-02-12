import { SQLCollectoData } from '../../../../../models/DAI/sQLCollectoData';
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
import { TriggerData } from '../../../../../models/DAI/triggerData';
import { SQLTriggerData } from '../../../../../models/DAI/sQLTriggerData';
import { TriggerDataTypes } from '../../../../../models/DAI/triggerDataTypes';

@Component({
    selector: 'app-dai-triggerdataeditor',
    imports: [FormsModule, CommonModule, MenuModule, Fieldset, Button, DAISchemaOverview, MonacoEditorModule, FloatTextInput],
    template: `
    @if (isSQLTriggerData(nodeValue)){
        <p-fieldset legend="SQL">
            <div class="flex flex-col gap-2">
                <div class="flex flex-row gap-2">
                    <app-floattextinput [(value)]="nodeValue.schemaName" [disabled]="disabled" label="Schema" icon="pi-pencil" class="w-full" />
                    <app-floattextinput [(value)]="nodeValue.tableName" [disabled]="disabled" label="Table" icon="pi-pencil" class="w-full" />
                </div>
                <app-floattextinput [(value)]="nodeValue.referenceIDColumn" [disabled]="disabled" label="Reference ID Column" icon="pi-pencil" />
                <app-floattextinput [(value)]="nodeValue.createdAtColumn" [disabled]="disabled" label="Created At Column" icon="pi-pencil" />
                <app-floattextinput [(value)]="nodeValue.updatedAtColumn" [disabled]="disabled" label="Updated At Column" icon="pi-pencil" />
                @if(!disabled && canReadSchema){
                    <p-button label="Schema Overview" (onClick)="schemaOverviewVisible = true" class="w-full" fluid />
                }
                <app-dai-schemaoverview [(schemaOverviewVisible)]="schemaOverviewVisible" [sourceID]="sourceID"/>
            </div>
        </p-fieldset>
    }
    @else {
        <p>Unknown trigger data!</p>
    }
    `
})
export class DAITriggerDataEditor {
    @Input() nodeValue: TriggerData | null = null;
    @Output() nodeValueChange = new EventEmitter<TriggerData | null>();

    @Input() sourceID : string = "";

    schemaOverviewVisible : boolean = false;
    @Input() canReadSchema: boolean = false;

    @Input() disabled: boolean = false;

    isSQLTriggerData(v: any): v is SQLTriggerData {
        return this.isOfType(v, TriggerDataTypes.SQL);
    }
    isOfType(v: any, type: TriggerDataTypes) {
        if (v == undefined || v == null) return false;
        return v.$type == type;
    }

    emitUpdate() {
        this.nodeValueChange.emit(this.nodeValue);
    }
}
