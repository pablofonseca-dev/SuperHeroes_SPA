import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { HeroePicturePipe } from './pipes/heroePicture/heroe-picture.pipe';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroeComponent,
    HomeComponent,
    ListComponent,
    AddComponent,
    SearchComponent,
    HeroeCardComponent,
    HeroePicturePipe
  ],
  imports: [
    CommonModule, 
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HeroesModule { }
