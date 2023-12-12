import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../store/config.service';

@Component({
  selector: 'config-saveButton',
  templateUrl: './saveButton.component.html',
  styleUrls: ['./saveButton.component.scss']
})
export class SaveButtonComponent implements OnInit {

  constructor(public serviceButton: ConfigService) { }

  ngOnInit() {
  }

}
