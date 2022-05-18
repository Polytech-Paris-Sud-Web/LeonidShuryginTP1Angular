import { Component, OnInit } from '@angular/core';
import { Article } from 'src/model/article';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})

export class ArticleDetailComponent implements OnInit {
  article?: Article

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {

  }

  getArticle(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
   
    this.route.params.subscribe(params => {
      this.articleService.getArticle(params['id']).subscribe({next: (data) => this.article = data});
    });
  }

  ngOnInit(): void {
    this.getArticle()
  }
}
