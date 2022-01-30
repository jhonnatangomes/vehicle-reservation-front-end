import { Injectable } from "@angular/core";
import { LoginResponse } from "../protocols/User";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: "root",
})
export class UserDataService {
    private _userData!: LoginResponse | null;

    constructor(private localStorageService: LocalStorageService) {
        const loginInfo = this.localStorageService.getValue();
        if (loginInfo) {
            this._userData = loginInfo;
        }
    }

    get userData() {
        return this._userData;
    }

    set userData(userData: LoginResponse | null) {
        this._userData = userData;
        this.localStorageService.setValue(userData);
    }
}
