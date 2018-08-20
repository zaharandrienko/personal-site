import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';
import { NetworksComponent } from './networks/networks.component';
import { ButtonComponent } from './button/button.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ToTopComponent } from './to-top/to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent,
    HeaderComponent,
    NetworksComponent,
    ButtonComponent,
    NewPostComponent,
    ToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
