import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Store} from "@ngrx/store";
import {AppState} from "../store/app.reducer";
import {addAnewAnimal} from "../store/animal/animal.actions";
import {AnimalService} from "../service2/animal.service";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnDestroy{

  public animalForm!: FormGroup;
  constructor(private route:Router, private store:Store<AppState>, private service:AnimalService) {
  }

  public goHome(){

    this.route.navigate([''])
  }

  ngOnDestroy(): void {


  }

  ngOnInit(): void {

    this.createForm();
  }


  private createForm(){

    this.animalForm = new FormGroup({
        name: new FormControl(null,[

          Validators.required,
        ]),
        no: new FormControl(null,[
          Validators.min(1),
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ]),

      },
      {
        updateOn:'change'
      })


  }


  public addAnimal() {
    if (this.animalForm.valid) {
      const formData = { ...this.animalForm.value };
      //console.log('before:', formData);

      this.service.addTheAnimal(formData).subscribe(data=>{

        this.route.navigate([''])
      })



    }
  }


}
