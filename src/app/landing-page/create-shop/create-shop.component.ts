import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.scss']
})
export class CreateShopComponent implements OnInit {

  isCreateSubUser: Boolean = false;
  createShopForm = this.fb.group({
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
  createdSubUsers: Array<any> = [];
  createdAddress: Array<any> = [];
  subUsers = this.createShopForm.get('subUsers') as FormArray;
  address = this.createShopForm.get('address') as FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onCreateSubUser = () => {
    this.isCreateSubUser = true;
    console.log(this.subUsers)
  }

  onAddSubUser = () => {
    this.subUsers.push(this.fb.control(''))
  }

  subUserCreateEmit = (event) => {
    console.log(event)
    this.createdSubUsers.push(event)
  }

  getAddress = () => {
    return this.createShopForm.get('address') as FormArray;
  }

  addressCreateEmit = (event) => {
    this.createdAddress.push(event);
    const existingAddress = this.getAddress();
    existingAddress.value[event.index] = event.address
    console.log(this.createShopForm)
  }

  onAddNewAddress = () => {
    this.address.push(this.fb.control(''))
  }
  onCreateShopSubmit = () => {
    if (this.createdSubUsers.length === 0) {
      // window.alert("create sub users to create shop ")
    }
  }
}
