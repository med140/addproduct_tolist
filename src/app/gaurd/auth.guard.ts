import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private jwtHelper: JwtHelperService, private accountService: AuthenticationService){}

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(response => {
        console.log("TOKEN");
        console.log(response?.accessToken);
        console.log(response && !this.jwtHelper.isTokenExpired(response.accessToken));

        if( response && !this.jwtHelper.isTokenExpired(response.accessToken)){
          return true;
        }

        this.router.navigate(['/login']);
        return false;
      })
    );

}
}
