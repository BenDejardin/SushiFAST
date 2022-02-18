
### Equipe : Les PaD'IDs

  

- DEJARDIN Benjamin

- ELISE Axel

### Date de projet

6 Décembre 2021 - 18 Février 2022

  

### Niveaux

2ème années de BTS SIO SLAM

  

## Informations techniques

  

### Versions

  

- NodeJS : 16.13.0

- Angular CLI : 13.0.1

- Bulma : 0.9.3

- MongoDB : 4.4.9

- MongoDB Compass : 1.30.1

  

# SushiFAST

SushiFAST est une mission sous forme de situation professionnelle qui repose sur le développement d'une application **Front-end** avec le framework **Angular**.

<br>

Afin d’approcher au plus d'une réalité commerciale SushiFAST utilise une application Back-end avec NodeJS dans le cadre d’une API présentant la gamme de produits à la vente.

#### Lien vers l'API

https://github.com/BenDejardin/SushiAPI

  

### Objectif

L'application web SushiFAST doit permettre à un serveur de prendre la commande pour un client dans un point de vente.

  

### Liens dépôts

Cahier des charges :

[Situation Professionnelle - Angular](https://slam-vinci-melun.github.io/sio22/phase2/SituationProfessionnelle-2-Angular-2021_22.pdf)

  

## Phase 1 : Analyse de la demande

  

### Diagramme des cas d’utilisations :

Afin d’avoir une représentation du comportement fonctionnel de notre application SushiFAST nous avons créé notre diagramme des cas d’utilisations.
![enter image description here](https://github.com/BenDejardin/SushiFAST/blob/main/imageReadme/cas%20d%27utilisation.png?raw=true)
  

### Diagramme des différents tiers web :

Nous avons représenté nos 3 couches Web avec les différentes requêtes entre eux.
![enter image description here](https://github.com/BenDejardin/SushiFAST/blob/main/imageReadme/3%20tiers.png?raw=true)
  

### Requêtes illustrées sur l’API concernant la récupération d'une boxe.
![enter image description here](https://github.com/BenDejardin/SushiFAST/blob/main/imageReadme/Lien_api.png?raw=true)

### Structure JSON (interface ts) des commandes dans le LocalStorage

```typescript

interface ItemPanier {
	nomBoxe : string,
	quantite : number
}

export interface Panier {
	numCommande : number,
	listeBoxes : ItemPanier[],
	prix : number
}

```
## Phase 2 : Code source + UI
#### ACCUEIL
  ![enter image description here](https://github.com/BenDejardin/SushiFAST/blob/main/imageReadme/menu.PNG?raw=true)
Au lancement de l'application le serveur arrivera sur cette page d'accueil.     

#### COMMANDE

![enter image description here](https://github.com/BenDejardin/SushiFAST/blob/main/imageReadme/Commande%20v.PNG?raw=true)
  
#### Affichage des boxes
##### Code
*plateaux.component.ts*
```typescript
fetchBoxes() {
	return this.crudService.getBoxes().subscribe((data: {}) => {
		this.Boxes = data; 
	})
}
```
Nous récupérons les informations depuis la classe CrudServices qui appelle l'ensemble des boxes grâce à l'API et ont le place dans la variable Boxes.

*plateaux.component.html*
```html
<div  class="plateaux">
	<div  class="boxe"  *ngFor="let item of Boxes; let index = index">
		<hr>
		<div  class="has-text-centered">{{item.nom}}</div>
		<img  [src]="'../../../assets/images/'+item.image+'.webp'"><br>

		<div  class="has-text-centered">
			<button  class="button is-light"  (click)="moins(index)">-</button>&nbsp;
			<button  class="button is-light"  (click)="affModal(index)">Détails</button>&nbsp;
			<button  class="button is-light"  (click)="plus(index)">+</button>
		</div>
	</div>
</div>
```
 ##### Liste des boxes : 
![](https://github.com/BenDejardin/SushiFAST/blob/main/imageReadme/rectangle.jpg?raw=true)

Lors de la commande le serveur peut ajouter ou supprimer 1 boxe à l'aide des bouton + - qui sera directement actualiser dans la commande. 
#### Affichage de la commande
![enter image description here](https://github.com/BenDejardin/SushiFAST/blob/main/imageReadme/rectangle2.jpg?raw=true)

##### Détails
Le serveur pourra également accéder au détail de la boxes en appuyant sur le bouton détail.

![enter image description here](https://github.com/BenDejardin/SushiFAST/blob/main/imageReadme/detail%20box.PNG?raw=true)

Un modale s'active après appuie de se bouton

##### Changement de l’état du modal : 
*plateaux.component.ts*
```typescript
affModal(i: number) {
	if (this.showModal) {
		this.showModal = false;
	} else {
		this.boxe = this.Boxes[i];
		this.showModal = true;
	}
}
```
*plateaux.component.html*
```html
<div  class="modal is-active"  *ngIf="showModal">
	<div  class="detail">
		<div  class="modal-background"></div>
		<div  class="modal-content">
			<h1  class="title is-3"  style="color:azure;">{{boxe.nom}}</h1>

			<img  [src]="'../../../assets/images/'+boxe.image+'.webp'">
			<br>

			<br>
			<button  class="button is-primary"  (click)="affModal(0)">Fermer</button>
		</div>
		<div  class="modal-content">
			<h1  class="title is-3"  style="color:azure;">Composition</h1>
			<div  *ngFor="let compo of boxe.composition">
				<p  style="color:azure;">{{compo.quantite}} {{compo.nom}}</p>
			</div>
			<br>
			<p  style="color:azure; font-weight: bold;">Nombre de pièces : {{boxe.pieces}}</p>
		</div>
		<div  class="modal-content">
			<h1  class="title is-3"  style="color:azure;">Saveurs</h1>
			<div  *ngFor="let saveur of boxe.saveurs">
				<p  style="color:azure;">{{saveur}}</p>
			</div>
			<br>
			<p  style="color:azure; font-weight: bold;">Prix : {{boxe.prix}}€</p>
		</div>
	</div>
</div>
```

#### ENREGISTREMENT DES DONNÉES DANS LE LOCAL STORAGE

```typescript 
Benjamin mettra plus tard
```
![enter image description here](https://github.com/BenDejardin/SushiFAST/blob/main/imageReadme/localstorage.PNG?raw=true)

##### Détails de commande 

![enter image description here](https://github.com/BenDejardin/SushiFAST/blob/main/imageReadme/detail%20commande.PNG?raw=true)

## Phase 3 : Evil User 
              
En tant que serveur malveillant, je souhaite enregistrer un prix
    différent de celui de la commande initiale d'un proche en
              modifiant le prix dans le LocalStorage. 
              
En tant que développeur afin de contrer cette vulnérabilité, je
              crypte les données concernant les commandes. 
              
``` 
npm install ts-md5 
```  
```typescript 
import {Md5} from 'ts-md5/dist/md5'; 
... 
finalisation() { 
this.totalCommande =
Md5.hashStr(this.totalCommande); // Hashage du prix 
let  uneCommande = new Commandes(this.commande[0].numCommande,
this.totalCommande, this.details)
this.commandes.push(uneCommande);
	
let  tabItems = JSON.stringify(this.commandes);
localStorage.setItem('Commandes', tabItems);
              
} 
```
              
En tant qu’utilisateur malveillant je souhaite faire crash la page web en commandant des milliers de commandes grâce à un script.
              
En tant que développeur je rend donc impossible de commander plus de 10 commandes en 1 min et bloque le nombre maximum de commande dans l'historique à 50.
