import { AuthService } from './../../../core/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css',
})
export class CommentFormComponent implements OnInit {
  public form: FormGroup;
  @Input() postId: number;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      commentBody: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const request = {
        ...formValue,
        userId: this.authService.getUserId(),
        postId: this.postId,
      };

      this.postService.createComment(request).subscribe((response) => {
        console.log(response);
        this.form.reset();
      });
    }
  }
}
