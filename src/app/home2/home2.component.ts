import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnimalStateService} from "../stateservice/animal-state.service";
import {Subscription} from "rxjs";
import {AnimalService} from "../service2/animal.service";
import Animal from "../model/animal";
import {Router} from "@angular/router";
import {SortAnimalsPipe} from "../pipes/sort-animals.pipe";

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css'],


})
export class Home2Component implements OnInit, OnDestroy{


  direction:boolean = true;

  buton:string='Asc';

  constructor(public animalState: AnimalStateService, public service: AnimalService, private route:Router) {

     service.getAllTheAnimals();

    // console.log('din HOME',this.animals$)
  }

  ascOrDesc(){
    this.direction = !this.direction;
    this.buton = this.direction ? 'Asc' : 'Desc';
  }

  ngOnDestroy(): void {



  }


  animals$ = this.animalState.animals$;


  goToAdd(){

    this.route.navigate(['/add'])
  }

  ngOnInit(): void {



  }

}
