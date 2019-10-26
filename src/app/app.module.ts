import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogHttpService } from './blog-http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    BlogCreateComponent,
    AboutComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'create', component: BlogCreateComponent },
      { path: 'edit/:blogId', component: EditComponent },
      { path: 'blog/:blogId', component: ViewComponent },
      { path: 'about', component: AboutComponent }
    ])
  ],
  // providing BlogService globally
  providers: [BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
