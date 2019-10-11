import { PhotoService } from './../photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-comp',
  templateUrl: './photo-comp.component.html',
  styleUrls: ['./photo-comp.component.css']
})
export class PhotoCompComponent implements OnInit {

  photos;
  
  constructor(private service: PhotoService){
   service.getPhotos()
    .subscribe(response=>{
      console.log(response);

      this.photos = response;
    });
  }

  createPhoto(input: HTMLInputElement) {
    let photo = {title: input.value};
    //let post: any = {title: input.value};
    input.value = '';
    this.service.createPhoto(photo)
      .subscribe(response=> {
      photo['id'] = response; //binding id to post, attaching response to the post id.
      //post.id = response;
      this.photos.splice(0,0,photo); //splice method could be used to add the post to the top of the list or delete one of the posts, push method will add the post to the end of the list
      
      console.log(response);
    });
  }

  updatePhoto(photo) {
    //this.http.patch(this.url+'/'+post.id,JSON.stringify({isRead:true}))
    
    this.service.updatePhoto(photo)
      .subscribe(response=> {
      console.log(response);
    });
  }

  deletePhoto(photo) {
    
    this.service.deletePhoto(photo)
      .subscribe(response=> {
      let index = this.photos.indexOf(photo);
      this.photos.splice(index,1);
      //console.log(response);
    });
  }

  ngOnInit() {
  }

}
