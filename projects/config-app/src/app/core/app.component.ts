import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'config-app';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate([{ outlets: {first: ['startadmin'] }}], {skipLocationChange: true});
  }
  
  ngOnDestroy(): void {
  }
}
