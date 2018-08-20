import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) private document: any) { }


  show: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    //we'll do some stuff here when the window is scrolled
    console.log(this.document.body.scrollTop)
    console.log(this.document.documentElement.scrollTop)
    if (this.document.documentElement.scrollTop > 20) {
      this.show = true;
      console.log(this.document.body.scrollTop);

    } else {
      this.show = false;
    }
  }

}
