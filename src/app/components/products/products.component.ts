import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productlist:any;
  constructor(private carteservice:CartService ,private api:ApiService) { }

  ngOnInit(): void {
    this.api.getdata().subscribe(data=>{
      this.productlist=data;
this.productlist.forEach((a:any)=>{
  Object.assign(a,{quantity:1,total:a.price});
});
    })
    console.log("test");

    console.log(this.productlist);

}
addtocart(item:any){
this.carteservice.addtocart(item)
}
}
