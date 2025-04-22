import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ProductSaveComponent } from './product/product-save/product-save.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';



const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path:'product-save',component:ProductSaveComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents= [
  
]