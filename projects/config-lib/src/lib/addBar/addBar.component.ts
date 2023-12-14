import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../store/config.service';

@Component({
  selector: 'config-addBar',
  templateUrl: './addBar.component.html',
  styleUrls: ['./addBar.component.scss']
})
export class AddBarComponent implements OnInit {

  constructor(protected service:ConfigService) { }

  restoreEmptyElement = { ...this.service.newElement }

  ngOnInit() {
  }

  addElement(item:any) {
    this.service.addDB(this.service.newElement);
  }
  clearBox() {
    this.service.newElement =  { ...this.restoreEmptyElement }
  }

}
