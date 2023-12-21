import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from '../shared/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ContainerComponent } from './container.component';
import { GenericTableComponent } from '../generic-table/generic-table.component';
import { EditButtonComponent } from '../tasti/editButton/editButton.component';
import { DeleteButtonComponent } from '../tasti/deleteButton/deleteButton.component';
import { StrutturaDegenzaComponent } from '../strutturaDegenza/strutturaDegenza.component';
import { AddRoomButtonComponent } from '../tasti/addRoomButton/addRoomButton.component';
import { BedManagementButtonComponent } from '../tasti/bedManagementButton/bedManagementButton.component';
import { SaveButtonComponent } from '../tasti/saveButton/saveButton.component';
import { CancelButtonComponent } from '../tasti/cancelButton/cancelButton.component';
import { SearchBarComponent } from '../searchBar/searchBar.component';
import { SideNavComponent } from '../sideNav/sideNav.component';
import { StanzeLettiComponent } from '../StanzeLetti/StanzeLetti.component';
import { AddDialogBoxComponent } from '../dialog/AddDialogBox/AddDialogBox.component';
import { BedDialogBoxComponent } from '../dialog/bedDialogBox/bedDialogBox.component';
import { ConfirmDIalogBoxComponent } from '../dialog/confirmDIalogBox/confirmDIalogBox.component';
import { ConfigLibRoutes } from '../config-lib.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MatPaginatorModule,
    
    
    RouterModule.forChild([
      {
        path: '', // Route vuota per rendere ContainerComponent la route principale
        component: ContainerComponent
      }, {
        path: 'stanzeletti', 
        component: StanzeLettiComponent
      }
    ])
  ],
  exports: [ContainerComponent],
  declarations: [
    ContainerComponent,
    GenericTableComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    StrutturaDegenzaComponent,
    BedDialogBoxComponent,
    AddRoomButtonComponent,
    BedManagementButtonComponent,
    SaveButtonComponent,
    CancelButtonComponent,
    SearchBarComponent,
    SideNavComponent,
    StanzeLettiComponent,
    AddDialogBoxComponent,
    ConfirmDIalogBoxComponent
  ],
  entryComponents:[
    AddDialogBoxComponent,
    BedDialogBoxComponent,
    ConfirmDIalogBoxComponent
  ]
  })

export class ContainerModule { 
  static forRoot(): ModuleWithProviders {
  return {
    ngModule: ContainerModule,
    providers: []
  };
} }
