import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../store/config.service';

@Component({
  selector: 'config-cancelButton',
  templateUrl: './cancelButton.component.html',
  styleUrls: ['./cancelButton.component.scss']
})
export class CancelButtonComponent implements OnInit {

  constructor(protected serviceButton:ConfigService) { }

  ngOnInit() {
  }

}
