import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "../protocols/User";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    baseUrl = environment.baseUrl;
    constructor(private http: HttpClient) {}

    handleError(error: HttpErrorResponse) {
        console.error(error);
        window.alert(error.error.message);
        return throwError(() => new Error(error.message));
    }

    getHeaders(token: string) {
        return {
            Authorization: `Bearer ${token}`,
        };
    }

    createUser(user: User) {
        return this.http
            .post(`${this.baseUrl}/sign-up`, user)
            .pipe(catchError(this.handleError));
    }

    login(user: User) {
        return this.http
            .post(`${this.baseUrl}/sign-in`, user)
            .pipe(catchError(this.handleError));
    }

    logout(token: string) {
        return this.http
            .post(
                `${this.baseUrl}/logout`,
                {},
                { headers: this.getHeaders(token), responseType: "text" }
            )
            .pipe(catchError(this.handleError));
    }

    getVehicles(token: string) {
        return this.http
            .get(`${this.baseUrl}/vehicles`, {
                headers: this.getHeaders(token),
            })
            .pipe(catchError(this.handleError));
    }
}
