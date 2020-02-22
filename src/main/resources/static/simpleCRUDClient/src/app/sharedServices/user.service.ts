import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw';
import { map } from "rxjs/operators";
import {User} from '../user'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string='http://localhost:8080/api';
  // private headers = new Headers({'Content-Type':'application/json'});
  // private options = new RequestOptions({headers:this.headers});

  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get(this.baseUrl + '/users');
    // .catch(this.errorHandler);
  }

  getUser(id:Number){
    return this._http.get(this.baseUrl + '/user'+id).pipe(map((resp:Response)=>resp.json()));
    // .catch(this.errorHandler);
  }

  deleteUser(id:Number){
    return this._http.delete(this.baseUrl + '/user'+id).pipe(map((resp:Response)=>resp.json()));
    // .catch(this.errorHandler);
  }

  createUser(user:User){
    return this._http.post(this.baseUrl + '/users',JSON.stringify(user)).pipe(map((resp:Response)=>resp.json()));
    // .catch(this.errorHandler);
  }

  updateUser(user:User){
    return this._http.put(this.baseUrl + '/users',JSON.stringify(user)).pipe(map((resp:Response)=>resp.json()));
    // .catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error||"Server Error");

  }
}
