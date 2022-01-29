import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from '../service/weather.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [WeatherService],
})
export class WeatherModule { }
