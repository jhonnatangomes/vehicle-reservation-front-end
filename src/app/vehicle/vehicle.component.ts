import { Component, Input, OnInit } from "@angular/core";
import { Vehicle } from "../protocols/Vehicle";
import { ApiService } from "../services/api.service";
import { UserDataService } from "../services/user-data.service";

@Component({
    selector: "app-vehicle",
    templateUrl: "./vehicle.component.html",
    styleUrls: ["./vehicle.component.css"],
})
export class VehicleComponent implements OnInit {
    @Input() vehicle!: Vehicle;
    currentSelectedImage!: string;
    currentSelectedColor!: string;
    count = 1;
    email!: string;

    constructor(
        private userDataService: UserDataService,
        private apiService: ApiService
    ) {
        this.email = <string>userDataService.userData?.user.email;
    }

    ngOnInit(): void {
        this.currentSelectedImage = this.vehicle.images[0].url;
        this.currentSelectedColor = this.vehicle.images[0].color;
    }

    changeColor(color: string) {
        if (color !== this.currentSelectedColor) {
            this.currentSelectedColor = color;
            const newImage = this.vehicle.images.find(
                (image) => image.color === color
            );
            this.currentSelectedImage = <string>newImage?.url;
        }
    }

    changeCount(sign: "+" | "-") {
        if (sign === "+") {
            this.count++;
        }
        if (sign === "-" && this.count !== 1) {
            this.count--;
        }
    }

    handleClick() {
        if (this.vehicle.reservations === null) {
            const confirm = window.confirm(
                `Você irá reservar ${this.vehicle.name} por ${
                    this.count === 1 ? "1 dia" : this.count + " dias"
                } por um total de R$${(this.count * this.vehicle.pricePerDay)
                    .toFixed(2)
                    .replace(".", ",")}`
            );
            if (confirm) {
                this.apiService
                    .makeReservation(
                        <string>this.userDataService.userData?.token,
                        this.vehicle.id,
                        this.count
                    )
                    .subscribe((data) => {
                        this.vehicle = <Vehicle>data;
                    });
            }
        } else {
            const confirm = window.confirm(
                `Você tem certeza que quer devolver ${this.vehicle.name}?`
            );
            if (confirm) {
                this.apiService
                    .returnVehicle(
                        <string>this.userDataService.userData?.token,
                        this.vehicle.id
                    )
                    .subscribe((data) => {
                        this.vehicle = <Vehicle>data;
                        window.alert(
                            `Você deverá pagar R$${this.vehicle.reservations?.totalToPay}`
                        );
                        this.vehicle.reservations = null;
                    });
            }
        }
    }
}
