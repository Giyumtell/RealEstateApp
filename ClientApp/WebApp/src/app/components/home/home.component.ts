import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  properties = [
    {
      title: 'Beautiful Family House',
      description: 'A beautiful family house with a large garden.',
      price: 250000,
      image: 'assets/images/house1.jpg'
    },
    {
      title: 'Modern Apartment',
      description: 'A modern apartment in the city center.',
      price: 150000,
      image: 'assets/images/apartment1.jpg'
    },
    {
      title: 'Cozy Cottage',
      description: 'A cozy cottage in the countryside.',
      price: 100000,
      image: 'assets/images/cottage1.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}