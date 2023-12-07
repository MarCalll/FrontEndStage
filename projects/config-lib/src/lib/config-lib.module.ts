import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigLibComponent } from './config-lib.component';
import { ContainerModule } from './container/container.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [ConfigLibComponent],
  imports: [
    CommonModule,
    ContainerModule.forRoot(),
  ],
  exports: [ConfigLibComponent, SharedModule]
})

export class ConfigLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ConfigLibModule,
      providers: []
    };
  } 
}
