import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminDataService } from 'src/app/admin-data.service';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-create-sub-user',
  templateUrl: './create-sub-user.component.html',
  styleUrls: ['./create-sub-user.component.scss']
})
export class CreateSubUserComponent implements OnInit {

  @Output() emitUserDetails = new EventEmitter<any>();

  createSubUserForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  userCreated: Boolean = false;
  constructor(private fb: FormBuilder, private adminService: AdminDataService) { }

  ngOnInit() {
  }

  onCreateSubUserSubmit = () => {
    const { name, email, password } = this.createSubUserForm.value
    const userData = {
      name, email, password, admin: false
    }
    this.adminService.createUser(userData).subscribe(data => {
      console.log(data)
      if (data['create']) {
        this.userCreated = true;
        this.emitUserDetails.emit(this.createSubUserForm)
      }
    })
  }

}
