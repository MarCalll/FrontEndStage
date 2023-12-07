# ConfigModule

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.10.

Per installare le dipendenze:

npm install --legacy-peer-deps

### How publish project into the npm repository 

Cambiare la versione della libreria nel package.json **projects\config-lib\package.json** ,

Eseguire il commando: 
```
npm run build-lib
```
Una volta buildato il progetto, bisogna eseguire il seguente commando:
```
npm publish dist\config-lib --tag @exprivia/config-lib
```
### How configurate the registry 
controllare che all'interno dei file .yarnc o npmrc siano presenti le configurazioni verso il registry e il field _auth è username:passwd in base 64 del registry. 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
