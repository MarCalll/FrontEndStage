import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
 
interface Stanza {
  id: number;
  numeroStanza: string;
  display: string;
  ordine: string;
  letti: string;
}
@Component({
  selector: 'config-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})

export class GenericTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'numeroStanza', 'display', 'ordine', 'letti', 'actions'];

  dataSource = new MatTableDataSource<Stanza>();

  stanze: Stanza[] = [];

  showAddForm: boolean = false;
  
  newStanza: Stanza = {
    id: 0,
    numeroStanza: '',
    display: '',
    ordine: '',
    letti: ''
  };

  @ViewChild(MatSort) sort: MatSort;
 
  constructor(private http: HttpClient) {}
 
  ngOnInit() {
    this.loadStanze();
  }
 
  loadStanze() {
    this.http.get<Stanza[]>('http://localhost:8080/api/stanze').subscribe(data => {
      this.stanze = data;
      this.dataSource.data = this.stanze;
    });
  } 

 
}