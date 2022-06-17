import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService} from '@app/services/account.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css',
              './css/main.css',
              './css/util.css',
              './vendor/select2/select2.min.css',
              './vendor/daterangepicker/daterangepicker.css',
              './vendor/css-hamburgers/hamburgers.min.css',
              './fonts/font-awesome-4.7.0/css/font-awesome.min.css',
              './fonts/iconic/css/material-design-iconic-font.min.css',
              './vendor/animate/animate.css',
              './vendor/animsition/css/animsition.min.css',
              './vendor/bootstrap/css/bootstrap.min.css']
})
export class LogInComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
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
    this.accountService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                this.router.navigateByUrl(returnUrl);
            },
            error: error => {
                this.loading = false;
            }
        });
}

}
