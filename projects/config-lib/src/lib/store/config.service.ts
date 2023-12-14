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
  degenza:string;
  struttura:string;
}


@Injectable()
export class ConfigService {

  newElement: stanzeInterface = {
    id: 0,
    numeroStanza: '',
    display: '',
    ordine: '',
    letti: '',
    degenza: '',
    struttura: ''
  };

  idForDetail$ = new BehaviorSubject<string>(null);

  path = "";
  tempContentDB : any[] = [];
  tempDataSource = new MatTableDataSource<any>();

  selectedDegenza = "";
  selectedStruttura = "";
  filteredTempContentDB : any[] = [];
  addState:boolean;

  whatsToggled = '';


  constructor (protected store: Store<any>,private http: HttpClient) {
  }

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

  editButton() {
    console.log("edit funge")
  }

  loadDB() {
    this.http.get<any[]>(this.path).subscribe(data => {
      this.tempContentDB = data;
      this.tempDataSource.data = this.tempContentDB;
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

  addStanza(newElement: any) {
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

}