import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  jwtHelper = new JwtHelperService();

  constructor(private router: Router) {}

  canActivate(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      if (user.token && !this.jwtHelper.isTokenExpired(user.token)) {
        return true;
      }
    }
    // User is not logged in or token is invalid/expired, redirect to login page
    this.router.navigate(['/auth/login']);
    return false;
  }
}
