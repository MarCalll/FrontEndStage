import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../store/config.service';
import { MatDialog } from '@angular/material';

import { BedDialogBoxComponent } from '../dialog/bedDialogBox/bedDialogBox.component';
import { ConfirmDIalogBoxComponent } from '../dialog/confirmDIalogBox/confirmDIalogBox.component';
  


@Component({
  selector: 'config-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})

export class GenericTableComponent implements OnInit {

  constructor(private http: HttpClient, protected service: ConfigService, protected dialog:MatDialog) {}

  @Input() displayedColumns: string[];
  @Input() path: string;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = this.service.tempDataSource;
  restoreItem = null;
  selectedElement: any;

  ngOnInit() {
    this.service.path = this.path
    this.loadTableData();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.service.displayedColumnsService = this.displayedColumns
  }

  loadTableData() {
    this.service.loadDB();
    this.displayedColumns.push('actions');
  }

  onEdit(item: any) {
    item.editState = !item.editState;
    this.restoreItem = { ...item };
  }

  onDelete(item:any) {
    this.service.deleteDB(item);
  }

  onSave(item:any) {
    this.service.editDB(item)
    item.editState = !item.editState

  }

  openBedPanel(item: any) {
    
    console.log('Dati della riga selezionata:', item);

    const dialogRef = this.dialog.open(BedDialogBoxComponent, {
      data: { numeroStanza: item.numeroStanza, degenza: item.degenza }
    });
  }
   
  onCancel(item:any) {
    item.editState = !item.editState;

    for(let key of Object.keys(item)) {
      if(key != "editState" ){
        item[key] = this.restoreItem[key]
      }
    }
  }

  confirmOnDeletePanel(item :any) {
    this.service.itemToDelete = item;
    this.dialog.open(ConfirmDIalogBoxComponent)
  }


}