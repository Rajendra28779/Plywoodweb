import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  currentTestimonialIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    setInterval(() => {
      this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
    }, 5000); // Change every 5 seconds
  }

  testimonials = [
    {
      text: 'I recently renovated my home and purchased all the plywood and aluminum materials from Sai Krishna Traders. The quality of their products is outstanding, and the prices are reasonable. The staff was helpful in guiding me to choose the right materials for my needs. I’m very happy with the results!',
      author: 'Chiranjib Dhal',
      rating: 5
    },
    {
      text: 'Great customer service and high-quality products. The team was very knowledgeable and assisted me throughout the buying process. Would definitely recommend!',
      author: 'John Doe',
      rating: 4
    },
    {
      text: ' me throughout the buying process. Would definitely recommend! Great customer service and high-quality products. The team was very knowledgeable and assisted',
      author: 'Rajendra Prasad',
      rating: 5
    },
    {
      text: 'I recently renovated my home and purchased all the plywood and aluminum materials from Sai Krishna Traders.. Would definitely recommend!',
      author: 'Soumaya ranjan',
      rating: 4
    },
  ];

}
