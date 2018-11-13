import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PostService} from "../services/post.service";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-new-form',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const description = this.postForm.get('description').value;
    const newPost = new Post(title, description);
    newPost.loveIts = 0;
    newPost.created_at = Date.now();
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
