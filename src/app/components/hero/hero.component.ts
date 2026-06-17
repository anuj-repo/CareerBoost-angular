import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  images = [
    'assets/images/banner/bnr1.jpg',
    'assets/images/banner/bnr2.jpg',
    'assets/images/banner/bnr3.jpg',
    'assets/images/banner/bnr4.jpg',
    'assets/images/banner/bnr5.jpg'
  ];

  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 2000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
