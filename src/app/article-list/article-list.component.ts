import { Component, OnInit } from '@angular/core';
import { Article } from 'src/model/article';
import { ArticleService } from '../article.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articleList: Observable<Article[]>

  constructor(private articleService: ArticleService) {
    this.articleList = this.articleService.getArticles()
  }

  ngOnInit() {
    this.articleList = this.articleService.getArticles()
  }

  delete(article: Article) {
    this.articleService.deleteArticle(article).subscribe()
  }
}
