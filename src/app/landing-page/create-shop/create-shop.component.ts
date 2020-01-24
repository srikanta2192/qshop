import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { AdminDataService } from 'src/app/admin-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.scss']
})
export class CreateShopComponent implements OnInit {

  isCreateSubUser: Boolean = false;
  createShopForm = this.fb.group({
    adminEmail: [''],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subUsers: this.fb.array(
      [
        this.fb.control('')
      ]
    ),
    address: this.fb.array(
      [
        this.fb.control('')
      ]
    )
  });
  admin: Boolean = false;
  createdSubUsers: Array<any> = [];
  createdAddress: Array<any> = [];
  subUsers = this.createShopForm.get('subUsers') as FormArray;
  address = this.createShopForm.get('address') as FormArray;

  constructor(private router: Router, private fb: FormBuilder, private adminService: AdminDataService) {

    if (localStorage.getItem('login') === 'true') {
      this.admin = localStorage.getItem('admin') === 'true'

    } else {
      this.router.navigateByUrl('/login')
    }
  }

  ngOnInit() { }

  onCreateSubUser = () => {
    this.isCreateSubUser = true;
  }

  onAddSubUser = () => {
    this.subUsers.push(this.fb.control(''))
  }

  subUserCreateEmit = (event) => {
    console.log(event)
    this.createdSubUsers.push(event.value)
  }

  getAddress = () => {
    return this.createShopForm.get('address') as FormArray;
  }
  getSubUsers = () => {
    return this.createShopForm.get('subUsers') as FormArray;
  }

  addressCreateEmit = (event) => {
    this.createdAddress.push(event.value);
  }

  onAddNewAddress = () => {
    this.address.push(this.fb.control(''))
  }
  onCreateShopSubmit = () => {
    if (this.createdSubUsers.length !== 0 && this.createdAddress.length !== 0) {
      console.log(this.createShopForm)
      let myAddressFormArray = this.getAddress();
      let mySubUserFormArray = this.getSubUsers();
      myAddressFormArray.setValue(this.createdAddress);
      mySubUserFormArray.setValue(this.createdSubUsers);
      this.createShopForm.patchValue({ adminEmail: localStorage.getItem('email') })
      this.adminService.createShop(
        this.createShopForm.value
      ).subscribe(data => {
        console.log(data)
      })
    } else if (this.createdSubUsers.length === 0) {
      window.alert("create sub users to create shop ")
    } else {
      window.alert(" create address to create shop")
    }
  }
}
