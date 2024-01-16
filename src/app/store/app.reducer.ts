import * as fromAnimal from './animal/animal.reducer';
import {ActionReducerMap} from "@ngrx/store";

export interface AppState{

    animals: fromAnimal.AnimalState;
}

export const appReducer: ActionReducerMap<AppState> = {

  animals: fromAnimal.animalReducer

}
