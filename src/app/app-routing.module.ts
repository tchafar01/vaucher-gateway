import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';
import { TraitementComponent } from './traitement/traitement.component';
import { HistoriqueComponent } from './historique/historique.component';




const routes: Routes = [
  {
    path: '', component: HomeComponent
  },


  {
    path: 'formulaire',component: FormulaireComponent
  },


  {
    path: 'confirmation',component: ConfirmationComponent
  },


  {
    path: 'traitement',component: TraitementComponent
  }
,

  {
    path: 'historique',component: HistoriqueComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
