import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {AddComponent} from "./add/add.component";
import {UpdateComponent} from "./update/update.component";
import {Home2Component} from "./home2/home2.component";

const routes: Routes = [
  {path:'', component: Home2Component},
  {path:'add', component: AddComponent},
  {path:'update/:id', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
