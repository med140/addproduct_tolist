import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public carteitemlist:any=[];
public productlist=new BehaviorSubject<any>([])
  constructor() { }
  getproduct(){
   return this.productlist.asObservable();
  }

  setproduct(product:any){
    this.carteitemlist.push(...product);
    this.productlist.next(product)
  }
  addtocart(product:any){
    this.carteitemlist.push(product);
    this.productlist.next(this.carteitemlist);
    this.gettotalprice();
  console.log(this.carteitemlist);

  }
  gettotalprice():number{
    let grandtotal=0;
    this.carteitemlist.map((a:any)=>{
      grandtotal+=a.total;
    })
    return grandtotal
  }
  removecarteitem(product:any){
    this.carteitemlist.map((a:any,index:any)=>{
      if(product.id==a.id){
        this.carteitemlist.splice(index,1);
        console.log("helo");

        console.log(index);


      }
    })
    this.productlist.next(this.carteitemlist);

  }
  removeallcart(){
    this.carteitemlist=[];
    this.productlist.next(this.carteitemlist);
  }
}
