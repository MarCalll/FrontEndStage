import { Component, Inject } from '@angular/core';
import { ConfigService } from '../../store/config.service';
import {MatDialog} from '@angular/material';
import { StrutturaDegenzaComponent } from '../../strutturaDegenza/strutturaDegenza.component';
import { AddDialogBoxComponent } from '../../dialog/AddDialogBox/AddDialogBox.component';

@Component({
  selector: 'config-addRoomButton',
  templateUrl: './addRoomButton.component.html',
  styleUrls: ['./addRoomButton.component.scss']
})
export class AddRoomButtonComponent {

  constructor(protected service:ConfigService,protected dialog:MatDialog) { }

  openAddRoomDialog() {
    this.dialog.open(AddDialogBoxComponent)
  }

}
