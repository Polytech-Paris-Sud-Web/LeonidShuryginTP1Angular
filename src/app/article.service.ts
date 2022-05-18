import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articleList").pipe(
      map(data => data.map(article => new Article(article.id, article.title, article.content, article.author)))
    );
  }

  public deleteArticle(article: Article): Observable<void> {
    return this.http.delete<void>("http://localhost:3000/articleList/" + article.id)
  }
}
