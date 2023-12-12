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

  constructor(private http: HttpClient, protected service: ConfigService) {}

  @Input() displayedColumns: string[] = [];
  @Input() path: string;

  editModeToggled = false

  ngOnInit() {
    this.service.path = this.path
    this.loadTableData();
  }

  loadTableData() {
    this.service.loadDB();
    this.displayedColumns.push('actions');
  }

  onEdit(item: any) {
    item.isEdit = !item.isEdit;
  }

  onDelete(item:any) {
    this.service.deleteDB(item)
  }

  onSave(item:any) {
    this.service.editDB(item)
  }

  dataSource = this.service.tempDataSource;

  @ViewChild(MatSort) sort: MatSort;
 
}