import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { MaterialModule } from './material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { EmpCartComponent, EmpDetDialog } from './emp-cart/emp-cart.component';
import { CartService } from './cart.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetService } from './user-det.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SignUpComponent,
    HomeComponent,
    EmpCartComponent,
    EmpDetDialog,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    CartService,
    UserDetService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EmpDetDialog
]
})
export class AppModule { }
