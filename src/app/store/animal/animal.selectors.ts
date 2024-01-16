import {createFeatureSelector} from "@ngrx/store";
import {AnimalState} from "./animal.reducer";


export const selectAnimalState = createFeatureSelector<AnimalState>('animals');



