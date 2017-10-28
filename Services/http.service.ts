import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService{
  private baseURL = 'BASE_URL'; 
  
  constructor(private http: Http) {
  } 

  get(extUrl) {
    let url = this.baseURL + extUrl;
    //here we can intercept and change/edit the headers
    return this.http.get(url);
  }

  post(extUrl, bodyObj) {    
    let url = this.baseURL + extUrl; 
    return this.http.post(url, bodyObj);
  }

  put(extUrl, bodyObj) {    
    let url = this.baseURL + extUrl;
      return this.http.put(url, bodyObj);
  }

  delete(extUrl){
    let url = this.baseURL + extUrl;
    return this.http.delete(url);
  }

}