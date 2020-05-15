import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Post} from '../Post.model';

import {PostService} from '../service/posts.service';

@Component({
  selector:'app-new-post',
  templateUrl:'new-post.component.html',
  styleUrls:['new-post.component.css']
})

export class NewPostComponent implements OnInit{

  newPostForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
  private postsService: PostService,
  private router: Router){}

  ngOnInit(){
    this.initForm();
  }
  initForm(){
    this.newPostForm = this.formBuilder.group({
      title: ['',[Validators.required]],
      content: ['',[Validators.required]]
    });
  }
  onSubmit(){
    const title = this.newPostForm.get('title').value;
    const content= this.newPostForm.get('content').value;
    const newPost = new Post(title, content,0, Date.now());
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }
  
}