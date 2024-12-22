import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentModule } from './components/home/home.component.module';
import { ListingComponentModule } from './components/listing/listing.component.module';
import { MortgageModule } from './components/mortgage/mortgage.component.module';
import { HomeDealsComponentModule } from './components/home-deals/home-deals.component.module';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    HomeComponentModule,
    ListingComponentModule,
    MortgageModule,
    HomeDealsComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }