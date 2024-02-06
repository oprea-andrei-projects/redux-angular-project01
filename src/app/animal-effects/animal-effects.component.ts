import {Component, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {finalize, of, tap} from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {AnimalService} from "../service2/animal.service";
import * as AnimalActions from "../store/animal/animal.actions";
import {AnimalStateService} from "../stateservice/animal-state.service";
import {updateAnimalByID} from "../store/animal/animal.actions";


@Component({
  selector: 'app-animal-effects',
  templateUrl: './animal-effects.component.html',
  styleUrls: ['./animal-effects.component.css']
})

@Injectable()
export class AnimalEffectsComponent {

  constructor(private actions$:Actions, private service: AnimalService, private animalState:AnimalStateService) {
  }

  loadAnimals$ = createEffect(()=>

      this.actions$.pipe(
        ofType(AnimalActions.loadAnimals),
        tap(() => this.animalState.setLoading(true)),
        mergeMap(() =>
          this.service.getAllTheAnimals().pipe(
            map(animals =>AnimalActions.setAllTheAnimals({animals})),
            catchError(error => {
              this.animalState.setError(error);
              this.animalState.setLoading(false);
              return of(AnimalActions.loadAnimalsFailure({ error }));

            })
          )
        ),
        finalize(() => this.animalState.setLoading(false))
      )
  )



  addAnimal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AnimalActions.addAnewAnimal),
      tap(() => this.animalState.setLoading(true)),
      mergeMap(action =>
        this.service.addTheAnimal(action.animal).pipe(
          map(() => AnimalActions.addAnimalSuccess({message:"Added Animal"})),
          catchError(error => {
            this.animalState.setError(error);
            this.animalState.setLoading(false);
            return of(AnimalActions.addAnimalFailure({ error }));
          })
        )
      ),
      finalize(() => this.animalState.setLoading(false))
    )
  );


  deleteAnimal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AnimalActions.deleteAnimalById),
      tap(() => this.animalState.setLoading(true)),
      mergeMap(action =>
        this.service.deleteAnimal(action.id).pipe(
          map(() => AnimalActions.deleteAnimalSuccess({ message: String(action.id) })),
          catchError(error => {
            this.animalState.setError(error);
            this.animalState.setLoading(false);
            return of(AnimalActions.deleteAnimalFailure({ error }));
          })
        )
      ),
      finalize(() => this.animalState.setLoading(false))
    )
  );



  updateAnimal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AnimalActions.updateAnimalByID),
      tap(() => this.animalState.setLoading(true)),
      mergeMap(action =>
        this.service.updateAnimal(action.animal).pipe(
          map(() => AnimalActions.updateAnimalSuccess({ message: String(action.animal) })),
          catchError(error => {
            this.animalState.setError(error);
            this.animalState.setLoading(false);
            return of(AnimalActions.updateAnimalFailure({ error }));
          })
        )
      ),
      finalize(() => this.animalState.setLoading(false))
    )
  );


}
