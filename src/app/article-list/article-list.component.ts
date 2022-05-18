import { Component, OnInit } from '@angular/core';
import { Article } from 'src/model/article';
import { ArticleService } from '../article.service';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Title', 'Content', 'Details']
  articleList: Article[] = []
  articleListData = new MatTableDataSource<Article>(this.articleList);

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(data => this.articleListData = new MatTableDataSource<Article>(data))
  }

  delete(article: Article) {
    this.articleService.deleteArticle(article).subscribe()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.articleListData.filter = filterValue.trim().toLowerCase();
  }
}
