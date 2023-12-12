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
  digenza:string;
  struttura:string;
  pino: string;
}


@Injectable()
export class ConfigService {

  idForDetail$ = new BehaviorSubject<string>(null);

  path = "";
  tempContentDB : stanzeInterface[] = [];
  tempDataSource = new MatTableDataSource<stanzeInterface>();

  selectedDegenza = "";
  selectedStruttura = "";
  filteredTempContentDB : stanzeInterface[] = [];

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
         (this.selectedStruttura === "" || ele['struttura'] === this.selectedStruttura) && (this.selectedDegenza === "" || ele['digenza'] === this.selectedDegenza)
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
    this.http.get<stanzeInterface[]>(this.path).subscribe(data => {
      this.tempContentDB = data;
      this.tempDataSource.data = this.tempContentDB;
    });

  } 

  deleteDB(elemento: stanzeInterface) { 
    this.http.delete(this.path + `/${elemento.id}`).subscribe(() => {
      this.tempContentDB = this.tempContentDB.filter(ele => ele.id !== elemento.id);
      this.tempDataSource.data = this.tempContentDB;
    });
  }



}