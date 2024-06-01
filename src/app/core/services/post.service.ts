import { endpoints } from './../constants/endpoints';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/auth/User';
import { APIResponse } from '../interfaces/common/APIResponse';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(request: any): Observable<any> {
    return this.http.post(endpoints.post.create, request);
  }

  getPosts(userId: number): Observable<APIResponse<Post[]>> {
    return this.http.get<APIResponse<Post[]>>(
      `${endpoints.post.list}/${userId}`
    );
  }

  createComment(request: any): Observable<any> {
    return this.http.post(endpoints.comment.create, request);
  }
}
