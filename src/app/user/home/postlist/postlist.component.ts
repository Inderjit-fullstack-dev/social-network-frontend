import { APIResponse } from './../../../core/interfaces/common/APIResponse';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../core/services/post.service';
import { Post } from '../../../core/interfaces/post/Post';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css',
})
export class PostlistComponent implements OnInit {
  constructor(
    private postService: PostService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  posts: Post[];

  getPosts() {
    const userId = this.authService.getUserId();
    this.postService
      .getPosts(userId)
      .subscribe((response: APIResponse<Post[]>) => {
        this.posts = response.data;
      });
  }
}
