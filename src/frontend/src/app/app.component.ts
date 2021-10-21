import { Component, OnInit } from '@angular/core';
import { AppService } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'frontend';
  dateYear: number = new Date().getFullYear();
  resultado : string = '';

  constructor(private Service: AppService){}

  ngOnInit() {
    this.Upload();
  }

  Upload() {
    this.Service.numberBet().subscribe((response)=> {
      console.log('response', response)
    }, (err)=> {
      console.log('error', err);
    })
      
    };
  }


