import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PostformComponent } from './home/postform/postform.component';
import { PostlistComponent } from './home/postlist/postlist.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../core/services/post.service';
import { AuthService } from '../core/services/auth.service';

@NgModule({
  declarations: [
    PostformComponent,
    PostlistComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PickerComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [PostService, AuthService],
})
export class UserModule {}
