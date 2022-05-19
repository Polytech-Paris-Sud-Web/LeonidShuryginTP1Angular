import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

// Custom class
import { AuthorBio } from 'src/model/authorBio';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {
  }

  public getAuthor(name: string): Observable<AuthorBio> {
    return this.http.get<AuthorBio>("http://localhost:3000/author/" + name).pipe(
      map(data =>  new AuthorBio(data.id, data.bio))
    )
  }
}
