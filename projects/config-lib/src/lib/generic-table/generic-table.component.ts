import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../store/config.service';
 

@Component({
  selector: 'config-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})

export class GenericTableComponent implements OnInit {

  constructor(private http: HttpClient, private service: ConfigService) {}

  @Input() displayedColumns: string[] = [];
  @Input() path: string;

  ngOnInit() {
    this.service.loadDB(this.path);
    this.displayedColumns.push('actions')
  }

  dataSource = this.service.tempDataSource;

  @ViewChild(MatSort) sort: MatSort;
 
}