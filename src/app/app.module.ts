import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleService } from './article.service';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'articleList', component: ArticleListComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: '', component: ArticleListComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleCreationComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    //AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    //Angular Material
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [

    //Angular Material
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
