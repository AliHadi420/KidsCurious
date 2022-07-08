import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-home',
  templateUrl: './events-home.page.html',
  styleUrls: ['./events-home.page.scss'],
})
export class EventsHomePage implements OnInit {
  options = {
    direction: 'vertical'
  }

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }
  details(){
    this.router.navigateByUrl('event-details');
  }
}
