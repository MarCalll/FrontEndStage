import { Injectable, isDevMode } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

interface stanzeInterface {
  id : number;
  numeroStanza: string;
  display:string;
  ordine:string;
  letti:string;
  struttura:string;
  degenza:string;
}

@Injectable()
export class ConfigService {

  constructor (protected store: Store<any>,private http: HttpClient) {
  }

  EmptyElement: stanzeInterface = {
    id: 0,
    numeroStanza: null,
    display: null,
    ordine: null,
    letti: null,
    struttura: null,
    degenza: null,
  };

  newElement: stanzeInterface = {
    id: 0,
    numeroStanza: null,
    display: null,
    ordine: null,
    letti: null,
    struttura: null,
    degenza: null,
  };

  idForDetail$ = new BehaviorSubject<string>(null);

  displayedColumnsService:string[];
  path = "";
  tempContentDB : any[] = [];
  tempDataSource = new MatTableDataSource<any>();

  selectedDegenza = "";
  selectedStruttura = "";
  filteredTempContentDB : any[] = [];
  
  degenzeSet: Set<string> = new Set<string>();
  degenzeArr: string[] = []

  struttureSet: Set<string> = new Set<string>();
  struttureArr: string[] = []

  itemToDelete = null;

  listaMenu = [
    { nome: "Stanze/Letti", path: "stanzeletti" },

    ]

    public sidenavState:boolean = true
    public toggleSideNavStateService() {
      this.sidenavState = !this.sidenavState
    }
    voceSelezionata = ""

  getServerAddress(serverUrl: string): string {
    let firstPartPath = '';
    if (serverUrl) {
      if (isDevMode()) {
        firstPartPath = '/Admin';
      } else {
        firstPartPath = '/' + window.location.pathname.match('\/(.*?)\/')[1];
      }
      serverUrl = window.location.protocol + '//' + serverUrl;
    } else {
      throw new Error('Server url errato!')
    }
    const serverRest = serverUrl +  firstPartPath + '/s';
    return serverRest;
  }

  filterStrutturaDegenza() {
    if (this.selectedStruttura !== "" || this.selectedDegenza !== "") {
      this.filteredTempContentDB = this.tempContentDB.filter(ele =>
         (this.selectedStruttura === "" || ele['struttura'] === this.selectedStruttura) && (this.selectedDegenza === "" || ele['degenza'] === this.selectedDegenza)
      );
      this.tempDataSource.data = this.filteredTempContentDB;
    } else {
      this.tempDataSource.data = this.tempContentDB;
    }
  }

  loadDB() {
    this.http.get<any[]>(this.path).subscribe(data => {
      this.tempContentDB = data;
      this.tempDataSource.data = this.tempContentDB;
      this.buildDegenzeAndStrutturaArray();
    });

  } 

  deleteDB(item: any) { 
    this.http.delete(this.path + `/${item.id}`).subscribe(() => {
      this.tempContentDB = this.tempContentDB.filter(ele => ele.id !== item.id);
      this.tempDataSource.data = this.tempContentDB;
    });
  }

  editDB(item: any) {
    this.uploadDB(item);
  }

  addDB(newElement: any) {
    this.http.post<any>(this.path, newElement) 
      .subscribe(
        response => {
          console.log('Risposta dal server:', response);
          this.tempContentDB.push(response);
          this.tempDataSource.data = this.tempContentDB;
        },
        error => {
          console.error('Errore durante la richiesta POST:', error);
        }
      );
  }

  uploadDB(item: any) {
    if (item && item.id) {
      console.log('Dati inviati nella richiesta:', item);
  
      this.http.put<any>(this.path + `/${item.id}`, item)
        .subscribe(response => {
          const index = this.tempContentDB.findIndex(s => s.id === item.id);
          if (index !== -1) {
            this.tempContentDB[index] = response;
            this.tempDataSource.data = this.tempContentDB;
          }
        });
    } else {
      console.error('L\'oggetto stanza da aggiornare è indefinito o non ha un ID.');
    }
  }

  buildDegenzeAndStrutturaArray() {
    this.tempDataSource.data.forEach(ele =>{this.degenzeSet.add(ele['degenza'])}) 
    this.degenzeArr = Array.from(this.degenzeSet)
    this.tempDataSource.data.forEach(ele =>{this.struttureSet.add(ele['struttura'])}) 
    this.struttureArr = Array.from(this.struttureSet)
  }

}