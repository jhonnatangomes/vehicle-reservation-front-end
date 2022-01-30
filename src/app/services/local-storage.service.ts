import { Injectable } from "@angular/core";
import { LoginResponse } from "../protocols/User";

@Injectable({
    providedIn: "root",
})
export class LocalStorageService {
    constructor() {}

    setValue(value: Object | null) {
        if (!value) {
            return this.removeValue();
        }
        const stringifiedValue = JSON.stringify(value);
        localStorage.setItem("vehicle-reservation", stringifiedValue);
    }

    getValue(): LoginResponse | null {
        const data = localStorage.getItem("vehicle-reservation");
        if (!data) {
            return null;
        }
        return JSON.parse(data);
    }

    removeValue() {
        localStorage.removeItem("vehicle-reservation");
    }
}
