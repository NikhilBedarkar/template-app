import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
  { path: 'templates', component: TemplatesComponent },
  { path: 'post', component: PostComponent },
  { path: 'posts', component: PostsComponent },
  { path: '', component: TemplatesComponent },
  { path: 'templates/:templateName', component: OfferFormComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
