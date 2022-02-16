import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../services/crud.service";
import { LigneCommande } from '../../classes/ligne-commande';
import { Commandes, Detail } from '../../classes/commandes';

@Component({
  selector: 'app-plateaux',
  templateUrl: './plateaux.component.html',
  styleUrls: ['./plateaux.component.css']
})

export class PlateauxComponent implements OnInit {

  title = 'sushifast';
  Boxes: any = [];

  boxe: any = {
    id: '',
    nom: '',
    pieces: 0,
    composition: [],
    saveurs: [],
    prix: 0.0,
    image: ''
  };

  commande: LigneCommande[];
  detail: Detail[];

  commandes: Commandes[];
  totalCommande: number = 0.0;
  details = Array();
  showModal: boolean = false;


  constructor(public crudService: CrudService) {
    this.commande = [];
    this.commandes = JSON.parse(String(localStorage.getItem("Commandes") || '[]'));
    this.detail = [];
  }
  ngOnInit() {
    this.fetchBoxes()

  }

  fetchBoxes() {
    return this.crudService.getBoxes().subscribe((data: {}) => {
      this.Boxes = data; console.log(this.Boxes)
    })
  }

  plus(index: number) {
    // Exemple d'affectation
    const nomsDeBoxesCommandees = this.commande.map(value => value.nomPlateau);
    const panier: any | Map<string, number> = new Map();

    nomsDeBoxesCommandees.forEach(nomDeBoxeCommandee => (panier.set(nomDeBoxeCommandee, (panier.get(nomDeBoxeCommandee) || 0) + 1)))


    if (panier.get(this.Boxes[index].nom) == 1) {
      for (let i = 0; i < this.commande.length; i++) {
        if (this.commande[i].nomPlateau == this.Boxes[index].nom) {
          this.commande[i].quantite++;
          this.commande[i].prix = this.commande[i].quantite * this.Boxes[index].prix;
          this.commande[i].prix = Math.round(1000 * this.commande[i].prix) / 1000;
        }
      }
    }

    else {

      let numCommande = Math.floor(Math.random() * (99 + 1));
      let uneLigne = new LigneCommande(numCommande, this.Boxes[index].nom, 1, this.Boxes[index].prix);
      this.commande.push(uneLigne);
    }

    this.totalCommande = (this.totalCommande + this.Boxes[index].prix);
    this.totalCommande = Math.round(1000 * this.totalCommande) / 1000;

  }

  moins(index: number) {
    const nomsDeBoxesCommandees = this.commande.map(value => value.nomPlateau);
    const panier: any | Map<string, number> = new Map();

    nomsDeBoxesCommandees.forEach(nomDeBoxeCommandee => (panier.set(nomDeBoxeCommandee, (panier.get(nomDeBoxeCommandee) || 0) + 1)))


    if (panier.get(this.Boxes[index].nom) == 1) {
      for (let i = 0; i < this.commande.length; i++) {
        if (this.commande[i].nomPlateau == this.Boxes[index].nom && this.commande[i].quantite > 0) {
          this.commande[i].quantite--;
          this.commande[i].prix = this.commande[i].quantite * this.Boxes[index].prix;
          this.commande[i].prix = Math.round(1000 * this.commande[i].prix) / 1000;
        }

        console.log(this.commande);
        if (this.commande[i].quantite == 0) {
          this.commande.splice(i, 1);
        }
        console.log(this.commande);
      }

      this.totalCommande = this.totalCommande - this.Boxes[index].prix;
      this.totalCommande = Math.round(1000 * this.totalCommande) / 1000;


    }
  }

  affModal(i: number) {
    if (this.showModal) {
      this.showModal = false;
    } else {
      console.log("Modal indice :" + i);
      console.log("Modal nom plateau :" + this.Boxes[i].nom);
      this.boxe = this.Boxes[i];
      this.showModal = true;
    }
  }

  finalisation() {
    for (let i = 0; i < this.commande.length; i++) {
      this.details.push(new Detail(this.commande[i].nomPlateau, this.commande[i].quantite));
    }
    let uneCommande = new Commandes(this.commande[0].numCommande, this.totalCommande, this.details)

    
    this.commandes.push(uneCommande);
    this.commande = [];
    this.details = [];
    this.totalCommande = 0;
    let tabItems = JSON.stringify(this.commandes);
    localStorage.setItem('Commandes', tabItems);
  }
}
