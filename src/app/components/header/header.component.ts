import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cart:CartService,private accountService:AuthenticationService,private router:Router) { }
public totalitem=0;
  ngOnInit(): void {
    this.cart.getproduct().subscribe(res=>{
    this.totalitem=res.length;

    })
  }
  logout() {
    this.accountService.logout();
    this.router.navigate(['/login']);
  }
}
