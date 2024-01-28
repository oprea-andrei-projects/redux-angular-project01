import Animal from "../../model/animal";
import {createReducer, on, Action} from '@ngrx/store';
import * as Actions from './animal.actions';
import {state} from "@angular/animations";

export interface AnimalState{
    animals: Animal[];
    error?: Error;
    message?:string;
}

export const initialAnimalState : AnimalState = {
    animals:[],


}



export const animalReducer = createReducer(
  initialAnimalState,
  on(Actions.loadAnimals,(state,{message}):AnimalState=>(
    {
      ...state,
      message:message
    })
  ),

  on(Actions.loadAnimalsFailure,(state,{error}):AnimalState=>(
    {
      ...state,
      error:error
    })
  ),

  on(Actions.setAllTheAnimals,(state,{animals}):AnimalState=>{

    console.log("asdsad");
    return  (
      {
        ...state,
        animals:animals
      })
    }
  ),
  on(Actions.addAnewAnimal,(state, {animal}):AnimalState=>(
    {
      ...state,
      animals:[...state.animals,animal]
    }
  ),



),

  on(Actions.updateAnimalByID, (state : AnimalState, {animal}): AnimalState =>{
    const newState= {
      ...state,
      animals:[...state.animals.filter(a => a.id!=animal.id)]
    }

    newState.animals.push(animal)

    return newState
  }),

  on(Actions.deleteAnimalById,(state:AnimalState,{id}):AnimalState =>{

    const newState = {

      ...state,
      animals:[...state.animals.filter(a=>a.id!=id)]
    }

    return newState

  })
)
