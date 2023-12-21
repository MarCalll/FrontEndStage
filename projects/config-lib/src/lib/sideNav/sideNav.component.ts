import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../store/config.service';

@Component({
  selector: 'config-sideNav',
  templateUrl: './sideNav.component.html',
  styleUrls: ['./sideNav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(protected service:ConfigService) { }

  ngOnInit() {
  }

  topBarTitle:string

  listaMenu = this.service.listaMenu
  backuplistaMenu = this.listaMenu
  parolaRicercata = null

  searchMenuInput(evento:any) {
    this.parolaRicercata = evento.target.value.toLowerCase()
    this.listaMenu = []

    for(let voce of this.backuplistaMenu) {

      if(voce.nome.toLowerCase().includes(this.parolaRicercata)) {
        this.listaMenu.push(voce)
        console.log(voce)
        }
      }
    }

  setTopBarTitle (item:string) {
    this.service.voceSelezionata = item
  }

}
