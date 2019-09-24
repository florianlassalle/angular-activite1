import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PostListItemComponent, PostListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
