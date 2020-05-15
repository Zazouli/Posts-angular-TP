import {Component, OnInit,OnDestroy} from '@angular/core';
import {Post} from '../Post.model';
import * as firebase from 'firebase';

import {PostService} from '../service/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls:['post-list.component.css']
})

export class PostListComponent implements OnInit,OnDestroy{

  posts: Post[]=[];
  postsSubscription: Subscription;
  constructor(private postService: PostService){}
  ngOnInit(){
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts)=>{
        this.posts = posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPosts();
  }
  getClass(index: number){
    if(this.posts[index].loveIts > 0) {
      return 'list-group-item list-group-item-success';
    }else if(this.posts[index].loveIts<0){
      return 'list-group-item list-group-item-success list-group-item-danger';
    }else{
      return 'list-group-item';
    }
  }
  changeLoveIt(status:string,index:number){
      this.postService.changeLoveIt(status,index);
  }
  onDelete(index: number){
    this.postService.deletePost(index);
  }
  ngOnDestroy(){

  }
  }