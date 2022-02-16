import { Component, OnInit } from '@angular/core';
import { LigneCommande } from 'src/app/classes/ligne-commande';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  commandes = [];
  detailsCommande = [];
  showModal: boolean = false;
  numeroCommande: number = 0;
  commandeVide: boolean = false;

 

  ngOnInit(): void {
    this.commandes = JSON.parse(String(localStorage.getItem("Commandes")));
    console.log(this.commandes);
    if (this.commandes.length == 0){
      this.commandeVide = true;
      console.log(this.commandeVide);
    }
  }

  delete(index: number){
    let arrayDataCommande  = JSON.parse(String(localStorage.getItem("Commandes")));
    //console.log(arrayDataCommande.length);
    arrayDataCommande.splice(index, 1);
    localStorage.setItem('Commandes', JSON.stringify(arrayDataCommande));
    this.commandes = arrayDataCommande;
    if (this.commandes.length == 0){
      this.commandeVide = true;
      console.log(this.commandeVide);
    } 
  }

  affModal(i: number) {
    if (this.showModal) {
      this.showModal = false;
    } else {
      this.detailsCommande = this.commandes[i]['detail'];
      this.showModal = true;
      this.numeroCommande = this.commandes[i]['numCommande'];
    }
  }

}
