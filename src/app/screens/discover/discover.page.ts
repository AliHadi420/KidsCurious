import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(
    public router: Router,
    public location: Location
  ) { }

  ngOnInit() {
  }
  personalize(){
    this.router.navigateByUrl('personalize')
  }
}
