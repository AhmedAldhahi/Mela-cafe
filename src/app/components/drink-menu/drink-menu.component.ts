import { Component } from '@angular/core';

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrl: './drink-menu.component.scss',
})
export class DrinkMenuComponent {
  drinksMenu = [
    // ☕ kaffe
    {
      name: 'kaffe',
      price: '36,-',
      description: 'Ferskbrygget kaffe.',
      category: 'kaffe',
      allergens: [],
    },
    {
      name: 'Påfyll kaffe',
      price: '16,-',
      description: 'Påfyll av kaffekoppen din.',
      category: 'kaffe',
      allergens: [],
    },
    {
      name: 'Arabisk kaffe',
      price: '36,-',
      description: 'Tradisjonell arabisk kaffe.',
      category: 'kaffe',
      allergens: [],
    },
    {
      name: 'Espresso, enkel',
      price: '36,-',
      description: 'Enkel og rik espresso.',
      category: 'kaffe',
      allergens: [],
    },
    {
      name: 'Espresso, dobbel',
      price: '39,-',
      description: 'Dobbel espresso-shot.',
      category: 'kaffe',
      allergens: [],
    },
    {
      name: 'Americano',
      price: '44,-',
      description: 'Myk espresso med varmt vann.',
      category: 'kaffe',
      allergens: ['M'],
    },
    {
      name: 'Cappuccino',
      price: '44,-',
      description: 'Espresso med steamet melk og skum.',
      category: 'kaffe',
      allergens: ['M'],
    },
    {
      name: 'Café Latte',
      price: '44,-',
      description: 'Espresso med rikelig steamet melk.',
      category: 'kaffe',
      allergens: ['M'],
    },
    {
      name: 'Mocca kaffe',
      price: '44,-',
      description: 'kaffe med sjokolade og melk.',
      category: 'kaffe',
      allergens: ['M'],
    },

    // ---------------------------------------------------------------------------------
    // 🍵 Te
    {
      name: 'Salviete',
      price: '39,-',
      description: 'Urte-te med salvie.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Mynte-te',
      price: '39,-',
      description: 'Forfriskende mynte-te.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Kanel-te',
      price: '39,-',
      description: 'Aromatisk kanel-te.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Kardemomme-te',
      price: '39,-',
      description: 'Sterk kardemomme-te.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Rooibos-te',
      price: '39,-',
      description: 'Sørafrikansk urte-te.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Grønn te',
      price: '39,-',
      description: 'Lett og forfriskende grønn te.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Ingefær-te',
      price: '39,-',
      description: 'Varmende ingefær-te.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Masala Chai',
      price: '39,-',
      description: 'Krydret indisk te med melk.',
      category: 'the',
      allergens: ['M'],
    },
    {
      name: 'Chai Latte',
      price: '39,-',
      description: 'Kremet chai med melk og krydder.',
      category: 'the',
      allergens: ['M'],
    },
    {
      name: 'Tekanne for 2',
      price: '69,-',
      description: 'Tekanne for to personer.',
      category: 'the',
      allergens: [],
    },

    // 🍫 Varm Sjokolade
    {
      name: 'Varm sjokolade med/uten krem',
      price: '49,-',
      description: 'Fyldig sjokoladedrikk, med eller uten krem.',
      category: 'varm sjokolade',
      allergens: ['M'],
    },
    {
      name: 'Chili Kakao',
      price: '49,-',
      description: 'Sterk varm sjokolade med chili.',
      category: 'varm sjokolade',
      allergens: ['M'],
    },

    // 🥭 Lassi (Yoghurtdrikk)
    {
      name: 'Mango Lassi',
      price: '69,-',
      description: 'Forfriskende mango-yoghurtdrikk.',
      category: 'Lassi',
      allergens: ['M'],
    },
    {
      name: 'Salt Lassi',
      price: '69,-',
      description: 'Saltet yoghurtdrikk.',
      category: 'Lassi',
      allergens: ['M'],
    },

    // 🧃 Juice
    {
      name: 'Fersk Appelsinjuice',
      price: '79,-',
      description: 'Ferskpresset appelsinjuice.',
      category: 'juice',
      allergens: [],
    },
    {
      name: 'Sitronjuice',
      price: '79,-',
      description: 'Forfriskende sitronjuice.',
      category: 'juice',
      allergens: [],
    },

    // -------------------------------------------------------------------------------------
    // 💧 Mineralvann
    {
      name: 'Jarritos Lime',
      price: '59,-',
      description: 'Jarritos brus med limesmak.',
      category: 'mineralvann',
      allergens: [],
    },
    {
      name: 'Jarritos Mandarin',
      price: '59,-',
      description: 'Jarritos brus med mandarinsmak.',
      category: 'mineralvann',
      allergens: [],
    },
    {
      name: 'Jarritos Mexican Cola',
      price: '59,-',
      description: 'Jarritos meksikansk cola.',
      category: 'mineralvann',
      allergens: [],
    },
    {
      name: 'Jarritos Guava',
      price: '59,-',
      description: 'Jarritos brus med guavasmak.',
      category: 'mineralvann',
      allergens: [],
    },
    {
      name: 'Only',
      price: '54,-',
      description: 'Mineralvann fra merket Only.',
      category: 'mineralvann',
      allergens: [],
    },
    {
      name: 'Eplejuice',
      price: '54,-',
      description: 'Forfriskende eplejuice.',
      category: 'mineralvann',
      allergens: [],
    },
    {
      name: 'Farris Grønn',
      price: '54,-',
      description: 'Kullsyreholdig mineralvann (grønn).',
      category: 'mineralvann',
      allergens: [],
    },
    {
      name: 'Farris Blå',
      price: '54,-',
      description: 'Kullsyreholdig mineralvann (blå).',
      category: 'mineralvann',
      allergens: [],
    },
    {
      name: 'Ingefærøl (0%)',
      price: '89,-',
      description: 'Alkoholfri ingefærøl.',
      category: 'mineralvann',
      allergens: [],
    },

    // 🥤 LYKKE Økologiske Håndverksdrikker
    {
      name: 'Lykki Rabarbradrikk',
      price: '54,-',
      description: 'Økologisk rabarbrabrus fra Lykki.',
      category: 'mineralvann',
      allergens: [],
    },
    {
      name: 'Lucky Cola',
      price: '54,-',
      description: 'Økologisk cola fra Lykki.',
      category: 'mineralvann',
      allergens: [],
    },
    {
      name: 'Lykki Appelsinbrus',
      price: '54,-',
      description: 'Økologisk appelsinbrus fra Lykki.',
      category: 'mineralvann',
      allergens: [],
    },
    {
      name: 'Lykki Sitronbrus',
      price: '54,-',
      description: 'Økologisk sitronbrus fra Lykki.',
      category: 'mineralvann',
      allergens: [],
    },
    {
      name: 'Lykki Hylleblomst',
      price: '54,-',
      description: 'Økologisk hylleblomstbrus fra Lykki.',
      category: 'mineralvann',
      allergens: [],
    },
    {
      name: 'Lykki Ville Jordbær',
      price: '54,-',
      description: 'Økologisk brus med ville jordbær fra Lykki.',
      category: 'mineralvann',
      allergens: [],
    },

    // 🍷 Husets Rødvin
    {
      name: 'Husets Rødvin (Cremisan Baladi - Palestina)',
      price: 'Glass: 119,- / Flaske: 550,-',
      description:
        'Frisk og fyldig med aroma av modne bær, krydder, plomme og vanilje.',
      category: 'Come',
      subCategory: 'Red Wine',
      allergens: ['Sv'],
    },
    {
      name: 'The Red Gourmets, Clos St. Thomas',
      price: 'Glass: 119,- / Flaske: 550,-',
      description:
        'Saftig, kjølig og myk med modne bær, tørket frukt, urter og krydder.',
      category: 'Come',
      subCategory: 'Red Wine',
      allergens: ['Sv'],
    },

    // -------------------------------------------------------------------------
    {
      name: 'Ch. St. Thomas (Libanon)',
      price: 'Glass: 129,- / Flaske: 590,-',
      description: 'Rund og balansert med krydder og tørket frukt.',
      category: 'Come',
      subCategory: 'Red Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Ch. Ksara Convent Reserve (Libanon)',
      price: 'Glass: 119,- / Flaske: 559,-',
      description:
        'Mørk rubinrød farge, aroma av vanilje og tre, runde tanniner og lang ettersmak.',
      category: 'Come',
      subCategory: 'Red Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Ch. Musar (Libanon)',
      price: 'Flaske: 1,119,-',
      description:
        'Mursteinsrød, moden, eksotisk og krydret med toner av sjokolade og lær.',
      category: 'Come',
      subCategory: 'Red Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Husets Hvitvin (Cremisan Dabouki - Palestina)',
      price: 'Glass: 119,- / Flaske: 550,-',
      description:
        'Frisk og fruktig med tropiske frukter, lime, melon, fersken og aprikos.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Obeidy, Ch. St. Thomas',
      price: 'Glass: 119,- / Flaske: 550,-',
      description: 'Frisk og fruktig med sitrusnoter.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Dreissigacker Økologisk Riesling Tørr (Tyskland)',
      price: 'Glass: 119,- / Flaske: 550,-',
      description:
        'Sitrus, eple, fersken og mineraltoner. Tørr og saftig med god fruktlengde.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'La Sablete Sauvignon Blanc (Frankrike)',
      price: 'Glass: 119,- / Flaske: 550,-',
      description:
        'Friske smaker av fersken, pasjonsfrukt, urter, sitron og lime.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Chardonnay, Ch. St. Thomas (Libanon)',
      price: 'Glass: 125,- / Flaske: 559,-',
      description: 'Full av frukt, integrert eik og lang ettersmak.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Chateau Ksara Merwah (Libanon)',
      price: 'Glass: 125,- / Flaske: 569,-',
      description:
        'Aroma av tropisk frukt, melon, guava og lime. Frisk og fruktig avslutning.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'The Gourmet Rosé, Clos St. Thomas',
      price: 'Glass: 119,- / Flaske: 550,-',
      description: 'Fruktig og fyldig med røde bær.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Prosecco',
      price: 'Glass: 119,- / Flaske: 550,-',
      description: 'Lett og perlende, klassisk Prosecco-smak.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },

    // -----------------------------------------------
    {
      name: 'Aperol Spritz',
      price: '139,-',
      description: 'Forfriskende italiensk cocktail med Prosecco og Aperol.',
      category: 'Come',
      subCategory: 'Rosé & Sparkling',
      allergens: ['Sv'],
    },
    {
      name: 'Jameson',
      price: '119,-',
      description: 'Klassisk irsk whiskey, myk og allsidig.',
      category: 'Whisky',
      allergens: [],
    },
    {
      name: 'Chivas Regal',
      price: '119,-',
      description: 'Blended skotsk whisky med rik og glatt karakter.',
      category: 'Whisky',
      allergens: [],
    },
    {
      name: 'Jack Daniels',
      price: '119,-',
      description: 'Kjent Tennessee-whiskey med toner av vanilje og eik.',
      category: 'Whisky',
      allergens: [],
    },
    {
      name: 'Glenfiddich',
      price: '129,-',
      description:
        'Single malt skotsk whisky kjent for sin friske og fruktige aroma.',
      category: 'Whisky',
      allergens: [],
    },
    {
      name: 'Johnnie Walker Red Label',
      price: '119,-',
      description: 'En kraftig blanding av krydrede og røykfylte malter.',
      category: 'Whisky',
      allergens: [],
    },
    {
      name: 'Johnnie Walker Black Label',
      price: '129,-',
      description: 'Myk og kompleks skotsk whisky lagret i 12 år.',
      category: 'Whisky',
      allergens: [],
    },
    {
      name: 'Finsk Gammel Portvin',
      price: '99,-',
      description: 'Fyldig og søt hetvin med dyp smak.',
      category: 'Hetvin',
      allergens: [],
    },
    {
      name: 'Bailey’s Original Irish Cream',
      price: '99,-',
      description: 'Kremet likør med hint av sjokolade og whiskey.',
      category: 'Hetvin',
      allergens: ['M'],
    },
    {
      name: 'Tyrkisk Pepper',
      price: '99,-',
      description: 'Sterk og krydret likør med en særegen smak.',
      category: 'Hetvin',
      allergens: [],
    },
    {
      name: 'Braastad 3 Stars',
      price: '119,-',
      description:
        'Myk og elegant cognac med en balansert blanding av frukt og eik.',
      category: 'Cognac',
      allergens: [],
    },

    // ---------------------------------------------------------------------
    {
      name: 'Martell',
      price: '119,-',
      description:
        'Klassisk fransk cognac kjent for sin myke og rike karakter.',
      category: 'Cognac',
      allergens: [],
    },
    {
      name: 'Akevitt',
      price: '119,-',
      description:
        'Tradisjonell skandinavisk brennevin med karve og kryddertoner.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Vodka',
      price: '119,-',
      description: 'Ren og skarp destillert sprit.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Rom',
      price: '119,-',
      description: 'Søt og fyldig rom i karibisk stil.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Tequila',
      price: '119,-',
      description: 'Meksikansk agavesprit med kraftig, jordnær smak.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Gin',
      price: '119,-',
      description: 'Urteaktig og aromatisk med fremtredende einebærsmak.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Jägermeister',
      price: '119,-',
      description: 'Kraftig urtebasert likør fra Tyskland.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Ouzo',
      price: '119,-',
      description: 'Anis-smaksatt aperitiff fra Hellas.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Ksarak (Arak)',
      price: '119,-',
      description: 'Levantinsk anis-smaksatt brennevin.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Gin Tonic',
      price: '139,-',
      description: 'Klassisk cocktail med gin og tonic.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Vodka Russian',
      price: '139,-',
      description: 'Kraftig cocktail basert på vodka.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Irish kaffe',
      price: '139,-',
      description: 'Varm kaffedrink med irsk whiskey og krem.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Bailey’s kaffe',
      price: '109,-',
      description: 'kaffe med kremet Bailey’s-likør.',
      category: 'annet',
      allergens: ['M'],
    },
    {
      name: 'Vodka Battery',
      price: '139,-',
      description: 'Vodka blandet med energidrikk.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Fernet Branca',
      price: '119,-',
      description: 'Italiensk bitter urte-likør.',
      category: 'annet',
      allergens: [],
    },

    // ------------------------------------------------------------------
    {
      name: 'North',
      price: '119,-',
      description: 'Sprit av uspesifisert type, vanligvis klar og nøytral.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Tillegg for mineralvann',
      price: '22,-',
      description: 'Ekstra kostnad for å legge til mineralvann i drikken.',
      category: 'annet',
      allergens: [],
    },
    {
      name: 'Aperol Spritz',
      price: '139,-',
      description: 'Forfriskende italiensk cocktail med Prosecco og Aperol.',
      category: 'annet',
      allergens: ['Sv'],
    },
    {
      name: 'Ringnes Fatøl (0,25L / 0,5L)',
      price: '55,- / 110,-',
      description: 'Norsk lager med lett og frisk profil. 4,7%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Schous Fatlagret Ale (0,4L)',
      price: '110,-',
      description: 'Ale med rik og maltrik smak. 4,7%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Brooklyn Lager (0,5L)',
      price: '119,-',
      description: 'Amerikansk amber lager med humle og karamellkarakter. 5,2%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Kronenbourg 1664 Blanc (0,5L)',
      price: '119,-',
      description: 'Fransk hveteøl med sitrus og koriandertoner. 4,5%',
      category: 'Beer/Misc',
      allergens: ['Mh', 'Mb'],
    },
    {
      name: 'Taybeh Golden (33cl)',
      price: '119,-',
      description: 'Lett lager fra Palestina. 5,0%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Taybeh Dark (33cl)',
      price: '125,-',
      description: 'Smaksrik mørk lager med karamell og tørket frukt. 6,0%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Taybeh Amber (33cl)',
      price: '125,-',
      description: 'Altbier med malt- og karamelltoner. 5,5%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Taybeh White (33cl)',
      price: '119,-',
      description: 'Hveteøl i belgisk stil med sitrus og koriander. 3,8%',
      category: 'Beer/Misc',
      allergens: ['Mh', 'Mb'],
    },
    {
      name: 'Taybeh IPA (33cl)',
      price: '125,-',
      description: 'Humlerik IPA med sitrus og midtøstenkrydder. 6,6%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Beirut Øl (33cl)',
      price: '119,-',
      description: 'Lett lager fra Libanon. 4,6%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Corona Extra (33cl)',
      price: '119,-',
      description: 'Populær meksikansk lager. 4,5%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Ringnes LITE (30cl, glutenfri)',
      price: '119,-',
      description: 'Glutenfri lett lager. 4,3%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Taybeh Vinterøl (33cl)',
      price: '119,-',
      description: 'Sesongbasert mørk lager. 7,5%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Taybeh Alkoholfri (33cl)',
      price: '89,-',
      description: 'Alkoholfritt øl fra Palestina. 0,0%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Munkholm (33cl)',
      price: '89,-',
      description: 'Norsk alkoholfritt øl. 0%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Ingefærøl',
      price: '89,-',
      description: 'Alkoholfri drikk med ingefærsmak.',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Almaza Øl (33cl, Libanon)',
      price: '119,-',
      description: 'Libanesisk lett lager. 4%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Bulmers (56,8cl)',
      price: '129,-',
      description: 'Britisk cider. 4,5%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Crowmoor (33cl)',
      price: '129,-',
      description: 'Sterk finsk cider. 5,5%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
  ];

  drinkCategories = [
    'kaffe',
    'the',
    'varm sjokolade',
    'Lassi',
    'juice',
    'mineralvann',
    'Come',
    'Whisky',
    'Hetvin',
    'Cognac',
    'annet',
    'Beer/Misc',
  ];

  getDrinksByCategory(category: string) {
    return this.drinksMenu.filter((drink) => drink.category === category);
  }
  getSubCategories(category: string): string[] {
    const subs = this.drinksMenu
      .filter((item) => item.category === category && item.subCategory)
      .map((item) => item.subCategory!);
    return [...new Set(subs)]; // unique list
  }

  getDrinksBySubCategory(category: string, sub: string) {
    return this.drinksMenu.filter(
      (item) => item.category === category && item.subCategory === sub
    );
  }
}
