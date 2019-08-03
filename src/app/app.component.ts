import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Test-pipes';
  subTitle = 'TEST-SUBTITLE';
  todaydate = new Date();
  input;
  bool=false;
  
  ngOnInit(){
    this.bool=true;
    this.input='';
  }

}
