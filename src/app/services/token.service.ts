import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: "root",
})
export class TokenService {
    private _token!: string;
    constructor(private localStorageService: LocalStorageService) {
        const loginInfo = this.localStorageService.getValue();
        if (loginInfo) {
            this._token = loginInfo.token;
        }
    }

    get token() {
        return this._token;
    }

    set token(token: string) {
        this._token = token;
        this.localStorageService.setValue("token", token);
    }
}
