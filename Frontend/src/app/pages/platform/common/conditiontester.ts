import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MessageService } from "primeng/api";
import { Button } from "primeng/button";
import { MenuModule } from "primeng/menu";
import { FloatTextInput } from "../../../common/components/floattextinput";
import { ListCollectorModel } from "../../../models/DAI/listCollectorModel";
import { Evaluatable } from "../../../models/DAI/evaluatable";
import { UserInterface } from "../interfaces/usersinterface";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { APIURL } from "../../../../globals";
import { Endpoints } from "../../../../Endpoints";
import { Fieldset } from "primeng/fieldset";
import { EvaluateForReferenceInput } from "../../../models/DAI/evaluateForReferenceInput";
import { EvaluateForReferenceOutput } from "../../../models/DAI/evaluateForReferenceOutput";
import { Message } from "primeng/message";

@Component({
    selector: 'app-conditiontester',
    imports: [FormsModule, CommonModule, FloatTextInput, Button, MenuModule, Fieldset, Message],
    template: `
        <p-fieldset legend="Expression Tester" class="flex flex-col gap-2 w-full">
            <div class="flex flex-col gap-2">
                <div class="flex flex-row gap-2">
                    <app-floattextinput [(value)]="testingReferenceId" label="Reference ID" class="w-full"/>
                    <p-button label="Test" (onClick)="testExpression()" class="w-full" fluid/>
                </div>

                @if(evaluationResult){
                    @if(evaluationResult.evaluationResult){
                        <p-message severity="success">Evaluated to True</p-message>
                    }
                    @else {
                        <p-message severity="warn">Evaluated to false</p-message>
                    }

                    @for(id of Object.keys(evaluationResult.collectorValues); track id){
                        <p>{{dataCollectorsMap[id]?.name}}: {{evaluationResult.collectorValues[id]}}</p>
                    }
                }
            </div>
        </p-fieldset>
    `
})
export class ConditionTester implements OnChanges {
    @Input() nodeValue: Evaluatable | null = null;
    @Output() nodeValueChange = new EventEmitter<Evaluatable | null>();

    @Input() dataCollectors: ListCollectorModel[] = [];
    dataCollectorsMap : { [id: string] : ListCollectorModel } = {}

    testingReferenceId : string = "";

    evaluationResult : EvaluateForReferenceOutput | null = null;

    Object = Object;

    constructor(
        private http: HttpClient,
        private service: MessageService,
        public usersInterface : UserInterface
    ) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes["dataCollectors"] && changes["dataCollectors"].previousValue != changes["dataCollectors"].currentValue){
            this.dataCollectorsMap = {}
            this.dataCollectors.forEach(x => {
                this.dataCollectorsMap[x.id] = x;
            });
        }
    }

    async testExpression(){
        var body = {
            referenceID: this.testingReferenceId,
            evaluable: this.nodeValue
        } as EvaluateForReferenceInput

        this.evaluationResult = await firstValueFrom(this.http.post<EvaluateForReferenceOutput>(APIURL + Endpoints.DAI.Expressions.Post_Evaluate, body));
        if (this.evaluationResult.evaluationResult == true)
            this.service.add({ severity: 'success', summary: 'Evaluation Result', detail: 'Expression evaluated as true!' });
        else
            this.service.add({ severity: 'warn', summary: 'Evaluation Result', detail: 'Expression evaluated as false!' });
    }
}
