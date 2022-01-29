import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent implements OnInit {
  agents:Observable<string> | undefined
  agentName:string | undefined;
  constructor() { }

  ngOnInit(): void {
 
    this.agents = new Observable( function(observer){
      try{
        observer.next('ram')
        observer.next('babu')
        observer.next('r')
      }
      catch(e){
          observer.error(e);
      }
    })
    this.agents.subscribe(data =>{
      this.agentName = data;
    })
  }




}
