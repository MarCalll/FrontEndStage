import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../store/config.service';

@Component({
  selector: 'config-strutturaDegenza',
  templateUrl: './strutturaDegenza.component.html',
  styleUrls: ['./strutturaDegenza.component.scss']
})
export class StrutturaDegenzaComponent implements OnInit {

  constructor(private service :ConfigService) { }

  ngOnInit() {
  }

  setFilter(colonna:string,valore:any) {
    this.service.filterDB(colonna,valore);
  }

}
