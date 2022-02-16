import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlateauxComponent } from './components/plateaux/plateaux.component';
import { RgpdComponent } from './components/rgpd/rgpd.component';
import { HomeComponent } from './components/home/home.component';
import { HistoriqueComponent } from './components/historique/historique.component';

const routes: Routes = [
  { path: 'commande', component: PlateauxComponent },
  { path: 'historique-commandes', component: HistoriqueComponent },
  { path: '', component: HomeComponent},
  { path: 'rgpd', component: RgpdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
