import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'shop', component: ShopComponent },
  // { path: 'about-us', component: AboutUsComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'cart', component: CartComponent },
];
