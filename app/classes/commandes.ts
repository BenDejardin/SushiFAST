export class Commandes {
    constructor(
        public numCommande: number,
        public prix: number,
        public detail: Detail[]
    ) { }
}

export class Detail {
    constructor(
        public nomPlateau: string,
        public quantite: number
    ) { }
}

