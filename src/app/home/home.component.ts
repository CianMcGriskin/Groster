import { Component } from '@angular/core';

import { AccountService } from '@app/services/account.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    account = this.accountService.accountValue;

    constructor(private accountService: AccountService) { }
}