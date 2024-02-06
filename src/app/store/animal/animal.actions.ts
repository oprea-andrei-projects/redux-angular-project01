import {createAction, props} from "@ngrx/store";
import Animal from "../../model/animal";

 const GET_ALL_THE_ANIMALS = 'GET_ALL_THE_ANIMALS';
 const ADD_NEW_ANIMAL = 'ADD_NEW_ANIMAL';
 const UPDATE_ANIMAL = 'UPDATE_ANIMAL';
 const DELETE_ANIMAL = 'DELETE_ANIMAL';
 const LOAD_ANIMAL_FAILURE = 'LOAD_ANIMAL_FAILURE';
 const LOAD_ANIMALS = 'LOAD_ANIMALS';
const ADD_ANIMAL_SUCCESS = 'ADD_ANIMAL_SUCCESS';
const ADD_ANIMAL_FAILURE = 'ADD_ANIMAL_FAILURE';
const DELETE_ANIMAL_SUCCESS = 'DELETE_ANIMAL_SUCCESS';
const DELETE_ANIMAL_FAILURE = 'DELETE_ANIMAL_FAILURE';
const UPDATE_ANIMAL_SUCCESS = 'UPDATE_ANIMAL_SUCCESS';
const UPDATE_ANIMAL_FAILURE = 'UPDATE_ANIMAL_FAILURE';

 export const loadAnimals = createAction(
   LOAD_ANIMALS,
   props<{message:string}>()
 )

 export const loadAnimalsFailure = createAction(
   LOAD_ANIMAL_FAILURE,
   props<{error : Error}>()
 )

export const setAllTheAnimals = createAction(
  GET_ALL_THE_ANIMALS,
  props<{animals : Animal[]}>()
);


 export const addAnimalSuccess = createAction(
   ADD_ANIMAL_SUCCESS,
   props<{message : string}>()
 )

export const addAnimalFailure = createAction(
  ADD_ANIMAL_FAILURE,
  props<{error : Error}>()
)
export const addAnewAnimal = createAction(
  ADD_NEW_ANIMAL,
  props<{animal:Animal}>()
)

export const updateAnimalByID= createAction(
  UPDATE_ANIMAL,
  props<{animal:Animal}>()
)

export const deleteAnimalById = createAction(
  DELETE_ANIMAL,
  props<{id:number}>()
)

export const deleteAnimalSuccess = createAction(
  DELETE_ANIMAL_SUCCESS,
  props<{message: string}>()
)

export const deleteAnimalFailure = createAction(

  DELETE_ANIMAL_FAILURE,
  props<{error: Error}>()

)

export const updateAnimalSuccess = createAction(

  UPDATE_ANIMAL_SUCCESS,
  props<{message: string}>()
)

export const updateAnimalFailure = createAction(

  UPDATE_ANIMAL_FAILURE,
  props<{error: Error}>()
)


