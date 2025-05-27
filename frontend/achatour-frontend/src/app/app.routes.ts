import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SuccessComponent } from './pages/success/success.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produit/:id', component: ProductDetailComponent },
  { path: 'success', component: SuccessComponent },
  { path: '**', redirectTo: '' },
];
