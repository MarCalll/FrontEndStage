import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationComponent } from './integration.component';
import { RouterModule } from '@angular/router';
import { ConfigLibModule } from 'projects/config-lib/src/public-api';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'', component: IntegrationComponent },
    ]),
    ConfigLibModule
  ],
  declarations: [IntegrationComponent]
})
export class IntegrationModule { }
