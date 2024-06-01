import { Comment } from './../../../core/interfaces/post/Comment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css',
})
export class CommentListComponent implements OnInit {
  @Input() comments: any[];

  constructor() {
    this.comments = [];
  }

  ngOnInit(): void {}
}
