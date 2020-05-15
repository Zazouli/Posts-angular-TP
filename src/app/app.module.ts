import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {PostListComponent} from './post-list/post-list.component';

import {PostService} from './service/posts.service';
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './new-post/new-post.component';
const appRoutes: Routes=[
  {path:'posts',component:PostListComponent},
  {path: 'newpost', component: NewPostComponent},
  {path:'',component:PostListComponent,pathMatch:'full'}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, PostListComponent,HeaderComponent,NewPostComponent],
  bootstrap:    [ AppComponent ],
  providers: [PostService]
})
export class AppModule { }
