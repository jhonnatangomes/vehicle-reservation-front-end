import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MyReservationsComponent } from "./my-reservations/my-reservations.component";

const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
    },
    {
        path: "cadastro",
        component: LoginComponent,
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "my-reservations",
        component: MyReservationsComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
