import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {

  private post;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.postService.getPostById(id).subscribe(response=> {
      this.post = response;
    })
  }

}
