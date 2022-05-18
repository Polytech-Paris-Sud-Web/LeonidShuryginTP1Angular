import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Article } from 'src/model/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    
  @Input()
  article? : Article;

  constructor(){
  }

  ngOnInit(): void {
    
  }
}


