import {Component, OnDestroy, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Animal from "../model/animal";
import {AnimalStateService} from "../stateservice/animal-state.service";
import {AnimalService} from "../service2/animal.service";
import {map, switchMap} from "rxjs";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnDestroy{

  private id=0;
  public animalUpdateForm!:FormGroup;
  private animal:Animal ={
    id: 0, isChecked: false, name: "", no: 0

  }
  constructor(private route:Router, private secondRoute: ActivatedRoute, private stateService: AnimalStateService, private service: AnimalService) {


  }

  private createUpdateForm(){

    this.animalUpdateForm = new FormGroup({
        name: new FormControl(this.animal.name,[

          Validators.required,
        ]),
        no: new FormControl(this.animal.no,[
          Validators.min(1),
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ]),

      },
      {
        updateOn:'change'
      })


  }

  update(){
    const {name,no}=this.animalUpdateForm.value

   this.service.updateAnimal({
     ...this.animal,
     no,name
   }).subscribe(data =>{

        this.route.navigate([''])
     }

   );
  }

  delete(){

    this.secondRoute.params.subscribe(params =>{

      this.id = params['id'];
    })
    this.service.deleteAnimal(this.id).subscribe(data =>{


      this.route.navigate(['']);
    });



  }

  cancel(){
    this.route.navigate(['']);

  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {

    this.createUpdateForm()

    this.secondRoute.params.pipe(
      map(params => params['id']),
      switchMap(id => this.stateService.getAnimalByID(Number(id)))
    ).subscribe(animal => {
        if (animal) {
          this.animal = animal;
          this.createUpdateForm();

        }
    })

      // this.service.getAnimalById(this.id).subscribe(animal =>{
      //   console.log('din upate', animal);
      //   if(animal){
      //     this.animal = animal;
      //
      //    // console.log('din upate', this.animal);
      //     this.createUpdateForm()
      //   }

  }
}
