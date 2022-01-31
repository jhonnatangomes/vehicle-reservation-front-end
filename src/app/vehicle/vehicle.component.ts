import { Component, Input, OnInit } from "@angular/core";
import { Vehicle } from "../protocols/Vehicle";
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

    constructor(private userDataService: UserDataService) {
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

    handleClick() {}
}
