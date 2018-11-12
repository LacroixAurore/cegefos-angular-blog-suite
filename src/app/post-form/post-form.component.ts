import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PostService} from "../services/post.service";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

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
    console.log(newPost.created_at);
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
