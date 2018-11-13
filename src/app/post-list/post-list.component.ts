import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import {PostService} from "../services/post.service";
import {Subscription} from "rxjs";
import {Post} from "../models/post.model";
import { Router } from '@angular/router';
import {Book} from "../../../../mon-projet-book/src/app/models/book.model";
import {BooksService} from "../../../../mon-projet-book/src/app/services/books.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  constructor(private postService: PostService, private router: Router) { }

  posts : Post[];
  postsSubscription : Subscription;

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
    this.postService.getAppareilsFromServer();
  }

  onLove(post:Post, love:boolean){
    if(love){
      post.loveIts++;
    }else{
      post.loveIts--;
    }
    this.postService.updateLove();
  }

  onNewPost() {
    this.router.navigate(['/posts', 'new']);
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
