import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private fb:FormBuilder,private rout :Router,private authentication:AuthenticationService) { }
  validateForm!: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    let currentUser: any;
    this.authentication.currentUser$.pipe(take(1)).subscribe(res => currentUser = res);

      if( currentUser ){
         this.rout.navigate(['/products']);
      }
  }






  submitForm(){
    if (this.validateForm.valid) {
      this.authentication.login(this.validateForm.value)
      .toPromise()
      .then(
        res => {
          console.log("med");

          console.log(res);

          this.rout.navigate(['/products'])


        },
      );
    } else {
           alert("ereur");
    }

  }
}
