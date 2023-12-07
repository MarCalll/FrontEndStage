import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'config-config-lib',
  template: `
  <config-container></config-container>
  `,
  styleUrls: ['./style/index.scss'],
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class ConfigLibComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {

  }

}
