import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    
  @Input() 
  title : string;
  @Input("customContent") 
  content : string;

  constructor(){
    this.title = 'First Article';
    this.content = 'Hello World';
  }

  ngOnInit(): void {
  }

}


