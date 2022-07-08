import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-details-map',
  templateUrl: './event-details-map.page.html',
  styleUrls: ['./event-details-map.page.scss'],
})
export class EventDetailsMapPage implements OnInit {

  constructor(
    public location: Location,
    public router: Router,
  ) { }

  ngOnInit() {
  }
}
