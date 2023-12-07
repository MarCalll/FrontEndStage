import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  surname: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen',surname:'H'},
  {name: 'Helium',surname:'He'},
  {name: 'Lithium',surname:''},
];

@Component({
  selector: 'config-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  displayedColumns: string[] = ['name','surname','actions'];
  arrayDB = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.arrayDB.sort = this.sort;
  }
}
