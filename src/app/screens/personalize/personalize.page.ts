import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalize',
  templateUrl: './personalize.page.html',
  styleUrls: ['./personalize.page.scss'],
})
export class PersonalizePage implements OnInit {

  constructor(
    public router: Router,

  ) { }

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('events-home')
  }
}
