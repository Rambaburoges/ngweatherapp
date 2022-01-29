import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map, switchMap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url='https://openweathermap.org/data/2.5/weather'
apikey = 'b54293033d69365f0aab9d70c39ab384';  
constructor(private http:HttpClient) { }

  // getApi(lat:any,lng:any){
  //   let params = new HttpParams().set('lat',lat).set('lon',lng).set('units','imperial').set('appid',this.apikey)
  //  return  this.http.get(this.url,{params}) 
  // }


  getWeatherData(city:any){
    return new Observable((observer)=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        observer.next(position)
      },
      (error)=>{
        observer.next(error)
      })
    }).pipe(map((value:any)=>{
      return new HttpParams()
      .set('q', city).set('units','imperial')
      .set('appid','4b6ace8bc7f3e409085737e30732fef7')
    }), 
       switchMap((values:any)=>{
      return this.http.get('https://api.openweathermap.org/data/2.5/weather',{params:values})
    })
    )
  }
}
