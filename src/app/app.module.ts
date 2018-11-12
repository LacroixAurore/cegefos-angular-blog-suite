import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostService} from "./services/post.service";
import {RouterModule, Routes} from "@angular/router";
import { PostFormComponent } from './post-form/post-form.component';
import { HeaderComponent } from './header/header.component';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {FourOhFourComponent} from "./four-oh-four/four-oh-four.component";

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/new',  component: PostFormComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' },
  { path: 'not-found', component: FourOhFourComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostFormComponent,
    HeaderComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    //FormGroup,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
