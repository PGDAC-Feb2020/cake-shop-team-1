import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChocoComponent } from './choco/choco.component';
import { FruitComponent } from './fruit/fruit.component';
import { ExoticComponent } from './exotic/exotic.component';
import { ButterscotchComponent } from './butterscotch/butterscotch.component';
import { VanillaComponent } from './vanilla/vanilla.component';
import { StrawberryComponent } from './strawberry/strawberry.component';
import { OrderComponent } from './order/order.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ForgetComponent } from './forget/forget.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'forgetpass',component: ForgetComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'choco',component: ChocoComponent},
  {path: 'fruit',component: FruitComponent},
  {path: 'exotic',component: ExoticComponent},
  {path: 'butterscotch',component: ButterscotchComponent},
  {path: 'vanilla',component: VanillaComponent},
  {path: 'strawberry',component: StrawberryComponent},
  {path: 'order',component: OrderComponent},
  {path: 'cart',component: CartComponent},
  {path: 'about',component: AboutusComponent},
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
