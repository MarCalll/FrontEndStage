import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../store/config.service';
 
@Component({
  selector: 'config-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})

export class GenericTableComponent implements OnInit {

  constructor(private http: HttpClient, protected service: ConfigService) {}

  @Input() displayedColumns: string[] = [];
  @Input() path: string;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = this.service.tempDataSource;
  itembackup = null

  ngOnInit() {
    this.service.path = this.path
    this.loadTableData();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadTableData() {
    this.service.loadDB();
    this.displayedColumns.push('actions');
  }

  onEdit(item: any) {
    item.editState = !item.editState;
    this.itembackup = { ...item };
    console.log(this.itembackup);
    item.counter = true;
  }

  onDelete(item:any) {
    this.service.deleteDB(item)
  }

  onSave(item:any) {
    this.service.editDB(item)
    item.editState = !item.editState

  }

  onCancel(item:any) {
    console.log(this.itembackup)
    item.editState = !item.editState;
  }
 
}