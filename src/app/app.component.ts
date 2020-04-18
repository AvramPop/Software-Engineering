import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { AuthenticationService } from './_services';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    back_to_clients_page() {
    debugger
      const user: User = this.authenticationService.get_current_user();
      // @ts-ignore

      this.router.navigate([user.get_url()]);
    }
}