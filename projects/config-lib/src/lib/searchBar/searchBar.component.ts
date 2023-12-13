import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../store/config.service';

@Component({
  selector: 'config-searchBar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(protected service: ConfigService) { }

  ngOnInit() {
  }

  check(evento: any) {
    console.log(evento.target.value)
  }

}
