import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { AutoFocusModule } from 'primeng/autofocus';

@Component({
    selector: 'app-floattextinput',
    imports: [FormsModule, CommonModule, FloatLabelModule, InputTextModule, InputIconModule, IconFieldModule, AutoFocusModule],
    template: `
        <p-floatlabel variant="on">
            <p-iconfield>
                <p-inputicon styleClass="pi {{ icon }}" *ngIf="icon != ''" />
                @if (size == 'normal') {
                    <input
                        pInputText
                        class="raiseround"
                        [ngClass]="isValid ? '' : 'ng-invalid ng-dirty'"
                        id="floattextlabel"
                        type="text"
                        [(ngModel)]="value"
                        [disabled]="disabled"
                        fluid
                        (change)="valueChanged()"
                        (blur)="onBlur()"
                        (keyup.enter)="onEnter.emit()"
                        autofocus
                        [pAutoFocus]="autoFocus"
                    />
                } @else if (size == 'small') {
                    <input
                        pInputText
                        pSize="small"
                        class="raiseround"
                        [ngClass]="isValid ? '' : 'ng-invalid ng-dirty'"
                        id="floattextlabel"
                        type="text"
                        [(ngModel)]="value"
                        [disabled]="disabled"
                        fluid
                        (change)="valueChanged()"
                        (blur)="onBlur()"
                        (keyup.enter)="onEnter.emit()"
                        autofocus
                        [pAutoFocus]="autoFocus"
                    />
                } @else if (size == 'large') {
                    <input
                        pInputText
                        pSize="large"
                        class="raiseround"
                        [ngClass]="isValid ? '' : 'ng-invalid ng-dirty'"
                        id="floattextlabel"
                        type="text"
                        [(ngModel)]="value"
                        [disabled]="disabled"
                        fluid
                        (change)="valueChanged()"
                        (blur)="onBlur()"
                        (keyup.enter)="onEnter.emit()"
                        autofocus
                        [pAutoFocus]="autoFocus"
                    />
                }
            </p-iconfield>
            <label for="floattextlabel">{{ label }}</label>
        </p-floatlabel>
    `
})
export class FloatTextInput implements OnChanges {
    @Input() disabled: boolean = false;
    @Input() autoFocus: boolean = false;
    @Input() size: 'normal' | 'small' | 'large' = 'normal';

    @Input() icon: string = '';
    @Input() label: string = '';
    @Input() value: string | null | undefined = undefined;
    @Output() valueChange = new EventEmitter<string | null | undefined>();
    @Output() blur = new EventEmitter<null>();

    @Output() onEnter = new EventEmitter<null>();

    @Input() allowEmpty: boolean = false;

    isValid: boolean = true;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['value']) {
            if (changes['value'].currentValue != changes['value'].previousValue) {
                this.value = changes['value'].currentValue;
                this.valueChanged();
            }
        }
    }

    valueChanged() {
        if (this.value) this.value = this.value.trim();
        if (!this.allowEmpty) this.isValid = this.value != undefined && this.value != null && this.value != '';
        this.valueChange.emit(this.value);
    }

    onBlur() {
        this.blur.emit();
    }
}
