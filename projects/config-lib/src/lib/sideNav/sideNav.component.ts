import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../store/config.service';

@Component({
  selector: 'config-sideNav',
  templateUrl: './sideNav.component.html',
  styleUrls: ['./sideNav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(protected service:ConfigService) { }

  ngOnInit() {
  }

}
