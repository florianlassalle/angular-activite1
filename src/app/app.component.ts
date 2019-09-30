import { Component, OnInit } from '@angular/core';
import {Post} from './models/post.model';
import { Subscription } from 'rxjs/Subscription';
import { PostsService } from './services/posts.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular';

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
