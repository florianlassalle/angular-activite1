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

  addPost(title: string, content: string){
    const id = this.posts.length;
    this.posts.push(new Post(id, title, content, 0));
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

  deletePost(id: number){
    const post = this.getPostById(id);
    this.posts.splice(this.posts.indexOf(post));
    this.emitAppareilSubject();
  }

  emitAppareilSubject(){
    this.postsSubject.next(this.posts.slice());
  }
}