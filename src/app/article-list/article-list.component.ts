import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  article = {title: 'My First Article Leonid', content : 'Hello World'};

  constructor() { }

  ngOnInit(): void {
  }

}
