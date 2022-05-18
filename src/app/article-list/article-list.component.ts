import { Component, OnInit } from '@angular/core';
import { Article } from 'src/model/article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articleList = new Array<Article>();

  constructor(private articleService: ArticleService) {
    this.articleList = this.articleService.getArticles();
  }

  // articleList(): Article[] {
  //   return this.articleService.getArticles();
  // }

  ngOnInit(): void {

  }
}
