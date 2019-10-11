import { CapitalPipe } from './capital.pipe';
import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkFavComponent } from './mark-fav/mark-fav.component';
import { CapitalCheckComponent } from './capital-check/capital-check.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {HttpClientModule} from '@angular/common/http';
import { PhotoCompComponent } from './photo-comp/photo-comp.component';
import { PhotoService } from './photo.service';
import { PostService } from './post.service';
import { EmployeeComponent } from './employee/employee.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ //All the component names need to be added here that you are using in your progrram
    AppComponent,
    MarkFavComponent,
    SummaryPipe,
    CapitalPipe,
    CapitalCheckComponent,
    ContactFormComponent,
    PhotoCompComponent,
    EmployeeComponent,
    PostComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    PostdetailComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PostService, PhotoService], //You need to add your esrvice names here to register them
  bootstrap: [AppComponent] //if you want something to show up on screen then you need to add the components here
})
export class AppModule { }
