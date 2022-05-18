import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleNew } from 'src/model/articleNew';
import { Article } from 'src/model/article';
import { ArticleService } from '../article.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {
  articleForm: FormGroup;

  constructor(private articleService: ArticleService, private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required],
      content: ['', Validators.required],
      authorList: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  createArticle() {
    const { title, content, authorList } = this.articleForm.value;
    const newArticle = {
      title,
      content,
      authorList
    }

    const articleNew = new ArticleNew(newArticle);

    this.articleService.createArticle(articleNew).subscribe()
  }
}
