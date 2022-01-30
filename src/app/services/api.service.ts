import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "../protocols/User";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    baseUrl = "http://localhost:4000";
    constructor(private http: HttpClient) {}

    handleError(error: HttpErrorResponse) {
        console.error(error);
        window.alert(error.error.message);
        return throwError(() => new Error(error.message));
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

    getHeaders(token: string) {
        return {
            Authorization: `Bearer ${token}`,
        };
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
}
