import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  category:string ='';
  brand:string = '';
  modelno:any;
  price:number;
  count:number;
  files :any;

  categoryList = [
    {value: 'Mobile', viewValue: 'Mobile'},
    {value: 'Computer', viewValue: 'Computer'},
    {value: 'Electronics', viewValue: 'Electronics'}
  ];

  brandList = [
    {value: 'Samsung', viewValue: 'Samsung'},
    {value: 'Apple', viewValue: 'Apple'},
    {value: 'Moto', viewValue: 'Moto'},
    {value: 'Lenovo', viewValue: 'Lenovo'},
    {value: 'HTC', viewValue: 'HTC'},
    {value: 'Google', viewValue: 'Google'},
    {value: 'Black Berry', viewValue: 'Black Berry'}
  ];

  selectFile($event) {
    this.files = $event.target.files || $event.srcElement.files;
    
  }
  
  upload()
  {
    const formData: any = new FormData();
    formData.append("category",this.category);
    formData.append("brand",this.brand);
    formData.append("modelno",this.modelno);
    formData.append("price",this.price);
    formData.append("totalcount",this.count);

    formData.append("userreg", this.files[0], this.files[0]['name']);
  
    const headers = new Headers({});
    let options = new RequestOptions({ headers });
    let url = 'http://localhost:7000/userreg'

    this.http.post(url,formData, options).subscribe(res => {
      console.log(res)
    });
  }
  constructor(public http:Http) { }

  ngOnInit() {
  }

}
