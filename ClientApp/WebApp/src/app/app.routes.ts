import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/listing/listing.component';
import { MortgageComponent } from './components/mortgage/mortgage.component';
import { HomeDealsComponent } from './components/home-deals/home-deals.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'listing', component: ListingComponent },
    { path: 'mortgage', component: MortgageComponent },
    { path: 'home-deals', component: HomeDealsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];