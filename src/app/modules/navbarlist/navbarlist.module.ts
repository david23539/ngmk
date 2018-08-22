import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavbarListComponent } from './navbarlist.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarListComponent],
  exports: [NavbarListComponent]
})
export class NavbarListModule { }
