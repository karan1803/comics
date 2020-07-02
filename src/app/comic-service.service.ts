import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {

  constructor(private http:HttpClient) {

   }
  Base_url=environment.URL;
  common_url = `${this.Base_url}characters/?api_key=c45d7aa182afe1396ca799ec772e411255121346&format=json`;


  getListCharaters(data):Promise<any>{
    let url=this.common_url+data;
    let headers = new HttpHeaders({
      'Accept':'application/json',
    });
    return this.http.get(url,{headers:headers}).toPromise();
  }
  getcharacterdetail(data):Promise<any>{
    let url=data;
    let headers = new HttpHeaders({
      'Accept':'application/json',
    });
    return this.http.get(url,{headers:headers}).toPromise();
  }
}
