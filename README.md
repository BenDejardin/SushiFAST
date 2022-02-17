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
Afin d’approcher le plus une réalité commerciale SushiFAST utilise par ailleurs une application Back-end avec NodeJS dans le cadre d’une API présentant la gamme de produits à la vente.   
#### Lien vers l'API 
https://github.com/BenDejardin/SushiAPI

### Objectif
L'application web SushiFAST dois permettre a un serveur de prendre la commande pour un client dans un point de vente.

### Liens dépôts
Cahier des charges :    
[Situation Professionnelle - Angular](https://slam-vinci-melun.github.io/sio22/phase2/SituationProfessionnelle-2-Angular-2021_22.pdf)

## Phase 1 : Analyse de la demande

### Diagramme des cas d’utilisations :
Afin d’avoir une représentation du comportement fonctionnel de notre application SushiFAST nous avons créé notre diagramme des cas d’utilisations.

### Diagramme des différents tiers web :
Nous avons représenté nos 3 couches Web avec les différentes requêtes entre eux.

### Requêtes illustrées sur l’API concernant l’ensemble des plateaux

###  Structure JSON (interface ts) des commandes dans le LocalStorage 
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

## Code source + UI



## Evil User 
En tant qu’utilisateur malveillant je réussi a accéder au site et je souhaite pouvoir supprimer la commande d’un client.    

En tant que développeur je rend donc l'accès au historique de commande impossible sans authentification et afin que la personne malveillante ne puisse pas récupérer ses informations, je hache les mots passes.

…

  

En tant que personne malveillante, je souhaite enregistrer un prix différent de celui de la commande initiale en modifiant le prix dans le LocalStorage. 

…

  

En tant qu’utilisateur malveillant je souhaite faire crash la page web en commandant des milliers de commandes grâce à un script.

En tant que développeur je rend donc impossible de commander plus de 3 commandes en 1 min et bloque le nombre maximum de commande dans l'historique à 50.

(Code facile a trouver je pense)

…

  

En tant que personne malveillante je souhaite commander une commande avec un nombre infini de boxes.

Je rend donc impossible à l'utilisateur de prendre plus de 100 fois la même boxes.

…
