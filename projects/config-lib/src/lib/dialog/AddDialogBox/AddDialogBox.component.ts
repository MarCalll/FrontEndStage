import { Component, Inject} from '@angular/core';
import { ConfigService } from '../../store/config.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'config-AddDialogBox',
  templateUrl: './AddDialogBox.component.html',
  styleUrls: ['./AddDialogBox.component.scss']
})
export class AddDialogBoxComponent {

  constructor(protected service:ConfigService, public dialogRef: MatDialogRef<AddDialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  restoreEmptyElement = { ...this.service.newElement }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.service.newElement =  { ...this.restoreEmptyElement } 
  }

  clearBox() {
    this.service.newElement =  { ...this.restoreEmptyElement } 
  }

  addElement(item:any) {
    this.service.addDB(this.service.newElement);
  }

  checkNewElement():boolean {
    let keys = Object.keys(this.service.newElement)
    for(let key of keys) {
      if (((this.service.newElement[key] !== null) && (this.service.newElement[key] !== '') && (key !== 'id'))) {
        return true 
      }
    }
    return false
  }
  
}
