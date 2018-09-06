import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  showElement : boolean = false;
  showElement2 : boolean = false;
  showElement3 : boolean = false;
  gelery :boolean = false;
  constructor() { }

  ngOnInit() {
  }

  myFunction() {

    this.showElement = !this.showElement ;
  }

  
  myFunction2() {

    this.showElement2 = !this.showElement2 ;
  }

  
  myFunction3() {

    this.showElement3 = !this.showElement3 ;
  }
  myGelery() {
    this.gelery = !this.gelery ;
  }


}
