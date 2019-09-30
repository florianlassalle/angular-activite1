import { Component } from '@angular/core';
import {Post} from './models/post';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';


   posts = [
    new Post('Mon premier post', "blabalabla", 10 ),
    new Post('Mon deuxième post', "blabalabla", -5 ),
    new Post('Mon troisième post', "blabalabla", 0 )
  ];

}
