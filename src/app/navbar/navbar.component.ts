import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { UserDataService } from "../services/user-data.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
    name!: string;
    svgPath = "assets/down-arrow.svg";

    constructor(
        private userDataService: UserDataService,
        private apiService: ApiService,
        private router: Router
    ) {
        this.name = <string>userDataService.userData?.user.name;
    }

    ngOnInit(): void {}

    handleClick() {
        if (this.svgPath === "assets/down-arrow.svg") {
            this.svgPath = "assets/up-arrow.svg";
        } else {
            this.svgPath = "assets/down-arrow.svg";
        }
    }

    logout() {
        this.apiService
            .logout(<string>this.userDataService.userData?.token)
            .subscribe((_data) => {
                this.userDataService.userData = null;
                window.alert("Você foi deslogado com sucesso.");
                this.router.navigateByUrl("/");
            });
    }
}
