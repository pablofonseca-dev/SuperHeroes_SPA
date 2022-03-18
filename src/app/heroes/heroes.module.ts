import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroeCardComponent } from './components/hero-card/hero-card.component';
import { HeroPicturePipe } from './pipes/heroPicture/hero-picture.pipe';
import { HeroComponent } from './pages/hero/hero.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    ListComponent,
    AddComponent,
    SearchComponent,
    HeroeCardComponent,
    HeroPicturePipe,
    ConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,
    SharedModule,
    MaterialModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class HeroesModule {}
