import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import Animal from "../model/animal";

import {AppState} from "../store/app.reducer";
import {Store} from "@ngrx/store";
import {addAnewAnimal, deleteAnimalById, setAllTheAnimals, updateAnimalByID} from "../store/animal/animal.actions";
import {selectAllTheAnimals, selectAnimalState} from "../store/animal/animal.selectors";
import {AnimalState} from "../store/animal/animal.reducer";

@Injectable({
  providedIn: 'root'
})
export class AnimalStateService {
  constructor(private store: Store<AppState>) {


    this.store.select(selectAllTheAnimals).subscribe(data=>{

     // console.log(data);
      this.animalsSubject.next(data);
    })
  }

  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);
  public animalsSubject = new BehaviorSubject<Animal[]>([])
  loading$ = this.loadingSubject.asObservable();
  error$ = this.errorSubject.asObservable();
  animals$ = this.animalsSubject.asObservable();




  // animals$ = this.store.select(selectAnimalState).pipe(
  //   map(animalState => {
  //     const sortedAnimals = [...animalState.animals].sort((a: Animal, b: Animal) => a.no - b.no);
  //     return { ...animalState, animals: sortedAnimals };
  //   }),
  //   map(animalState => animalState.animals)
  // );



  // animals$ = this.store.select(selectAnimalState).pipe(
  //   map(animalState => animalState.animals)
  // );



  setLoading(loading:boolean){

    this.loadingSubject.next(loading);
  }

  setError(error: string | null){

    this.errorSubject.next(error);
  }


  getAnimalByID(id:number){
    return this.store.select(selectAnimalState).pipe(
      map(animalState => animalState.animals.filter(animal=>animal.id==id)[0])
    );
  }

  // setAnimalState(animals: Animal[]){
  //   this.store.dispatch(setAllTheAnimals({animals:animals}))
  //   console.log(this.animals$.subscribe(data => console.log('animals$',data)));
  // }

  // updateAnimalState(animal:Animal){
  //
  //   this.store.dispatch(updateAnimalByID({animal}))
  //
  // }

  // deleteAnimalState(id:number){
  //
  //   this.store.dispatch(deleteAnimalById({id}))
  // }

  // addAnimalState(animal:Animal){
  //
  //   this.store.dispatch(addAnewAnimal({animal}))
  // }






}
