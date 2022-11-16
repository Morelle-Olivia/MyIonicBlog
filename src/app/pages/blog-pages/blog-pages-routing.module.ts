import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPagesPage } from './blog-pages.page';

const routes: Routes = [
  {
    path: 'blog-pages',
    component: BlogPagesPage,
    children: [
     {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
     },
     {
      path: 'myBlogs',
      loadChildren: () => import('./my-blogs/my-blogs.module').then(m => m.MyBlogsPageModule)
     },
     {
      path: 'aboutMe',
      loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMePageModule)
     },
     {
      path: 'connect',
      loadChildren: () => import('./connect/connect.module').then( m => m.ConnectPageModule)
    },
    {
      path: '',
      redirectTo: 'blog-pages/home',
      pathMatch: 'full'
    }
    ]
  },
  {
    path: '',
    redirectTo: 'blog-pages/home',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPagesPageRoutingModule {}
