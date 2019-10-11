import { Component } from '@angular/core';
import { PostService } from './post.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private apiUrl = 'https://www.hatchways.io/api/assessment/students';
  date: any = {};


}
