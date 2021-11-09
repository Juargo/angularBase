import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthFacade } from '@storeApp/auth/auth.facades';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  login$: Observable<string> = of()
  constructor(private authFacade:AuthFacade) { }

  ngOnInit(): void {
    this.login$ = this.authFacade.Login$()
  }

}
