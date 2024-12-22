import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    standalone: false,
    styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

    listings: any[] = [];

    constructor() { }

    ngOnInit(): void {
        this.loadListings();
    }

    loadListings(): void {
        // Mock data for listings, replace with actual data fetching logic
        this.listings = [
            {
              title: 'Modern Apartment',
              description: 'A modern apartment in the city center.',
              price: 150000,
              location: 'New York, NY'
            },
            {
              title: 'Cozy Cottage',
              description: 'A cozy cottage in the countryside.',
              price: 100000,
              location: 'Asheville, NC'
            },
            {
              title: 'Luxury Villa',
              description: 'A luxury villa with a private pool.',
              price: 500000,
              location: 'Los Angeles, CA'
            }
          ];
    }

}