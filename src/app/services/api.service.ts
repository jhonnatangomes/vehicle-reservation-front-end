import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "../protocols/User";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    constructor(private http: HttpClient) {}

    handleError(error: HttpErrorResponse) {
        console.error(error);
        window.alert(error.error.message);
        return throwError(() => new Error(error.message));
    }

    createUser(user: User) {
        return this.http
            .post("http://localhost:4000/sign-up", user)
            .pipe(catchError(this.handleError));
    }

    login(user: User) {
        return this.http
            .post("http://localhost:4000/sign-in", user)
            .pipe(catchError(this.handleError));
    }
}
