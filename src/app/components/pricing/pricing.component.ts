import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  plans = [
    {
      name: 'BASIC',
      price: '₹4,999',
      period: '/MONTH',
      features: [
        'Recorded video lessons',
        'Resume template access',
        'Community support',
        'Weekly assignments',
        'Certificate on completion'
      ],
      popular: false
    },
    {
      name: 'STANDARD',
      price: '₹7,999',
      period: '/MONTH',
      features: [
        'Live classes + recordings',
        'Resume building support',
        '2 mock interviews/month',
        'Doubt clearing sessions',
        'Job referrals access'
      ],
      popular: false
    },
    {
      name: 'PLATINUM',
      price: '₹12,999',
      period: '/MONTH',
      features: [
        'Everything in Standard',
        'Professional resume building',
        '6 mock interviews/month',
        '1-on-1 mentor sessions',
        'Direct job referrals'
      ],
      popular: true
    },
    {
      name: 'GOLD',
      price: '₹19,999',
      period: '/MONTH',
      features: [
        'Everything in Platinum',
        'Unlimited mock interviews',
        'Direct interview support',
        'Guaranteed placement assist',
        'Lifetime community access'
      ],
      popular: false
    }
  ];
}
