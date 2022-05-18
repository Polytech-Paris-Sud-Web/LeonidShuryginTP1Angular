import { Component, OnInit } from '@angular/core';
import { AuthorBio } from 'src/model/authorBio';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-bio',
  templateUrl: './author-bio.component.html',
  styleUrls: ['./author-bio.component.css']
})
export class AuthorBioComponent implements OnInit {
  author: AuthorBio;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {

  }

  getAuthor(): void {
    const name = this.route.snapshot.paramMap.get('name');

    this.route.params.subscribe(params => {
      this.articleService.getAuthor(params['name']).subscribe({ next: (data) => this.author = data });
    });
  }

  ngOnInit(): void {
    this.getAuthor()
  }

}
