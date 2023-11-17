import { Component } from '@angular/core';
import { Recipe } from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('testipe', 'testription', 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg'),
    new Recipe('testipe2', 'testription', 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg'),
    new Recipe('testipe3', 'testription', 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg'),
    new Recipe('testipe4', 'testription', 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg'),
  ]

  constructor() {
  }
}
