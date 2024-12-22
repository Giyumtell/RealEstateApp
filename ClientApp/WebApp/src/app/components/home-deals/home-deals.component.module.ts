import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeDealsComponent } from './home-deals.component';

@NgModule({
  declarations: [HomeDealsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HomeDealsComponent]
})
export class HomeDealsComponentModule { }