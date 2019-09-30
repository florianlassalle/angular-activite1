export class Post {

  id: number;
  title : string;
  content: string;
  likes: number;
  creationDate : Date;

  constructor(id: number, title: string, content: string, likes: number){

    this.id = id;
    this.title = title;
    this.content = content;
    this.likes = likes;
    this.creationDate = new Date();

  }
}