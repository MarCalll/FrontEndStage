import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../store/config.service';

@Component({
  selector: 'config-searchBar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.scss']
})
export class SearchBarComponent implements OnInit {
  
  dataSource = this.service.tempDataSource;

  constructor(protected service: ConfigService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.dataSource.filter = ""
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  

  check(evento: any) {
    console.log(evento.target.value)
  }

}
