import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../store/config.service';

@Component({
  selector: 'config-searchButton',
  templateUrl: './searchButton.component.html',
  styleUrls: ['./searchButton.component.scss']
})
export class SearchButtonComponent implements OnInit {

  constructor(protected service:ConfigService) { }

  ngOnInit() {
  }

}
