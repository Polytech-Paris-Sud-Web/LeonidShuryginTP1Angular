import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { ArticleNew } from 'src/model/articleNew';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthorBio } from 'src/model/authorBio';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  public getArticle(id: number): Observable<Article> {
    return this.http.get<Article>("http://localhost:3000/articleList/" + id).pipe(
      map(article => new Article(article.id, article.title, article.content, article.author))
    )
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articleList").pipe(
      map(data => data.map(article => new Article(article.id, article.title, article.content, article.author)))
    );
  }

  public deleteArticle(article: Article): Observable<void> {
    return this.http.delete<void>("http://localhost:3000/articleList/" + article.id)
  }

  public createArticle(article: ArticleNew): Observable<ArticleNew> {
    return this.http.post<ArticleNew>("http://localhost:3000/articleList", article)
  }

  public getAuthor(name: string): Observable<AuthorBio> {
    return this.http.get<AuthorBio>("http://localhost:3000/author/" + name)
  }
}
