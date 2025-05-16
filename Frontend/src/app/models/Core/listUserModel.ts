export interface ListUserModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    permissionsCount: number;
    isActive: boolean;
    createdAt: string | Date;
    updatedAt: string | Date | null;
}