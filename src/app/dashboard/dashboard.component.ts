import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../service/auth/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService ) {
   }


   permission:any;
   user:any ;
  ngOnInit(): void {
    this.permission = localStorage.getItem('permission');
    this.user = localStorage.getItem('username')?.toUpperCase();
  }
  
  collapsed = true;
  toggleDropdown = false;

  toggleSideNav: boolean = true;
  toggleNav() {
    if (this.toggleSideNav == false) {
      this.toggleSideNav = true;
    }
    else {
      this.toggleSideNav = false;
    }
  }

  activePage: string = "SERP";
  selectedList(){
    this.activePage = this.router.url;
    this.activePage = this.activePage.slice(11);
  }

  LogOut(){
    console.log("asdf");
    this.authService.doLogout();
  }

}
