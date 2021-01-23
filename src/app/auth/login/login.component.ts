import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from "../../service/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router) {
      this.signinForm = this.fb.group({
        email: [''],
        password: ['']
      }) }

  ngOnInit(): void {
  }

  nameState:boolean = false;
  passState:boolean = false;
  nameValue:string = "";
  passValue:string = "";

  loginUser(e:any){
    e.preventDefault();
    if(this.nameValue != "" && this.passValue != ""){
    // window.location.href = "/dashboard";    
    this.authService.signIn(this.signinForm.value)
    }
    else{
      console.log("Please fill all field");
    }
  }

  setUsername(e:any){
    e.preventDefault();
    this.nameState = true;
    this.nameValue = e.target.value;
    if(this.nameValue == ""){
      this.nameState = false;
    }
  }

  setPass(e:any){
    e.preventDefault();
    this.passState = true;
    this.passValue = e.target.value;
    if(this.passValue == "")
    {
      this.passState = false;
    }
  }

}
