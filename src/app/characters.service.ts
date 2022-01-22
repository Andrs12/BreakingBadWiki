import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private urlBase = 'https://www.breakingbadapi.com/api/';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get(this.urlBase + 'characters').pipe(map((res) => res));
  }
}
