import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    
  readonly title: string;
  readonly content: string;

  constructor(){
    this.title = 'First Article';
    this.content = 'Hello World';
  }

  ngOnInit(): void {
  }

}


