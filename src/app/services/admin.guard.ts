import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let AdminGuard = JSON.parse(localStorage.getItem('currentUser'));
        if (AdminGuard.role == 'Administrator') {
            // logged in admin so return true
            return true;
        }

        // not logged in admin so redirect to dashboard with the return url
        this.router.navigate(['/dashboard'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}