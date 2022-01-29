import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
searchWeatherForm:FormGroup | any;
searchWeatherForm8:FormGroup |any;
searchWeatherForm7:FormGroup |any;
searchWeatherForm6:FormGroup |any;
searchWeatherForm5:FormGroup |any;
searchWeatherForm4:FormGroup |any;
searchWeatherForm3:FormGroup |any;
searchWeatherForm2:FormGroup |any;
searchWeatherForm1:FormGroup |any;

lat:any;
lon:any;
weatherData:any;
weatherDataOne:any;
weatherDataTwo:any;
weatherDataThree:any;
weatherDataFour:any;
weatherDataFive:any;
weatherDataSix:any;
weatherDataSeven:any;
weatherDataEight:any;

weatherType:any;
weatherName= {};
weatherNameOne= {};
weatherNameTwo= {};
weatherNameThree= {};
weatherNameFour= {};
weatherNameFive= {};
weatherNameSix= {};
weatherNameSeven= {};
weatherNameEight= {};

weatherTemp:any = {};
weatherTempOne:any = {};
weatherTempTwo:any = {};
weatherTempThree:any = {};
weatherTempFour:any = {};
weatherTempFive:any = {};
weatherTempSix:any = {};
weatherTempSeven:any = {};
weatherTempEight:any = {};

feels_like = {};
feels_likeOne = {};
feels_likeTwo = {};
feels_likeThree = {};
feels_likeFour = {};
feels_likeFive = {};
feels_likeSix = {};
feels_likeSeven = {};
feels_likeEight= {};

weatherHumditity = {};
weatherHumditityOne = {};
weatherHumditityTwo = {};
weatherHumditityThree = {};
weatherHumditityFour = {};
weatherHumditityFive = {};
weatherHumdititySix = {};
weatherHumdititySeven = {};
weatherHumditityEight = {};

searchweather:Subscription | any;

  constructor(private fb:FormBuilder,private weatherService:WeatherService) { }

  ngOnInit(): void {
// this.getLocation();
    this.searchWeatherForm = this.fb.group({
      city:['',Validators.required]
    });
    this.searchWeatherForm1 = this.fb.group({
      cityOne:['',Validators.required]
    })

    this.searchWeatherForm2 = this.fb.group({
      cityTwo:['',Validators.required]
    })
    this.searchWeatherForm3 = this.fb.group({
      cityThree:['',Validators.required]
    })
    this.searchWeatherForm4 = this.fb.group({
      cityFour:['',Validators.required]
    })
    this.searchWeatherForm5 = this.fb.group({
      cityFive:['',Validators.required]
    })
    
    this.searchWeatherForm6 = this.fb.group({
      citySix:['',Validators.required]
    })
    
    this.searchWeatherForm7 = this.fb.group({
      citySeven:['',Validators.required]
    })
    
    this.searchWeatherForm8 = this.fb.group({
      cityEight:['',Validators.required]
    })
    
  }
getLocation(){
  // if('geolocation' in navigator){
  //   navigator.geolocation.watchPosition((sucess) => {
  //     console.log(sucess)
  //     this.lat = sucess.coords.latitude;
  //     this.lon = sucess.coords.longitude;
  //     this.weatherService.getApi(this.lat,this.lon).subscribe(res =>{
  //       console.log('',res)
  //     })
  //   })}
}

searchcity(){
console.log(this.searchWeatherForm.value);
this.weatherService.getWeatherData(this.searchWeatherForm.value.city).subscribe((d:any) =>{
  console.log(d);
  this.weatherName = d.name;
  console.log(this.weatherName);
  this.weatherTemp = d.main.temp; 
  this.feels_like = d.main.feels_like;
  console.log(this.feels_like)
  this.weatherHumditity = d.main.humidity;

this.weatherData = d.weather;
console.log("len",this.weatherData)
console.log(this.weatherData)
})
}
searchcityOne(){
  this.weatherService.getWeatherData(this.searchWeatherForm1.value.cityOne).subscribe((d:any) =>{
         console.log(d);
         this.weatherNameOne = d.name;
         console.log(this.weatherName);
         this.weatherTempOne = d.main.temp; 
         this.feels_likeOne = d.main.feels_like;
         console.log(this.feels_like)
         this.weatherHumditityOne = d.main.humidity;  
       this.weatherDataOne = d.weather;
       this.weatherType = this.weatherDataOne[0].main;
       })
}
// searchCity1(){
//   this.weatherService.getWeatherData(this.searchWeatherForm.value.city).subscribe((d:any) =>{
//     console.log(d);
//     this.weatherName = d.name;
//     console.log(this.weatherName);
//     this.weatherTemp = d.main.temp; 
//     this.feels_like = d.main.feels_like;
//     console.log(this.feels_like)
//     this.weatherHumditity = d.main.humidity;
  
