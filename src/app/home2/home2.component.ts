import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnimalStateService} from "../stateservice/animal-state.service";
import {Subscription} from "rxjs";
import {AnimalService} from "../service2/animal.service";
import Animal from "../model/animal";
import {Router} from "@angular/router";
import {SortAnimalsPipe} from "../pipes/sort-animals.pipe";
import {AnimalEffectsComponent} from "../animal-effects/animal-effects.component";
import {AppState} from "../store/app.reducer";
import {Store} from "@ngrx/store";
import {loadAnimals, setAllTheAnimals} from "../store/animal/animal.actions";
import {selectAllTheAnimals} from "../store/animal/animal.selectors";

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css'],


})
export class Home2Component implements OnInit, OnDestroy{


  direction:boolean = true;

  buton:string='Asc';

  mesaj:string = "mesaj";

  constructor(private store:Store<AppState>,public animalState: AnimalStateService, public service: AnimalService, private route:Router) {

    // this.store.select(selectAllTheAnimals).subscribe(
    //   data => this.animalState.animalsSubject.next(data)
    // )

    animalState.animals$.subscribe(data=>{
      console.log('din home 2',data);
    })
  }

  ascOrDesc(){
    this.direction = !this.direction;
    this.buton = this.direction ? 'Asc' : 'Desc';
  }

  ngOnDestroy(): void {



  }



  goToAdd(){

    this.route.navigate(['/add'])
  }

  ngOnInit(): void {

      this.store.dispatch(loadAnimals({message: "mesaj"}))
  }

}
