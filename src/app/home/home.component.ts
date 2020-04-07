import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 constructor(private router:Router, private authservice: AuthService ) { }

  ngOnInit() {
  }

  
  onLoadServer( id:number ){//
    //navigate to servers
    this.router.navigate(['/servers', id , 'edit'], {queryParams:{allowEdit:1}, fragment :'loading'});
  }

  //log in
  onLogin(){
      this.authservice.login();
  }

  //log out
  onLogOut(){
      this.authservice.logOut();
  }

}
