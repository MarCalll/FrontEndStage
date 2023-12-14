import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../store/config.service';

@Component({
  selector: 'config-addBar',
  templateUrl: './addBar.component.html',
  styleUrls: ['./addBar.component.scss']
})
export class AddBarComponent implements OnInit {




  constructor(protected serviceAdd:ConfigService) { }

  ngOnInit() {

  }

  addStanza() {
    this.serviceAdd.addStanza(this.serviceAdd.newStanza);
  }

}
