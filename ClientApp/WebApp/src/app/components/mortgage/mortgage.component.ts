import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mortgage',
    templateUrl: './mortgage.component.html',
    standalone: false,
    styleUrls: ['./mortgage.component.scss']
})
export class MortgageComponent implements OnInit {

    mortgageDeals: any[] = [];

    constructor() { }

    ngOnInit(): void {
        this.loadMortgageDeals();
    }

    loadMortgageDeals(): void {
        // This is where you would typically make an API call to fetch mortgage deals
        // For now, we'll use some mock data
        this.mortgageDeals = [
            {
              name: 'Fixed Rate Mortgage',
              interestRate: 3.5,
              term: 30,
              monthlyPayment: 1500
            },
            {
              name: 'Adjustable Rate Mortgage',
              interestRate: 2.8,
              term: 15,
              monthlyPayment: 1200
            },
            {
              name: 'Interest-Only Mortgage',
              interestRate: 4.0,
              term: 10,
              monthlyPayment: 1000
            }];
    }
    public applyForDeal(deal: any): void {
        console.log(`Applying for mortgage deal: ${deal.name}`);
    }
}