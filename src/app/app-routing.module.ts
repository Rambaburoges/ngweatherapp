import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule) }, { path: 'bootstrap', loadChildren: () => import('./bootstrap/bootstrap.module').then(m => m.BootstrapModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
