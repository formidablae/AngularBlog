import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { CommentComponent } from './components/comment/comment.component';
import { CompactTextPipe } from './pipes/compact-text.pipe';
import { PostPageComponent } from './components/post-page/post-page.component';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    FormatDatePipe,
    CommentComponent,
    CompactTextPipe,
    PostPageComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
