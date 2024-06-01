import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../core/services/post.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrl: './postform.component.css',
})
export class PostformComponent implements OnInit {
  public form: FormGroup;
  showEmoji = false;
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
      postBody: ['', [Validators.required]],
      isPublicPost: [false, [Validators.required]],
    });
  }

  addEmoji(event: any) {
    const currentText = this.form.get('postBody')?.value || '';
    this.form.patchValue({ postBody: currentText + event.emoji.native });
  }

  onSubmit() {
    this.showEmoji = false;
    if (this.form.valid) {
      const formValue = this.form.value;
      const request = { ...formValue, userId: this.authService.getUserId() };

      this.postService.createPost(request).subscribe((response) => {
        console.log(response);
        this.form.reset();
      });
    }
  }
  onShowEmoji() {
    this.showEmoji = !this.showEmoji;
  }
}
