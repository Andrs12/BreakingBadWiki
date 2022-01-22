import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private charactersService: CharactersService) {}
  private characters;
  ngOnInit() {
    this.getCharacteres();
  }

  private getCharacteres() {
    this.charactersService.getCharacters().subscribe((response) => {
      this.characters = response;
      console.log(this.characters);
    });
  }
}
