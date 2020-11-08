import { dbUrlValidate } from './../registration-async-validators';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UsernameAvailabilityAsyncValidator } from '../registration-async-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;

  groupIds = ['A', 'B', 'C'];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: new FormControl('',
        [Validators.required], UsernameAvailabilityAsyncValidator(this.authService)),
      dbUrl: new FormControl(''),
      groupid: new FormControl('Select')
    }, {
      validator: [
        dbUrlValidate('dbUrl', 'groupid')
      ]
    });
  }


  onSubmit() {
    console.log(this.registerForm.value);
  }

  get dburl() { return this.registerForm.get('dburl'); }

  get groupid() { return this.registerForm.get('groupid'); }

  get username() { return this.registerForm.get('username'); }

}
