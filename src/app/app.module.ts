import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ExposantComponent } from './exposant/exposant.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AgendaComponent } from './agenda/agenda.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './serviceU/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PresentationComponent,
    ExposantComponent,
    AgendaComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    YouTubePlayerModule,
    FullCalendarModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
