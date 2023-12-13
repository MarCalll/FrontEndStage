import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../store/config.service';

@Component({
  selector: 'config-addRoomButton',
  templateUrl: './addRoomButton.component.html',
  styleUrls: ['./addRoomButton.component.scss']
})
export class AddRoomButtonComponent implements OnInit {

  constructor(protected service:ConfigService) { }

  ngOnInit() {
  }

  toggleAddBar() {
    if (this.service.whatsToggled != "addBar" ) {
      this.service.whatsToggled = "addBar";
    } else {
      this.service.whatsToggled = ""
    }
    
  }

}
