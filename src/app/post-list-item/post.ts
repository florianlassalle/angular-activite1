export class Post {

  title : string;
  content: string;
  likes: number;
  creationDate : Date;

  constructor(title: string, content: string, likes: number){

    this.title = title;
    this.content = content;
    this.likes = likes;
    this.creationDate = new Date();

  }
}