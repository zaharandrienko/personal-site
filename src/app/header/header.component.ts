import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showElement : boolean = false;
  // showNews : boolean = false;
  // showAbout : boolean = false;
  
  constructor(){
    
  }

  ngOnInit() {
  }
  myFunction() {

    this.showElement = !this.showElement ;
  }


  // myNews() {

  //   this.showNews = !this.showNews ;
  // }

  
  // myAbout() {

  //   this.showAbout = !this.showAbout ;
  // }

}
