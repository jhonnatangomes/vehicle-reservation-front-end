import { Injectable } from "@angular/core";

interface LoginInfo {
    token: string;
}

@Injectable({
    providedIn: "root",
})
export class LocalStorageService {
    constructor() {}

    setValue(key: string, value: Object | string) {
        const object = { [key]: value };
        const stringifiedObject = JSON.stringify(object);
        localStorage.setItem("vehicle-reservation", stringifiedObject);
    }

    getValue(): LoginInfo | null {
        const data = localStorage.getItem("vehicle-reservation");
        if (!data) {
            return null;
        }
        return JSON.parse(data);
    }
}