//   this.weatherData = d.weather;
//   console.log("len",this.weatherData)
//   console.log(this.weatherData)
//   })
// }

searchCity2(){
  this.weatherService.getWeatherData(this.searchWeatherForm2.value.cityTwo).subscribe((d:any) =>{
    console.log(d);
    this.weatherNameTwo = d.name;
    console.log(this.weatherName);
    this.weatherTempTwo = d.main.temp; 
    this.feels_likeTwo = d.main.feels_like;
    console.log(this.feels_like)
    this.weatherHumditityTwo = d.main.humidity;
  
  this.weatherDataTwo = d.weather;
  console.log(this.weatherDataTwo)
  })
}

searchCity3(){
  this.weatherService.getWeatherData(this.searchWeatherForm3.value.cityThree).subscribe((d:any) =>{
    console.log(d);
    this.weatherNameThree = d.name;
    console.log(this.weatherName);
    this.weatherTempThree = d.main.temp; 
    this.feels_likeThree = d.main.feels_like;
    console.log(this.feels_like)
    this.weatherHumditityThree = d.main.humidity;
  
  this.weatherDataThree = d.weather;
  console.log("len",this.weatherData)
  console.log(this.weatherData)
  })
}

searchCity4(){
  this.weatherService.getWeatherData(this.searchWeatherForm4.value.cityFour).subscribe((d:any) =>{
    console.log(d);
    this.weatherNameFour = d.name;
    console.log(this.weatherName);
    this.weatherTempFour = d.main.temp; 
    this.feels_likeFour = d.main.feels_like;
    console.log(this.feels_like)
    this.weatherHumditityFour = d.main.humidity;
  
  this.weatherDataFour = d.weather;
  console.log("len",this.weatherData)
  console.log(this.weatherData)
  })
}

searchCity5(){
  this.weatherService.getWeatherData(this.searchWeatherForm5.value.cityFive).subscribe((d:any) =>{
    console.log(d);
    this.weatherNameFive = d.name;
    console.log(this.weatherName);
    this.weatherTempFive = d.main.temp; 
    this.feels_likeFive = d.main.feels_like;
    console.log(this.feels_like)
    this.weatherHumditityFive = d.main.humidity;
  
  this.weatherDataFive = d.weather;
  console.log("len",this.weatherData)
  console.log(this.weatherData)
  })
}

searchCity6(){
  this.weatherService.getWeatherData(this.searchWeatherForm6.value.citySix).subscribe((d:any) =>{
    console.log(d);
    this.weatherNameSix = d.name;
    console.log(this.weatherName);
    this.weatherTempSix = d.main.temp; 
    this.feels_likeSix = d.main.feels_like;
    console.log(this.feels_like)
    this.weatherHumdititySix = d.main.humidity;
  
  this.weatherDataSix = d.weather;
  console.log("len",this.weatherData)
  console.log(this.weatherData)
  })
}

searchCity7(){
  this.weatherService.getWeatherData(this.searchWeatherForm7.value.citySeven).subscribe((d:any) =>{
    console.log(d);
    this.weatherNameSeven = d.name;
    console.log(this.weatherName);
    this.weatherTempSeven = d.main.temp; 
    this.feels_likeSeven = d.main.feels_like;
    console.log(this.feels_like)
    this.weatherHumdititySeven = d.main.humidity;
  
  this.weatherDataSeven = d.weather;
  console.log("len",this.weatherData)
  console.log(this.weatherData)
  })
}
searchCity8(){
  this.weatherService.getWeatherData(this.searchWeatherForm8.value.cityEight).subscribe((d:any) =>{
    console.log(d);
    this.weatherNameEight = d.name;
    console.log(this.weatherName);
    this.weatherTempEight = d.main.temp; 
    this.feels_likeEight = d.main.feels_like;
    console.log(this.feels_like)
    this.weatherHumditityEight = d.main.humidity;
  
  this.weatherDataEight = d.weather;
  console.log("len",this.weatherData)
  console.log(this.weatherData)
  })
}

// ngOnDestroy(){
// this.searchweather.unsubscribe();
// }
}