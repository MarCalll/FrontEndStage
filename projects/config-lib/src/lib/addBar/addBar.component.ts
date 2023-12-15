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
    console.log("init")
  }

  ngOnDestroy(): void {
    this.service.newElement =  { ...this.restoreEmptyElement } 
  }

  addElement(item:any) {
    this.service.addDB(this.service.newElement);
  }
  clearBox() {
    this.service.newElement =  { ...this.restoreEmptyElement } 
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
