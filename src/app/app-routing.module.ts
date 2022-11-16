import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./pages/blog-pages/blog-pages.module').then( m => m.BlogPagesPageModule)
  },
  // {
  //   path: 'my-blogs',
  //   loadChildren: () => import('./pages/blog-pages/my-blogs/my-blogs.module').then( m => m.MyBlogsPageModule)
  // },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
