import { Component, Inject } from '@angular/core';
import { ConfigService } from '../../store/config.service';
import {MatDialog} from '@angular/material';
import { AddDialogBoxComponent } from '../../dialog/AddDialogBox/AddDialogBox.component';

@Component({
  selector: 'config-addRoomButton',
  templateUrl: './addRoomButton.component.html',
  styleUrls: ['./addRoomButton.component.scss']
})
export class AddRoomButtonComponent {

  constructor(protected service:ConfigService,protected dialog:MatDialog) { }

  openAddRoomDialog() {
    this.emptyDegenzaCheck()
    this.emptyStrutturaCheck()
    this.dialog.open(AddDialogBoxComponent)
  }

  emptyDegenzaCheck() {
    if (this.service.selectedDegenza !== null || this.service.selectedDegenza !== "") {
      this.service.newElement["degenza"] = this.service.selectedDegenza
    }
  }

  emptyStrutturaCheck() {
    if (this.service.selectedStruttura !== null || this.service.selectedStruttura !== "") {
      this.service.newElement["struttura"] = this.service.selectedStruttura
    }
  }

}
