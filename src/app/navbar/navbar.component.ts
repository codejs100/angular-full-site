import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'afs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  activeUrl: string;
  subscription: Subscription;
  navMenu: any;

  constructor(private route: Router) { }

  ngOnInit() {
    this.subscription = this.route.events.subscribe( (s) => {
      if (s instanceof NavigationEnd) {
        this.activeUrl = s.urlAfterRedirects;
      }
    });
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.navMenu = [
      { menuUrl: '/Home' , menuName: 'Home' },
      { menuUrl: '/About' , menuName: 'About' },
      { menuUrl: '/Gallery' , menuName: 'Gallery' },
      { menuUrl: '/Services' , menuName: 'Services' },
      { menuUrl: '/Testimonials' , menuName: 'Testimonials' },
      { menuUrl: '/Clients' , menuName: 'Clients' },
      { menuUrl: '/Pricing' , menuName: 'Pricing' }
    ];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
