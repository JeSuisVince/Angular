import { Component } from '@angular/core';

@Component({
  selector: 'app-exposant',
  templateUrl: './exposant.component.html',
  styleUrls: ['./exposant.component.css']
})
export class ExposantComponent {
  data = [
    { name: 'Ferme des 4 vents',URL:'www.ferme4vents.com', numero:'JEFO-052', name2:['Lait', 'Viande', 'Fromage']},
    { name: 'Les jardins de l\'Ange-Gardien',URL:'www.jardinsangegardien.com', numero:'LA COOP-808', name2:['Légumes', 'Fruits', 'Herbes']},
    { name: 'Ferme Bio Nature',URL:'www.fermebionature.com', numero:'LA COOP-927', name2:['Légumes', 'Fruits', 'Viande']},
    { name: 'Fromagerie l\'Ancêtre',URL:'www.fromagerielancetre.com', numero:'JEFO-040', name2:['Fromage', 'Lait']},
    { name: 'Agricarrières',URL:'www.agricarrieres.qc.ca', numero:'JEFO-103', name2:['Service']},
    { name: 'Agridepot',URL:'Agridepot.ca', numero:'BMO-470', name2:['Légumes', 'Fruits']},
    { name: 'AgriExtra',URL:'www.agriextra.ca', numero:'JEFO-088', name2:['Viande', 'Lait']},
    { name: '	Agrilog',URL:'www.agrilog.ca', numero:'LA COOP-930', name2:['Frommage', 'Lait']},
    { name: '	AGRIMÉTRIE',URL:'https://www.agrimetrie.com/', numero:'JEFO-090', name2:['Lait']},
    { name: 'Ferme du potager',URL:'www.fermedupotager.com', numero:'JEFO-032', name2:['Céréale']},
    { name: 'Ferme La Paysanne', URL: 'www.fermelapaysanne.com', numero: 'JEFO-129', name2: ['Légumes', 'Fruits', 'Viande']},
    { name: 'Fromagerie La Vache à Maillotte', URL: 'www.vacheamaillotte.com', numero: 'LA COOP-763', name2: ['Fromage', 'Lait']},
    { name: 'Ferme la Terre Promise', URL: 'www.terrepromise.ca', numero: 'JEFO-071', name2: ['Légumes', 'Fruits', 'Herbes']},
    { name: 'Boulangerie artisanale Le Pain dans les Voiles', URL: 'www.lepaindanslesvoiles.com', numero: 'LA COOP-991', name2: ['Pain']},
    { name: 'Ferme du Ruisseau Vert', URL: 'www.ruisseauvert.com', numero: 'JEFO-092', name2: ['Légumes', 'Fruits', 'Viande']},
    { name: 'Fromagerie Au Gré des Champs', URL: 'www.augredeschamps.com', numero: 'LA COOP-623', name2: ['Fromage', 'Lait']},
    { name: 'Ferme de la Rosée', URL: 'www.fermedelarosee.ca', numero: 'JEFO-107', name2: ['Légumes', 'Fruits', 'Herbes']},
    { name: 'Ferme Aux petits oignons', URL: 'www.auxpetitsoignons.com', numero: 'LA COOP-890', name2: ['Légumes', 'Herbes']},
    { name: 'Miel de chez nous', URL: 'www.mieldecheznous.ca', numero: 'JEFO-054', name2: ['Miel']},
    { name: 'Ferme La Fille du Roy', URL: 'www.lafilleduroy.com', numero: 'LA COOP-750', name2: ['Légumes', 'Fruits', 'Herbes', 'Miel']}
  ];

  filteredData = this.data;

  searchTerm: string = '';

  search() {
    this.filteredData = this.data.filter((item) => {
      return item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
  //  videoUrl = 'https://www.youtube.com/watch?v=EnVXJHTrR0w';

  apiLoaded = false;

  videoId = 'EnVXJHTrR0w';
  
  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
  
}
