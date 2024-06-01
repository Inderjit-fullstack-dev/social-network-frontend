import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './layouts/main/main.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [
    MainComponent,
    AuthLayoutComponent,
    NavbarComponent,
    LeftSidebarComponent,
  ],
  imports: [CommonModule, RouterOutlet],
  exports: [MainComponent, AuthLayoutComponent],
})
export class SharedModule {}
