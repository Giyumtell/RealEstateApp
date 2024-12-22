import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-deals',
    templateUrl: './home-deals.component.html',
    standalone: false,
    styleUrls: ['./home-deals.component.scss']
})
export class HomeDealsComponent implements OnInit {

    deals: any[] = [];

    constructor() { }

    ngOnInit(): void {
        this.loadDeals();
    }

    loadDeals(): void {
        // Mock data for demonstration purposes
        this.deals = [
            {
              title: 'Smart Refrigerator',
              description: 'A smart refrigerator with advanced cooling technology.',
              price: 1200,
              image: 'assets/images/refrigerator.jpg'
            },
            {
              title: 'Washing Machine',
              description: 'A high-efficiency washing machine with multiple wash settings.',
              price: 800,
              image: 'assets/images/washing-machine.jpg'
            },
            {
              title: 'Microwave Oven',
              description: 'A microwave oven with quick heating and defrosting features.',
              price: 150,
              image: 'assets/images/microwave.jpg'
            }
          ];
    }
}