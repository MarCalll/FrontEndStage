import { Component, Inject} from '@angular/core';
import { ConfigService } from '../../store/config.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'config-editDialogBox',
  templateUrl: './editDialogBox.component.html',
  styleUrls: ['./editDialogBox.component.scss']
})
export class EditDialogBoxComponent {

  constructor(protected service:ConfigService, public dialogRef: MatDialogRef<EditDialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    console.log(this.service.displayedColumnsService)

    this.dialogRef.close();
  }

  onYesClick(item:any): void {
    console.log(item)
    this.service.editDB(item)
    this.dialogRef.close();
  }


}
