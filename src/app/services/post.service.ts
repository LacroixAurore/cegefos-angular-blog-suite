import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';
import {Book} from "../../../../mon-projet-book/src/app/models/book.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PostService {

  constructor(private httpClient: HttpClient) { }

  posts : Post[] = [];
  postsSubject = new Subject<Post[]>();

    getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://post12112018.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          if(response == null){
            this.posts = [];
          }
          this.emitPosts();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  updateLove(){
    this.savePosts();
    this.emitPosts();
  }
}
