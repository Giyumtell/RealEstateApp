import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListingComponent } from './listing.component';

@NgModule({
  declarations: [ListingComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ListingComponent]
})
export class ListingComponentModule { }