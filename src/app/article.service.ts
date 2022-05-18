import { Injectable } from '@angular/core';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  public getArticles(): Article[] {
    return [
      new Article("T1", "C1", "A1"),
      new Article("T2", "C2", "A2"),
      new Article("T3", "C3", "A3")
    ];
  }
}
