import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';


   posts = [
    {
      title : 'Mon premier post',
      content: "blabalabla",
      likes: 10,
      creationDate : new Date()
    },
    {
      title : 'Mon deuxième post',
      content: "blabalabla",
      likes: -5,
      creationDate : new Date()
    },
    {
      title : 'Mon troisième post',
      content: "blabalabla",
      likes: 0,
      creationDate : new Date()
    }
  ];

}
