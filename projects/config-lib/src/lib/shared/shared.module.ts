import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfigService } from '../store/config.service';
import { ApiInterceptor } from './interceptors/api-interceptor';
import { MaterialModule } from './material.module';

const DECLARATIONS = [];
const EXPORTS = [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule];
const ENTRY_COMPONENTS = [];
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: DECLARATIONS,
  exports: EXPORTS,
  entryComponents: ENTRY_COMPONENTS,

  providers:[
    ConfigService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true, deps: [ConfigService] }
]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ConfigService, { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true, deps: [ConfigService] }]
    };
  }
 }
