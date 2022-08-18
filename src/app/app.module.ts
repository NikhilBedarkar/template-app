import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './templates/templates.component';
import { PostsComponent } from './posts/posts.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    PostsComponent,
    OfferFormComponent,
    PostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
