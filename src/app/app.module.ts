import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatListModule, MatCardModule } from '@angular/material';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateShopComponent } from './landing-page/create-shop/create-shop.component';
import { CreateSubUserComponent } from './landing-page/create-shop/create-sub-user/create-sub-user.component';
import { CreateAddressComponent } from './landing-page/create-shop/create-address/create-address.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    CreateShopComponent,
    CreateSubUserComponent,
    CreateAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
