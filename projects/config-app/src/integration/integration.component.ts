import { Component, OnInit, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from 'projects/config-lib/src/lib/store/classes/config';

@Component({
  selector: 'config-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit {

  messageListener: any;
  config: Config;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (isDevMode()) this.config = new Config('', 'CARMEDPOANDRIA', 'first', 'startadmin', false, 'GIOIELLO');
  }

  ngOnDestroy(): void {
  }

}
