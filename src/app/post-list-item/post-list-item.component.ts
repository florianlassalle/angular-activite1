import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postId: number;
  @Input() likeCount: number;

  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postDate : Date;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLike(){
    this.likeCount += 1;
  }

  onDislike(){
    this.likeCount -= 1;
  }

  getLikeCount(){
    return this.likeCount;
  }

  onDelete(){
    this.postsService.deletePost(this.postId);

  }

  getColor(){
    if (this.likeCount < 0){
      return 'red';
    } else if (this.likeCount > 0){
      return 'green';
    }
  }

}