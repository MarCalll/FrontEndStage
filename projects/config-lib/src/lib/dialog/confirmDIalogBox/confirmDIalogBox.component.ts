import { Component, Inject } from '@angular/core';
import { ConfigService } from '../../store/config.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'config-confirmDIalogBox',
  templateUrl: './confirmDIalogBox.component.html',
  styleUrls: ['./confirmDIalogBox.component.scss']
})
export class ConfirmDIalogBoxComponent {

  constructor(protected service:ConfigService, public dialogRef: MatDialogRef<ConfirmDIalogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSiClick(): void {
    this.service.deleteDB(this.service.itemToDelete);
    this.dialogRef.close()
  }

}
