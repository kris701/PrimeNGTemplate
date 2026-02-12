import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter, ViewChild } from "@angular/core";
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

@Component({
    selector: 'app-dai-attributeeditor',
    imports: [FormsModule, CommonModule, FloatTextInput, Button, MenuModule, FloatSelect, FloatNumberInput],
    template: `
        <p-menu id="menu" #menu [model]="addMenuItems" [popup]="true" appendTo="body" />
        @if(showAdd){
            <p-button (click)="menu.toggle($event)" icon="pi pi-plus" label="Add Attribute" fluid />
        }
        @if(nodeValue != null){
            @if(nodeValue.length > 0){
                <div class="flex flex-col gap-2 mt-2">
                    @for(attribute of nodeValue; track attribute){
                        <div class="flex flex-row">
                            <p-button severity="danger" icon="pi pi-times" class="mt-6" size="small" [style]="{ height: '100%' }" (click)="removeAttribute(attribute); emitUpdate()"  class="evalNoRightRadius"/>
                            @if(isHoursLeftAttribute(attribute)){
                                <div class="attributeContainer">
                                    <div class="attributeContainerHeader">
                                        <span class="pl-2">Hours Left</span>
                                    </div>

                                    <div class="attributeContainerContent flex flex-col gap-2">
                                        <app-floattextinput [(value)]="attribute.name" label="Name" />
                                        <app-floatnumberinput [(value)]="attribute.hourOffset" label="Hour Offset" />
                                        <app-floatselect [options]="dataCollectors" [(selected)]="attribute.collectorTarget" optionLabel="name" optionValue="id" label="Data Collector"/>
                                    </div>
                                </div>
                            }
                            @else if (isValueAttribute(attribute)){
                                <div class="attributeContainer">
                                    <div class="attributeContainerHeader">
                                        <span class="pl-2">Value</span>
                                    </div>

                                    <div class="attributeContainerContent flex flex-col gap-2">
                                        <app-floattextinput [(value)]="attribute.name" label="Name" />
                                        <app-floatselect [options]="dataCollectors" [(selected)]="attribute.collectorTarget" optionLabel="name" optionValue="id" label="Data Collector"/>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
            }
            @else {
                <p>No attributes defined.</p>
            }
        }
        @else {
            <p>No attributes defined.</p>
        }
    `,
    styles: `
        ::ng-deep.evalNoLeftRadius button {
            border-top-left-radius:0px !important;
            border-bottom-left-radius:0px !important;
        }
        ::ng-deep.evalNoRightRadius button {
            border-top-right-radius:0px !important;
            border-bottom-right-radius:0px !important;
        }

        .attributeContainer {
            width:100%;
            border: 1px solid var(--p-fieldset-border-color);
            border-top-right-radius: var(--p-button-border-radius);
            border-bottom-right-radius:var(--p-button-border-radius);
        }
        .attributeContainerHeader {
            padding:2px;
            margin-bottom:5px;
            border-top-right-radius: var(--p-button-border-radius);
            background: var(--p-inputtext-background);
        }
        .attributeContainerContent {
            padding:5px;
        }
        `
})
export class DAIAttributeEditor {
    @ViewChild('menu') menu: Menu | undefined;

    @Input() nodeValue: Attribute[] | null = null;
    @Output() nodeValueChange = new EventEmitter<Attribute[] | null>();

    @Input() dataCollectors: ListCollectorModel[] = [];

    @Input() showAdd: boolean = true;

    addMenuItems: MenuItem[] = [
        {
            label: 'Value attribute',
            icon: 'pi pi-database',
            command: () => this.addNewValueAttribute()
        },
        {
            label: 'Hours left attribute',
            icon: 'pi pi-calendar-clock',
            command: () => this.addNewHoursLeftAttribute()
        }
    ];

    isValueAttribute(v: any): v is ValueAttribute {
        return this.isOfType(v, AttributeTypes.ValueAttribute);
    }
    isHoursLeftAttribute(v: any): v is HoursLeftAttribute {
        return this.isOfType(v, AttributeTypes.HoursLeftAttribute);
    }
    isOfType(v: any, type: AttributeTypes) {
        if (v == undefined || v == null) return false;
        return v.$type == type;
    }

    addNewValueAttribute() {
        var targetId = '';
        if (this.dataCollectors.length > 0)
            targetId = this.dataCollectors[0].id
        if (!this.nodeValue)
            this.nodeValue = []

        this.nodeValue.push({
            $type: AttributeTypes.ValueAttribute,
            name: 'New Attribute',
            collectorTarget: targetId
        } as ValueAttribute);

        this.emitUpdate();
    }
    addNewHoursLeftAttribute() {
        var targetId = '';
        if (this.dataCollectors.length > 0)
            targetId = this.dataCollectors[0].id
        if (!this.nodeValue)
            this.nodeValue = []

        this.nodeValue.push({
            $type: AttributeTypes.HoursLeftAttribute,
            name: 'New Attribute',
            hourOffset: 0,
            collectorTarget: targetId
        } as HoursLeftAttribute);

        this.emitUpdate();
    }

    removeAttribute(attribute : Attribute){
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

    toggleMenu(event : Event){
        this.menu?.toggle(event);
    }
}
