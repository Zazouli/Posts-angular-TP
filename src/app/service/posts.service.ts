import { Post } from "../Post.model";
import { Subject } from "rxjs";
import * as firebase from 'firebase';

export class PostService {

  posts: Post[]=[];
  postsSubject= new Subject<Post[]>();

  emitPosts(){
    this.postsSubject.next(this.posts);
  }
  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }
  getPosts(){
    firebase.database().ref('/posts').on(
      'value',(data)=>{
        this.posts = data.val() ? data.val() : []; 
        this.emitPosts();
      }
    );
  }
  createNewPost(post:Post){
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  deletePost(index: number){
    this.posts.splice(index,1);
    console.log(this.posts,index);
    this.savePosts();
    this.emitPosts();
  }
  changeLoveIt(status:string,index:number){
    console.log(index);
    this.posts[index].loveIts= (status === 'add') ? ++this.posts[index].loveIts: --this.posts[index].loveIts;
    this.savePosts();
    this.emitPosts();
  }
}