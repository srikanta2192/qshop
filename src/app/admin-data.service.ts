import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  url: String = "http://localhost:8081"
  constructor(private http: HttpClient) { }

  getAdminData = (name: String) => {
    const entireData: Array<any> = JSON.parse(localStorage.getItem('entireData'))
    let result;
    if (entireData) {
      result = entireData.filter(admin =>
        admin.name === name
      );
    }
    return result;
  }

  createUser = (userData) => {
    return this.http.post(this.url + "/create/user", userData, httpOptions)
  }

  signInUser = (userData) => {
    return this.http.post(this.url + "/signIn", userData, httpOptions)
  }

  createShop = (shopData) => {
    return this.http.post(this.url + "/create/shop", shopData, httpOptions)
  }

  getUserShops = (email) => {
    return this.http.get(this.url + '/get/shops?adminEmail=' + email)
  }

}
