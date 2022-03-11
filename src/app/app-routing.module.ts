import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './gaurd/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
  path: '',
  runGuardsAndResolvers: "always",
  canActivate: [AuthGuard],
  children: [

    {path:'products',component:ProductsComponent},
    {path:'cart',component:CardComponent}
  ]
},

{path:'login',component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
