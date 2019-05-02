import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCarComponent } from './add-car/add-car.component';
import { DriversComponent } from './drivers/drivers.component';
import { SpeedWaysComponent } from './speed-ways/speed-ways.component';
import { RacesComponent } from './races/races.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'cars',
      component: AddCarComponent,
    },
    {
      path: 'drivers',
      component: DriversComponent,
    },
    {
      path: 'speedways',
      component: SpeedWaysComponent,
    },
    {
      path: 'races',
      component: RacesComponent,
    },
    {
      path: 'teams',
      component: TeamsComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
