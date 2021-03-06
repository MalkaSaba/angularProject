import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { 
  }

  getPostById(postid) {
    return this.http.get(this.url+'/'+postid);
  }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post) {
    return this.http.patch(this.url+'/'+post.id,JSON.stringify({title: "Angular Class"})); //hard coded the post here for simplicity
  }

  deletePost(post) {
    return this.http.delete(this.url+'/'+post.id);
  }
}
