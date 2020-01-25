import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDataService } from '../admin-data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  isCreateShop: boolean = false;
  isShopSelected: boolean = false;
  admin: Boolean = false;
  email: String = '';
  shopDetails: any = []
  selectedShopData: any;
  displayedColumns: Array<String> = ['name', 'email']
  constructor(private router: Router, private adminservice: AdminDataService) {

    if (localStorage.getItem('login') === 'true') {
      this.admin = localStorage.getItem('admin') === 'true'
      this.email = localStorage.getItem('email')
      this.adminservice.getUserShops(this.email).subscribe(data => {
        console.log(data)
        this.shopDetails = data;
        console.log(this.shopDetails)
      })
    } else {
      this.router.navigateByUrl('/login')
    }
  }

  ngOnInit() {

  }

  onCreateShop = () => {
    this.isCreateShop = true;
  }

  onShopSelect = (shop) => {
    this.isShopSelected = true;
    this.selectedShopData = shop
  }
}
