import { Component, OnInit } from "@angular/core";
import { Vehicle } from "../protocols/Vehicle";
import { ApiService } from "../services/api.service";
import { UserDataService } from "../services/user-data.service";

@Component({
    selector: "app-vehicles",
    templateUrl: "./vehicles.component.html",
    styleUrls: ["./vehicles.component.css"],
})
export class VehiclesComponent implements OnInit {
    vehicles!: Vehicle[];

    constructor(
        private apiService: ApiService,
        private userDataService: UserDataService
    ) {}

    ngOnInit(): void {
        this.apiService
            .getVehicles(<string>this.userDataService.userData?.token)
            .subscribe((data) => {
                this.vehicles = <Vehicle[]>data;
            });
    }
}
