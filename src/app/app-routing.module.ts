import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { EmpCartComponent } from "./emp-cart/emp-cart.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "home", component: LoginComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "signup/:empId", component: SignUpComponent },
  { path: "cart", component: EmpCartComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
