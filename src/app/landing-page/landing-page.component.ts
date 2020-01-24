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
  admin: Boolean = false;
  email: String = '';
  constructor(private router: Router, private adminservice: AdminDataService) {
    
    if (localStorage.getItem('login') === 'true') {
      this.admin = localStorage.getItem('admin') === 'true'

    } else {
      this.router.navigateByUrl('/login')
    }
  }
  ngOnInit() {
    this.email = localStorage.getItem('email')
    this.adminservice.getUserShops( this.email ).subscribe(data => {
      console.log(data)
    })
  }

  onCreateShop = () => {
    this.isCreateShop = true;
  }

}
