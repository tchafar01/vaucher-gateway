import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { TraitementComponent } from './traitement/traitement.component';
import { HistoriqueComponent } from './historique/historique.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    ConfirmationComponent,
    TraitementComponent,
    HistoriqueComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
