import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../store/config.service';
import { MatDialog } from '@angular/material';
import { EditDialogBoxComponent } from '../../dialog/editDialogBox/editDialogBox.component';

@Component({
  selector: 'config-editButton',
  templateUrl: './editButton.component.html',
  styleUrls: ['./editButton.component.scss']
})
export class EditButtonComponent implements OnInit {

  constructor(public serviceButton: ConfigService,protected dialog:MatDialog) { }

  ngOnInit() {
  }

}
