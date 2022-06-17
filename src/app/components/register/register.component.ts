import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/services/account.service';

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
    form!: FormGroup;
    loading = false;
    submitted = false;
  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    this.accountService.register(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {   
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.loading = false;
                }
            });
  }
}
