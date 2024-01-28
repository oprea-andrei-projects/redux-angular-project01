import {Component, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {finalize, of, tap} from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {AnimalService} from "../service2/animal.service";
import * as AnimalActions from "../store/animal/animal.actions";
import {AnimalStateService} from "../stateservice/animal-state.service";


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



}
