import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    // Vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    
    // Material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,

    // Local
    SharedModule
  ],
  exports: [MainLayoutComponent]
})
export class CoreModule { }
