import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MortgageComponent } from './mortgage.component';

@NgModule({
  declarations: [MortgageComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [MortgageComponent]
})
export class MortgageModule { }