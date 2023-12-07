import { Injectable, isDevMode } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class ConfigService {

  idForDetail$ = new BehaviorSubject<string>(null);

  constructor (protected store: Store<any>) {
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

  editButton() {
    console.log("edit funge")
  }
  


}