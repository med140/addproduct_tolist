import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import  { map } from 'rxjs/operators';
import { Credentials } from '../models/authentication';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSource = new ReplaySubject<Credentials | null>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }
  api="http://192.168.1.100:8080/api/Auth/login";
  login(model: Login){
    return this.http.post(this.api, model)
    .pipe(
      map(
        (response) => {
          const user = response as Credentials;
          console.log(user.accessToken);

          if( user ){
            sessionStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        }
      )
    );
  }
  setCurrentUser(user: Credentials){
    this.currentUserSource.next(user);
  }

  logout() {
    sessionStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
