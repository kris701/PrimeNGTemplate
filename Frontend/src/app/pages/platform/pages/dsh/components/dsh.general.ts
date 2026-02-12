import { Component, Input } from '@angular/core';
import { DashboardModel } from '../../../../../models/DSH/dashboardModel';
import { UserInterface } from '../../../interfaces/usersinterface';

@Component({
    standalone: true,
    selector: 'app-dsh-general',
    imports: [],
    template: ` <div class="card">
        <div class="font-semibold text-xl mb-4">General</div>
        <p>
            Showing dashboard info for user <b>{{ userInterface.GetUserNameByID(model.forUser) }}</b
            >.
        </p>
        <p>
            Updated on <b>{{ prettyPrint(model.date) }}</b>
        </p>
    </div>`
})
export class DashboardGeneral {
    @Input() model!: DashboardModel;
    userInterface: UserInterface;

    constructor(userInterface: UserInterface) {
        this.userInterface = userInterface;
    }

    prettyPrint(date: string | Date) {
        if (date == undefined) return 'Loading...';
        return new Date(date).toLocaleTimeString();
    }
}
