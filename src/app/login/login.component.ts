import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../services/api.service";
import { LoginResponse } from "../protocols/User";
import { TokenService } from "../services/token.service";
import { LocalStorageService } from "../services/local-storage.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
    routerUrl!: string;
    name!: string;
    email!: string;
    password!: string;

    constructor(
        private router: Router,
        private apiService: ApiService,
        private tokenService: TokenService,
        private localStorageService: LocalStorageService
    ) {
        this.routerUrl = this.router.url;
    }

    ngOnInit(): void {
        const loginInfo = this.localStorageService.getValue();
        if (loginInfo) {
            this.router.navigateByUrl("/home");
            this.tokenService.token = loginInfo.token;
        }
    }

    onSubmit() {
        if (this.routerUrl === "/cadastro") {
            this.signUp();
        }
        if (this.routerUrl === "/") {
            this.login();
        }
    }

    signUp() {
        this.apiService
            .createUser({
                name: this.name,
                email: this.email,
                password: this.password,
            })
            .subscribe((_data) => {
                window.alert("Usuário cadastrado com sucesso");
                this.router.navigateByUrl("/");
            });
    }

    login() {
        this.apiService
            .login({ email: this.email, password: this.password })
            .subscribe((data) => {
                window.alert("Usuário logado com sucesso");
                const response = <LoginResponse>data;
                this.tokenService.token = response.token;
                this.router.navigateByUrl("/home");
            });
    }
}
