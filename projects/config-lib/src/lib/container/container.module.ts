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
import { SearchButtonComponent } from '../tasti/searchButton/searchButton.component';
import { SaveButtonComponent } from '../tasti/saveButton/saveButton.component';
import { CancelButtonComponent } from '../tasti/cancelButton/cancelButton.component';
import { SearchBarComponent } from '../searchBar/searchBar.component';
import { ToolBarComponent } from '../toolBar/toolBar.component';
import { AddBarComponent } from '../addBar/addBar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MatPaginatorModule,
    RouterModule.forChild([
      {
        path: 'container',
        component: ContainerComponent
    }

    ]),
    
  ],
  exports: [ContainerComponent],
  declarations: [
    ContainerComponent,
    GenericTableComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    StrutturaDegenzaComponent,
    AddRoomButtonComponent,
    BedManagementButtonComponent,
    SearchButtonComponent,
    SaveButtonComponent,
    CancelButtonComponent,
    SearchBarComponent,
    ToolBarComponent,
    AddBarComponent
  ]
  })
  
export class ContainerModule { 
  static forRoot(): ModuleWithProviders {
  return {
    ngModule: ContainerModule,
    providers: []
  };
} }
