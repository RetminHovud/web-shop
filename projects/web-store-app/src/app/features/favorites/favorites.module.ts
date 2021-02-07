import { NgModule } from '@angular/core';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { SharedModule } from '../../shared/shared.module';
import { FavoritesService } from '../../services/favorites/favorites.service';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    SharedModule,
    FavoritesRoutingModule,
    HttpClientModule
  ],
  providers: [FavoritesService]
})
export class FavoritesModule { }
