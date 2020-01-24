import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit {

  @Input() index: Number;
  @Output() emitAddressDetails = new EventEmitter<any>();

  isAddressSubmitted: Boolean = false;
  createAddressForm = this.fb.group({
    plot: ['', Validators.required],
    locality: ['', Validators.required],
    pincode: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onCreateAddressSubmit = () => {
    this.isAddressSubmitted = true;
    this.emitAddressDetails.emit(
      this.createAddressForm,
    )
  }
}
