import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthFacade } from '@storeApp/auth/auth.facades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  login$: Observable<string> = of()
  constructor(private authFacade:AuthFacade,private router:Router) { }

  ngOnInit(): void {
    this.login$ = this.authFacade.Login$()
  }

  Logout():void{
    this.router.navigate(["/auth"])
    localStorage.clear()
  }
}
