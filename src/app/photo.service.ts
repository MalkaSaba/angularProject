import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private url = "http://jsonplaceholder.typicode.com/photos";
  constructor(private http:HttpClient) { 
  }

  getPhotos(){
    return this.http.get(this.url);
  }

  createPhoto(photo) {
    return this.http.post(this.url, JSON.stringify(photo));
  }

  updatePhoto(photo) {
    return this.http.patch(this.url+'/'+photo.id,JSON.stringify({title: "New Photo"})); //hard coded the post here for simplicity
  }

  deletePhoto(photo) {
    return this.http.delete(this.url+'/'+photo.id);
  }
}
