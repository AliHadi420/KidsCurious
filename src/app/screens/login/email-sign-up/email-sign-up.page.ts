import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-sign-up',
  templateUrl: './email-sign-up.page.html',
  styleUrls: ['./email-sign-up.page.scss'],
})
export class EmailSignUpPage implements OnInit {

  constructor(
    public router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back()
  }
}
