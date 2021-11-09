import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@storeApp/auth/auth.facades';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authFacade:AuthFacade) { }

  ngOnInit(): void {
  }

  auth():void{
    console.log("LOgin")
    this.authFacade.Login("yo","psss")
  }

}
