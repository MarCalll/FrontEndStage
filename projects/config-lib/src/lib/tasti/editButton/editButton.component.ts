import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../store/config.service';

@Component({
  selector: 'config-editButton',
  templateUrl: './editButton.component.html',
  styleUrls: ['./editButton.component.scss']
})
export class EditButtonComponent implements OnInit {

  constructor(public serviceButton: ConfigService) { }

  ngOnInit() {
  }

}
