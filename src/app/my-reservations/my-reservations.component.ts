import { Component, OnInit } from "@angular/core";
import { Vehicle } from "../protocols/Vehicle";
import { ApiService } from "../services/api.service";
import { UserDataService } from "../services/user-data.service";

@Component({
    selector: "app-my-reservations",
    templateUrl: "./my-reservations.component.html",
    styleUrls: ["./my-reservations.component.css"],
})
export class MyReservationsComponent implements OnInit {
    vehicle!: Vehicle;

    constructor(
        private apiService: ApiService,
        private userDataService: UserDataService
    ) {}

    ngOnInit(): void {
        this.apiService
            .getReservation(<string>this.userDataService.userData?.token)
            .subscribe((data) => {
                this.vehicle = <Vehicle>data;
            });
    }
}
