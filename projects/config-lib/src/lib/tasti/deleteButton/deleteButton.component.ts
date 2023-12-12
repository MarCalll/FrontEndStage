import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../store/config.service';

@Component({
  selector: 'config-deleteButton',
  templateUrl: './deleteButton.component.html',
  styleUrls: ['./deleteButton.component.scss']
})
export class DeleteButtonComponent implements OnInit {

  constructor(protected service: ConfigService) { }

  ngOnInit() {
  }

}
