import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsService } from './services/posts.service';
import { NewPostComponent } from './new-post/new-post.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id',component: PostListItemComponent },
  { path: 'new',component: NewPostComponent },
  { path: '',component: PostListComponent },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, PostListItemComponent, PostListComponent, NewPostComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PostsService]
})
export class AppModule { }
