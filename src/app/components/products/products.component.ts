import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productlist:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getdata().subscribe(data=>{
      this.productlist=data;

    })
    console.log("test");

    console.log(this.productlist);

}
}
