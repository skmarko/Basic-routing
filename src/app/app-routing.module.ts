import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes:Routes=[{ path: '', redirectTo: '/', pathMatch: 'full' },
                     {path:'home',component:HomeComponent},
                       {path:'about',component:AboutComponent},
                       {path:'contact',component:ContactComponent},
                       {path:'list',component:ListComponent}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
