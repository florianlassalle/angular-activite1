import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../models/post.model';
import { Subscription } from 'rxjs/Subscription';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postsService: PostsService){

  }

  ngOnInit(){
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.postsService.emitAppareilSubject();
  }


}