import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-details-about',
  templateUrl: './event-details-about.page.html',
  styleUrls: ['./event-details-about.page.scss'],
})
export class EventDetailsAboutPage implements OnInit {
  isOpen= false;
  constructor(
    public location: Location,
    public router: Router,
  ) { }

  ngOnInit() {
  }
}
