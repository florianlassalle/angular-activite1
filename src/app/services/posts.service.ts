import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostsService {

  postsSubject = new Subject<Post[]>();

   private posts = [
    new Post(0, 'Mon premier post', "blabalabla", 10 ),
    new Post(1, 'Mon deuxième post', "blabalabla", -5 ),
    new Post(2, 'Mon troisième post', "blabalabla", 0 )
  ];

  constructor() { }

  addPost(id: number, title: string, content: string, likes: number){
    
    this.posts.push(new Post(id, title, content, likes));
    this.emitAppareilSubject();
  }

  getPostById(id: number){
    const post = this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
    return post;
  }

  emitAppareilSubject(){
    this.postsSubject.next(this.posts.slice());
  }
}