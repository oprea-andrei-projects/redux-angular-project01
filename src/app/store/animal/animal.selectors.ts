import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AnimalState} from "./animal.reducer";


export const selectAnimalState = createFeatureSelector<AnimalState>('animals');

export const selectError = createSelector(

  selectAnimalState,
  (state => state.error)
)

export const selectMessage = createSelector(

  selectAnimalState,
  (state => state.message)
)

export const selectAllTheAnimals = createSelector(
  selectAnimalState,
  (state => state.animals)
)

