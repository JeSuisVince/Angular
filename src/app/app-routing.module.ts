import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";
import { PresentationComponent } from './presentation/presentation.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ExposantComponent } from './exposant/exposant.component';
import { AuthguardGuard } from './guard/authguard.guard';


const routes: Routes = [
  // autres routes...
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'home', component : HomeComponent, pathMatch: 'full'},
  { path: 'agenda', component : AgendaComponent, pathMatch: 'full'},
  { path: 'presentation', component: PresentationComponent, pathMatch: 'full'}, 
  { path: 'exposant', component: ExposantComponent, pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
