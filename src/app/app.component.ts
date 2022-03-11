import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from './models/authentication';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private accountService:AuthenticationService,private router:Router){}
  ngOnInit(): void {
    this.setCurrentUser();
  }

  users: any;

  setCurrentUser(){
    const user: Credentials = JSON.parse(sessionStorage.getItem('user') as string);
    this.accountService.setCurrentUser(user);
  }


}
