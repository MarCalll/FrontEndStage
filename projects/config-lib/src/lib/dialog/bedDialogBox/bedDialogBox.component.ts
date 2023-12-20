import { Component, OnInit, Inject } from '@angular/core';
import { ConfigService } from '../../store/config.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'config-BedDialogBox',
  templateUrl: './BedDialogBox.component.html',
  styleUrls: ['./BedDialogBox.component.scss']
})
export class BedDialogBoxComponent implements OnInit {
  numeroStanza: string;
  degenza: string;

  constructor(protected service:ConfigService, public dialogRef: MatDialogRef<BedDialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  restoreEmptyElement = { ...this.service.newElement }

  ngOnInit() {
    this.service.loadDB();
  }

  ngOnDestroy(): void {
    this.service.newElement =  { ...this.restoreEmptyElement } 
  }

}
