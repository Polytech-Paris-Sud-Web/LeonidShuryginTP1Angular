import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from 'src/model/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  article = new Article("Title", "Content", "Author");

  constructor(private articleService: ArticleService) {
  }

  articleList(): Article[] {
    return this.articleService.getArticles();
  }

  ngOnInit(): void {

  }
}
