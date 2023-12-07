import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'Lithium'},
];

@Component({
  selector: 'config-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  displayedColumns: string[] = ['name','actions'];
  arrayDB = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.arrayDB.sort = this.sort;
  }
}
