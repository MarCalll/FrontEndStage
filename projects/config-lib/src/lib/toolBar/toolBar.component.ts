import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../store/config.service';

@Component({
  selector: 'config-toolBar',
  templateUrl: './toolBar.component.html',
  styleUrls: ['./toolBar.component.scss']
})
export class ToolBarComponent implements OnInit {

  constructor(protected service :ConfigService) { }

  ngOnInit() {
  }

}
