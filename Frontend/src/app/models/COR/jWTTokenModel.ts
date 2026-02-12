export interface JWTTokenModel {
    nameid: string;
    groupsid: string;
    role: string[];
    isstaff: string;
    iat: number;
    exp: number;
}