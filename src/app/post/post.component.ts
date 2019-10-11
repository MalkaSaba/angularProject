import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts;
    ngOnInit() {
    this.service.getPosts()
    .subscribe(response=>{
      console.log(response);

      this.posts = response;
    });
  }
  
  constructor(private service: PostService, private router: Router){ }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    //let post: any = {title: input.value};
    input.value = '';
    this.service.createPost(post)
      .subscribe(response=> {
      post['id'] = response; //binding id to post, attaching response to the post id.
      //post.id = response;
      this.posts.splice(0,0,post); //splice method could be used to add the post to the top of the list or delete one of the posts, push method will add the post to the end of the list
      
      console.log(response);
    });
  }

  updatePost(post) {
    //this.http.patch(this.url+'/'+post.id,JSON.stringify({isRead:true}))
    
    this.service.updatePost(post)
      .subscribe(response=> {
      console.log(response);
    });
  }

  deletePost(post) {
    
    this.service.deletePost(post)
      .subscribe(response=> {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
      //console.log(response);
    });
  }

  onSelected(post) {
    this.router.navigate(['/postdetail',post.id]); //calling routers navigate method. what link you are hiting and the path.

  }
  /*title = 'ProjectTwo';

  name;
  product = {nameOne: "malka",
              buyers: 7644786545,
              rating: 4.5,
              price: 45,
              releaseDate: new Date(2019,10,1),
              text: "how is it going?"} //testing the capital function

  //Class binding
  isActive = true; //bind class to button. class is only present if this is set to true.

  //Style binding

  //Event binding
  onSave() {
    console.log("Button was clicked");
  }

  //template variable
  onEnter(email) {
    console.log(email);
  }

  //two way binding
  onNameEnter() {
    console.log(this.name);
  }*/

}
