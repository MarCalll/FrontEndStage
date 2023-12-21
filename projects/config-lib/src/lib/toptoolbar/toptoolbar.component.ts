import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../store/config.service';

@Component({
  selector: 'config-toptoolbar',
  templateUrl: './toptoolbar.component.html',
  styleUrls: ['./toptoolbar.component.scss']
})
export class ToptoolbarComponent implements OnInit {

  constructor(protected service:ConfigService) { }

  ngOnInit() {
  }

}
