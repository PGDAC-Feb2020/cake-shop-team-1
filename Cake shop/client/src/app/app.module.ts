import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { BodyComponent } from './home/body/body.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './login/main/main.component';
import { SignupComponent } from './signup/signup.component';
import { ChocoComponent } from './choco/choco.component';
import { FruitComponent } from './fruit/fruit.component';
import { ExoticComponent } from './exotic/exotic.component';
import { ButterscotchComponent } from './butterscotch/butterscotch.component';
import { VanillaComponent } from './vanilla/vanilla.component';
import { StrawberryComponent } from './strawberry/strawberry.component';
import { OrderComponent } from './order/order.component';
import { FlavComponent } from './home/flav/flav.component';
import { FooterComponent } from './home/footer/footer.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ForgetComponent } from './forget/forget.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    LoginComponent,
    MainComponent,
    SignupComponent,
    ChocoComponent,
    FruitComponent,
    ExoticComponent,
    ButterscotchComponent,
    VanillaComponent,
    StrawberryComponent,
    OrderComponent,
    FlavComponent,
    FooterComponent,
    ForgetpassComponent,
    ForgetComponent,
    PagenotfoundComponent,
    CartComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
