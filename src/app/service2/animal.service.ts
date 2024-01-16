import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AnimalStateService} from "../stateservice/animal-state.service";
import Animal from "../model/animal";
import {AppState} from "../store/app.reducer";
import {Store} from "@ngrx/store";
import {catchError, Observable,  tap, throwError} from "rxjs";
import {setAllTheAnimals, updateAnimalByID} from "../store/animal/animal.actions";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private server = 'http://localhost:8081/api/v1/animal'

  constructor(private http: HttpClient, private animalState: AnimalStateService, private store:Store<AppState>) { }


  getAllTheAnimals() {
    this.animalState.setLoading(true);
    return this.http.get<Animal[]>(`${this.server}/allAnimals`).pipe(
      catchError(this.handleError)
    ).subscribe({
      next: (animals) => {

          this.animalState.setAnimalState(animals)
          this.animalState.setLoading(false)


      },
      error: (error) => {

          this.animalState.setError(error);
          this.animalState.setLoading(false);

      }
    })


  }

  updateAnimal(animal:Animal):Observable<Animal>{
    return this.http.put<Animal>(`${this.server}/updateAnimal`,animal).pipe(
      catchError(this.handleError),
      tap(anim => this.animalState.updateAnimalState(anim))
    )
  }

  deleteAnimal(id:number):Observable<number>{

    return this.http.delete<number>(`${this.server}/deleteAnim/${id}`).pipe(
      tap(idNo=> this.animalState.deleteAnimalState(idNo))
    )
  }

  addTheAnimal(animal:Animal){

    return this.http.post<Animal>(`${this.server}/addAnimal`,animal).pipe(
      catchError(this.handleError),
      tap((anim:Animal) => this.animalState.addAnimalState(anim))
    )

  }



  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log('from handleerror',error);
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `A client error occurred - ${error.error.message}`;
    } else {
      if (error.error.reason) {
        errorMessage = `${error.error.reason} - Error code ${error.status}`;
      } else {
        errorMessage = `An error occurred - Error code ${error.status}`;
      }
    }
    return throwError(()=>errorMessage);
  }
}
