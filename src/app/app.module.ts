import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
// import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { AnimalComponent } from './animal/animal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateComponent } from './update/update.component';
import { Home2Component } from './home2/home2.component';
import { SortAnimalsPipe } from './pipes/sort-animals.pipe';
import { SortAnimalsDescPipe } from './pipes/sort-animals-desc.pipe';
import { AnimalEffectsComponent } from './animal-effects/animal-effects.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AddComponent,
    UpdateComponent,
    Home2Component,
    SortAnimalsPipe,
    SortAnimalsDescPipe,
    AnimalEffectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([AnimalEffectsComponent]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


