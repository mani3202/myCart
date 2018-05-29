import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { GetproductsService } from '../../services/getproducts.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent implements OnInit {

  constructor(public http:Http,public getProductService:GetproductsService) { }
brand:string = '';

product:any ;
productDisplay:boolean = false;
  brandList = [
    {value: 'Samsung', viewValue: 'Samsung'},
    {value: 'Apple', viewValue: 'Apple'},
    {value: 'Moto', viewValue: 'Moto'},
    {value: 'Lenovo', viewValue: 'Lenovo'},
    {value: 'HTC', viewValue: 'HTC'},
    {value: 'Google', viewValue: 'Google'},
    {value: 'Black Berry', viewValue: 'Black Berry'}
  ];

  get()
  {
    this.getProductService.getimage(this.brand).subscribe(res => 
    {
       console.log(res.output[0]);
      this.productDisplay = true;
      this.product = res.output;
    })
    
    
  }

  ngOnInit() {
  }

}
