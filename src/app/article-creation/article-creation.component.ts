import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleNew } from 'src/model/articleNew';
import { Router } from '@angular/router';

//Service
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html'
})
export class ArticleCreationComponent implements OnInit {
  articleForm: FormGroup;

  constructor(private articleService: ArticleService, private fb: FormBuilder, private router : Router) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  goBack() : void {
    this.router.navigateByUrl('/');
  }

  createArticle() {
    const { title, content, author } = this.articleForm.value;
    const newArticle = {
      title,
      content,
      author
    }

    const articleNew = new ArticleNew(newArticle);

    this.articleService.createArticle(articleNew).subscribe()
    this.goBack();
    
  }
}
