import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'startadmin', pathMatch: 'full',
  },
    {
      path: 'startadmin',
      loadChildren: () => import("../../integration/integration.module").then(m => m.IntegrationModule),
      outlet: 'first'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }