import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.page.html',
  styleUrls: ['./email-login.page.scss'],
})
export class EmailLoginPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }
}
