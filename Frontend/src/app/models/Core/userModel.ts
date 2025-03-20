import { BaseExecIDModel } from "./baseExecIDModel";

export interface UserModel extends BaseExecIDModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    loginName: string;
    permissions: string[];
}