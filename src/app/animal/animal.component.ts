import {Component, Input} from '@angular/core';
import Animal from "../model/animal";

@Component({
  selector: '.animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {

  @Input() animal?: Animal;
}
