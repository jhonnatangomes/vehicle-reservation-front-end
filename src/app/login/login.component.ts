import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../services/api.service";

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

    constructor(private router: Router, private apiService: ApiService) {
        this.routerUrl = this.router.url;
    }

    ngOnInit(): void {}

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
                console.log(data);
            });
    }
}
