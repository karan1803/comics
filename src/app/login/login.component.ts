import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: any;
  pwd: any;
  name_error: boolean;
  pwd_error: boolean;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  name_check(event){
    if(this.name){
      if(this.name.length < 6 ){
        this.name_error = true;
      }else{
        this.name_error = false;
      }
    }else{
      this.name_error = true;
    }
  }
  pwd_check(event){
    if(this.pwd){
      if(this.pwd.length < 6 ){
        this.pwd_error = true;
      }else{
        this.pwd_error = false;
      }
    }else{
      this.pwd_error = true;
    }
  }
  
  loginvalid(){
    if(this.name){
      if(this.name.length < 6 ){
        this.name_error = true;
      }else{
        this.name_error = false;
      }
    }else{
      this.name_error = true;
    }
    
    if(this.pwd){
      if(this.pwd.length < 6 ){
        this.pwd_error = true;
      }else{
        this.pwd_error = false;
      }
    }else{
      this.pwd_error = true;
    }

    if(this.name && this.pwd){
      if(this.name.length < 6 || this.pwd.length < 6){
        return;
      }

    }else{
      return;
    }
    this.router.navigate(['/home']);
  }

}
