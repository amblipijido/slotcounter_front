import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AddCarComponent } from './add-car/add-car.component';
import { DriversComponent } from './drivers/drivers.component';
import { SpeedWaysComponent } from './speed-ways/speed-ways.component';
import { RacesComponent } from './races/races.component';
import { ChartModule } from 'primeng/chart';
import { DataViewModule } from 'primeng/dataview';
import {CardModule} from 'primeng/card';
import { TeamsComponent } from './teams/teams.component';



const PAGES_COMPONENTS = [
  PagesComponent,
  AddCarComponent,
  DriversComponent,
  SpeedWaysComponent,
  RacesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    ChartModule,
    DataViewModule,
    CardModule,

  ],
  declarations: [
    ...PAGES_COMPONENTS,
    TeamsComponent,
  ],
})
export class PagesModule {
}
