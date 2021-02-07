import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { 
    path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) 
  },
  { path: 'favorites', loadChildren: () => import('./features/favorites/favorites.module').then(m =>
    m.FavoritesModule) },
  { path: 'shopping-cart', loadChildren: () => import('./features/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
