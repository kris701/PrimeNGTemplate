import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { APIURL } from "../../globals";
import { Endpoints } from "../../Endpoints";
import { UserModel } from "../models/Core/userModel";

@Injectable({
    providedIn: 'root',
  })
export class UserInterface
{
    public allUsers: UserModel[] = [];
    
    loaded: boolean = false;

    constructor(private http: HttpClient){
        this.loadAllUsers();
    }

    public GetUserNameByID(id : string) : string{
        if (id == undefined || id == null || id == "")
            return "None";
        var user = this.allUsers.find(x => x.id == id) as UserModel;
        if (user)
            return user.firstName + "@" + user.lastName
        return "Unknown User";
    }

    loadAllUsers() {
        this.allUsers = []
        this.http.get<UserModel[]>(APIURL + Endpoints.Core.Users.Get_AllUsers).subscribe(l => {
            this.allUsers = l;
            this.loaded = true;
        });
    }
}