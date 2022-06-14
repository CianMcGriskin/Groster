import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
  '../log-in/css/main.css',
  '../log-in/css/util.css',
  '../log-in/vendor/select2/select2.min.css',
  '../log-in/vendor/daterangepicker/daterangepicker.css',
  '../log-in/vendor/css-hamburgers/hamburgers.min.css',
  '../log-in/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
  '../log-in/fonts/iconic/css/material-design-iconic-font.min.css',
  '../log-in/vendor/animate/animate.css',
  '../log-in/vendor/animsition/css/animsition.min.css',
  '../log-in/vendor/bootstrap/css/bootstrap.min.css']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor() { }

  ngOnInit(): void {
  }

}
