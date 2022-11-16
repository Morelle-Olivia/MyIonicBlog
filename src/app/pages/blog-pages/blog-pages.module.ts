import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogPagesPageRoutingModule } from './blog-pages-routing.module';

import { BlogPagesPage } from './blog-pages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogPagesPageRoutingModule
  ],
  declarations: [BlogPagesPage]
})
export class BlogPagesPageModule {}
