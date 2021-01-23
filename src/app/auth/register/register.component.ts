import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router) { 
      this.signupForm = this.fb.group({
        name: [''],
        email: [''],
        password: [''],
        credit: [0],
        permission: [0]
      })
    }

  ngOnInit(): void {
  }

  nameState:boolean = false;
  emailState:boolean = false;
  passState:boolean = false;
  confirmPassState:boolean = false;
  nameValue:string = "";
  emailValue:string = "";
  passValue:string = "";
  confirmPassValue:string = "";

  registerUser(e:any){
    e.preventDefault();
    if(this.passValue == this.confirmPassValue && this.passValue != "" && this.nameValue != "")
    {
      this.authService.signUp(this.signupForm.value).subscribe((res) => {
        if (res.result) {
          this.signupForm.reset()
          this.router.navigate(['login']);
        }
      })
    }
    else{
      console.log("no");
    }
  }

  setUsername(e:any){
    e.preventDefault();
    this.nameState = true;
    this.nameValue = e.target.value;
    if(this.nameValue == "")
    {
      this.nameState = false;
    }
  }

  setUseremail(e:any){
    e.preventDefault();
    this.emailState = true;
    this.emailValue = e.target.value;
    if(this.emailValue == "")
    {
      this.emailState = false;
    }
  }

  setPass(e:any){
    e.preventDefault();
    this.passState = true;
    this.passValue = e.target.value;
    if(this.passValue == ""){
      this.passState = false;
    }
  }
  setConfirmPass(e:any){
    e.preventDefault();
    this.confirmPassState = true;
    this.confirmPassValue = e.target.value;
    if(this.confirmPassValue == ""){
      this.confirmPassState = false;
    }
  }

}
