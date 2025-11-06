import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
    selector: 'app-toggleswitchlabel',
    imports: [FormsModule, CommonModule, ToggleSwitchModule, FloatLabelModule, InputGroupModule, InputGroupAddonModule],
    template: `
        <p-inputgroup style="height:2.5rem">
            @if (icon != '') {
                <p-inputgroup-addon>
                    <i class="pi {{ icon }}"></i>
                </p-inputgroup-addon>
            }
            <div
                class="w-full flex flex-row cursor-pointer pl-4 pr-2"
                style="justify-content:left;align-self:normal;align-items:center;border:1px solid var(--p-select-border-color);overflow:hidden;background:var(--p-inputgroup-addon-background)"
                (click)="value = !value; checkChanged()"
            >
                <label class="cursor-pointer" [ngClass]="disabled ? 'text-surface-500' : ''">{{ label }}</label>
            </div>
            <p-inputgroup-addon>
                <p-toggleswitch [(ngModel)]="value" [style]="{ 'min-width': 'var(--p-toggleswitch-width)' }" [disabled]="disabled" class="h-full" [hidden]="hidden" (click)="value = !value; checkChanged()" />
            </p-inputgroup-addon>
        </p-inputgroup>
    `
})
export class FloatToggleSwitch implements OnChanges {
    @Input() disabled: boolean = false;
    @Input() hidden: boolean = false;

    @Input() icon: string = '';
    @Input() label: string = '';

    @Input() value: boolean | undefined = undefined;
    @Output() valueChange = new EventEmitter<boolean | undefined>();

    ngOnChanges(changes: SimpleChanges) {
        if (changes['value'] && changes['value'].currentValue != changes['value'].previousValue) {
            this.value = changes['value'].currentValue;
        }
    }

    checkChanged() {
        this.valueChange.emit(this.value);
    }
}
