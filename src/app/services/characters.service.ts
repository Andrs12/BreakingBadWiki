import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CharactersService {
  private urlBase = 'https://www.breakingbadapi.com/api/';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get(this.urlBase + '/characters');
  }
}
