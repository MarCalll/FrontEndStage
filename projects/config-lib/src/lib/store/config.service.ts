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

  tempContentDB : stanzeInterface[] = [];
  tempDataSource = new MatTableDataSource<stanzeInterface>();

  filteredTempContentDB: stanzeInterface[] = [];
  c = 0;

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

  filterDB(colonna:string,valore:string) {
    if (valore != "") {
      this.filteredTempContentDB = this.tempContentDB.filter(ele => ele[colonna] === valore)
     this.tempDataSource.data = this.filteredTempContentDB;
      
    } else {
      this.tempDataSource.data = this.tempContentDB;
   }
  }

  editButton() {
    console.log("edit funge")
  }

  loadDB(path:string) {
    this.http.get<stanzeInterface[]>(path).subscribe(data => {
      this.tempContentDB = data;
      this.tempDataSource.data = this.tempContentDB;
    });

  } 

//  filterDB(colonna:string,valore:string) {
//    if (valore != "") {
//      this.filteredTempContentDB = this.tempContentDB.filter(ele => ele[colonna] === valore)
//      this.tempDataSource.data = this.filteredTempContentDB;
//      
//    } else {
//      this.tempDataSource.data = this.tempContentDB;
//   }
//  }




}