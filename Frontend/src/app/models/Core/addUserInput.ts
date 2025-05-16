import { BaseExecIDModel } from "./baseExecIDModel";

export interface AddUserInput extends BaseExecIDModel {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    loginName: string;
    password: string;
    permissions: string[];
}