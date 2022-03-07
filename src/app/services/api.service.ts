import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
api="https://fakestoreapi.com/products/";
  constructor(private http:HttpClient) { }
  getdata():Observable<any>{
    return  this.http.get(this.api);
   }
  }
