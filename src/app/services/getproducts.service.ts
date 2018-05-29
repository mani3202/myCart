import { Injectable, Input } from '@angular/core';
import {Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GetproductsService {

  constructor(@Inject(Http) private http: Http) { }
  getimage(name)
  {
    return this.http.post('http://localhost:7000/image', {'brand':name})
             .map((res: Response) => res.json())
             .catch((err) => {
  
                 // Do messaging and error handling here
  
                 return Observable.throw(err)
             })
  }
}
