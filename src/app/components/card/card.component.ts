import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
public product:any=[];
public grandtotal=0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getproduct().subscribe(res=>{
      this.product=res;
      this.grandtotal=this.cart.gettotalprice()
      console.log("i am strong");

      console.log(this.product);

    })
  }
  removeItem(item: any){
    this.cart.removecarteitem(item);
  }
  emptycart(){
    this.cart.removeallcart();
  }
}
