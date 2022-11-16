import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBlogsPageRoutingModule } from './my-blogs-routing.module';

import { MyBlogsPage } from './my-blogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBlogsPageRoutingModule
  ],
  declarations: [MyBlogsPage]
})
export class MyBlogsPageModule {}
