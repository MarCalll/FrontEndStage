import { Routes, RouterModule } from '@angular/router';
import { ConfigLibComponent } from './config-lib.component';
import { StanzeLettiComponent } from './StanzeLetti/StanzeLetti.component';

const routes: Routes = [
  { 
    path: '',
    component: ConfigLibComponent,
    children: [
      { path: '', loadChildren: () => import("./container/container.module").then(m => m.ContainerModule) },
    ]
  }
];

export const ConfigLibRoutes = RouterModule.forChild(routes);