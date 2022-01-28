import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: "root",
})
export class TokenService {
    private _token!: string;
    constructor(private localStorageService: LocalStorageService) {}

    get token() {
        return this._token;
    }

    set token(token: string) {
        this._token = token;
        this.localStorageService.setValue("token", token);
    }
}
