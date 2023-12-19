import { Component } from '@angular/core';
import { ConfigService } from '../store/config.service';

@Component({
  selector: 'config-strutturaDegenza',
  templateUrl: './strutturaDegenza.component.html',
  styleUrls: ['./strutturaDegenza.component.scss']
})
export class StrutturaDegenzaComponent {

  constructor(protected service :ConfigService) { }


  setSelectedStruttura(struttura:string) {
    this.service.selectedStruttura = struttura;
    this.service.filterStrutturaDegenza();
  }

  setSelectedDegenza(degenza:string) {
    this.service.selectedDegenza = degenza;
    this.service.filterStrutturaDegenza();
  }

}
