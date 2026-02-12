import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MessageService } from "primeng/api";
import { Button } from "primeng/button";
import { MenuModule } from "primeng/menu";
import { FloatTextInput } from "../../../../../common/components/floattextinput";
import { FloatSelect } from "../../../../../common/components/floatselect";
import { Attribute } from "../../../../../models/DAI/attribute";
import { Fieldset } from "primeng/fieldset";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Endpoints } from "../../../../../../Endpoints";
import { APIURL } from "../../../../../../globals";
import { JWTTokenHelpers } from "../../../helpers/jwtTokenHelpers";
import { UserInterface } from "../../../interfaces/usersinterface";
import { EvaluateAttributesInput } from "../../../../../models/DAI/evaluateAttributesInput";

@Component({
    selector: 'app-dai-attributetester',
    imports: [FormsModule, CommonModule, FloatTextInput, Button, MenuModule, FloatSelect, Fieldset],
    template: `
        <p-fieldset legend="Attributes Tester" class="flex flex-col gap-2 w-full">
            <div class="flex flex-col gap-2">
                <div class="flex flex-row gap-2">
                    <app-floatselect [(selected)]="testingUser" [options]="usersInterface.allUsers" label="As User" optionLabel="firstName" optionValue="id" class="w-full"/>
                    <app-floattextinput [(value)]="testingReferenceId" label="Reference ID" class="w-full"/>
                    <p-button label="Test" (onClick)="testAttributes()" class="w-full" fluid/>
                </div>

                @if(evaluationResult){
                    @for(id of Object.keys(evaluationResult); track id){
                        <p>{{id}}: {{evaluationResult[id]}}</p>
                    }
                }
            </div>
        </p-fieldset>
    `
})
export class DAIAttributeTester {
    @Input() nodeValue: Attribute[] | null = null;
    @Output() nodeValueChange = new EventEmitter<Attribute[] | null>();

    testingUser : string = JWTTokenHelpers.GetUserID();
    testingReferenceId : string = "";

    evaluationResult : { [id:string]:string } | null = null;

    Object = Object;

    constructor(
        private http: HttpClient,
        private service: MessageService,
        public usersInterface : UserInterface
    ) {
    }

    async testAttributes(){
        var body = {
            userID: this.testingUser,
            referenceID: this.testingReferenceId,
            attributes: this.nodeValue
        } as EvaluateAttributesInput

        this.evaluationResult = await firstValueFrom(this.http.post<{ [id:string]:string }>(APIURL + Endpoints.DAI.Attributes.Post_Evaluate, body));
        this.service.add({ severity: 'success', summary: 'Evaluation Result', detail: 'Attributes was evaluated successfully!' });
    }
}
