import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsService } from './services/posts.service';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, PostListItemComponent, PostListComponent, NewPostComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PostsService]
})
export class AppModule { }
