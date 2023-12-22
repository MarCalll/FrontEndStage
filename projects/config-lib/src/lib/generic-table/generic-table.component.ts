import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../store/config.service';
import { MatDialog } from '@angular/material';

import { BedDialogBoxComponent } from '../dialog/bedDialogBox/bedDialogBox.component';
import { ConfirmDIalogBoxComponent } from '../dialog/confirmDIalogBox/confirmDIalogBox.component';
import { EditDialogBoxComponent } from '../dialog/editDialogBox/editDialogBox.component';
  


@Component({
  selector: 'config-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})

export class GenericTableComponent implements OnInit {

  constructor(private http: HttpClient, protected service: ConfigService, protected dialog:MatDialog) {}

  @Input() displayedColumns: string[]
  @Input() path: string;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = this.service.tempDataSource;
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

  openEditRoomDialog(item: any) {
    this.dialog.open(EditDialogBoxComponent, {
      data: { 
        id: item.id,
        numeroStanza:item.numeroStanza,
        display:item.display,
        ordine:item.ordine,
        letti:item.letti,
        struttura:item.struttura,
        degenza:item.degenza}
    });
  }

  openBedPanel(item: any) {
    this.dialog.open(BedDialogBoxComponent, {
      data: { numeroStanza: item.numeroStanza, degenza: item.degenza }
    });
  }
   
  confirmOnDeletePanel(item :any) {
    this.service.itemToDelete = item;
    this.dialog.open(ConfirmDIalogBoxComponent)
  }


}