import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../store/config.service';


@Component({
  selector: 'config-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ContainerComponent implements OnInit {

  

  constructor(protected service:ConfigService) { 

  }

  ngOnInit() {
    
  }

}
