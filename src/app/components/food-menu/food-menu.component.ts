import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.scss',
})
export class FoodMenuComponent {
  lunchMenu = [
    {
      name: 'Stuffed',
      price: '179,-',
      type: 'Vegansk',
      description:
        'Fylte vinblader med ris. Servert med bulgur, pitabrød og salat.',
      allergens: ['H'],
    },
    {
      name: 'Falafel',
      price: '179,-',
      type: 'Vegansk',
      description:
        'Fritert kikertblanding, servert med pitabrød og avokadohummus.',
      allergens: ['H', 'Sf', 'Sn'],
    },
    {
      name: 'Eplesalat',
      price: '179,-',
      type: 'Vegansk',
      description:
        'Blandet salat med rosiner og hvitløk braisert i olivenolje, granateple og eddik. Servert med pitabrød. (Man, Fre, Lør)',
      allergens: [],
    },
    {
      name: 'Mulligatawny',
      price: '179,-',
      type: 'Vegansk',
      description: 'Linsesuppe.',
      allergens: ['H'],
    },
    {
      name: 'Shakshuka',
      price: '179,-',
      type: 'Inneholder melk, egg',
      description:
        'Posjerte egg i en krydret tomatsaus med pitabrød ved siden av.',
      allergens: ['H', 'E'],
    },
    {
      name: 'Seekh Kebab',
      price: '199,-',
      type: 'Inneholder melk',
      description:
        'Seekh kebab på spyd, servert med pitabrød, salat og tzatziki.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Kylling Tawok',
      price: '199,-',
      type: 'Inneholder melk',
      description: 'Servert med bulgur, tzatziki og salat.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Mezah Lunsjtallerken (Vegetar/Kjøtt)',
      price: '189,-/199,-',
      type: 'Begge alternativer',
      description:
        'Variasjon av dagens mezah. Servert som vegetarisk eller kjøttrett med pitabrød.',
      allergens: ['M', 'H', 'Sf'],
    },
  ];

  mainCourses = [
    {
      name: 'Kyllingvinger',
      price: '279,-',
      description: 'Servert med bulgur, pitabrød, tzatziki og salat.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Cardigan',
      price: '279,-',
      description:
        'Koftagryte, godt krydret kjøttdeig. Servert med salat, pitabrød, tzatziki og bulgur.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Kyllinggryte',
      price: '279,-',
      description:
        'Kylling med spinat og egyptisk molokhia (jute-blader). Servert med bulgur, pitabrød, tzatziki og salat.',
      allergens: ['M', 'H', 'Sf', 'Pk'],
    },
    {
      name: 'Sikh Kebab',
      price: '279,-',
      description:
        'Seekh kebab tilberedt med tradisjonelle Midtøsten-metoder. Servert med pitabrød, tomat og hvitløk.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Lammekoteletter',
      price: '299,-',
      description: 'Servert med bulgur, pitabrød, tzatziki og salat.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Shakiria Masala',
      price: '279,-',
      description:
        'Oksegryte i en velsmakende yoghurtsaus med masalakrydder. Anbefales! Servert med bulgur, pitabrød, tzatziki og salat.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Kylling Tawok',
      price: '299,-',
      description:
        'Godt marinert benfri kyllinglår fra grillen. Saftig og smakfull. Servert med bulgur, pitabrød, avokadohummus, tzatziki og salat.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Grill Mix',
      price: '319,-',
      description:
        'Marinert kylling og Seekh kebab på spyd. Servert med bulgur, pitabrød, tzatziki og salat.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Halloumiburger',
      price: '279,-',
      description:
        'Ost med tradisjon fra tidlig arabisk kjøkken. Servert med avokadohummus og tzatziki.',
      allergens: ['M', 'H', 'Sf'],
    },
  ];

  mezahMenu = [
    {
      name: 'Vegetarisk Mezah',
      price: '315,-',
      description:
        'Seks forskjellige vegetariske mezahretter satt sammen av kokken. Perfekt for deling.',
      allergens: ['H', 'M', 'P', 'Sf'],
    },
    {
      name: 'Mezah med Kjøtt',
      price: '330,-',
      description:
        'Seks forskjellige mezahretter med kjøtt, satt sammen av kokken. Flott for to eller flere.',
      allergens: ['H', 'M', 'P', 'Sf'],
    },
    {
      name: 'Klassisk Mezah med Grillretter',
      price: '440,- per person',
      description:
        'Inkluderer hummus, tzatziki, tabbouleh, falafel, sambosa, arabisk tallerken, halloumi, kylling, seekh kebab, buffalo kyllingvinger, bulgur og pitabrød. Minst 2 personer.',
      allergens: ['M', 'H', 'Sf', 'P'],
    },
    {
      name: 'Kald Mezah – per rett',
      price: '79,-/89,-',
      description:
        'Hummus • Hummus med avokado • Tzatziki • Aioli • Tabbouleh • Baba Ganosh • Dolma • Syrisk salat',
      allergens: ['Sf', 'M', 'H'],
    },
    {
      name: 'Varm Mezah – per rett',
      price: '79,-/89,-',
      description:
        'Aubergine • Blomkålfingre • Halloumi • Börek minirull • Bulgur • Falafel • Vegetarisk Sambosa • Kikerter i tomatsaus • Ris • Kjøttboller • Oksekjøtt i saus • Arabisk pølse • Kylling i saus • Potetbåter • Batataharra',
      allergens: ['H', 'M', 'Sf'],
    },
    {
      name: 'Mini Grill Mezah Retter',
      price: '120,- per rett',
      description:
        'Velg mellom: Seekh kebabspyd, Kylling Tawok, Lammekoteletter, Kyllingvinger',
      allergens: ['H', 'M'],
    },
    {
      name: 'Pitabrød',
      price: '25,-',
      description: 'Vanlig hvete-pitabrød.',
      allergens: ['H'],
    },
    {
      name: 'Zaatar Pitabrød (Timian)',
      price: '30,-',
      description: 'Hvete-pitabrød toppet med zaatar (timian).',
      allergens: ['H', 'Sf'],
    },
    {
      name: 'Sterkt Pitabrød',
      price: '30,-',
      description: 'Sterkt krydret hvete-pitabrød.',
      allergens: ['H'],
    },
    {
      name: 'Hvitløks Pitabrød',
      price: '30,-',
      description: 'Pitabrød med hvitløk.',
      allergens: ['H'],
    },
    {
      name: 'Ostet Pitabrød',
      price: '49,-',
      description: 'Pitabrød toppet med ost.',
      allergens: ['H', 'M', 'Sf'],
    },
    {
      name: 'Mix Pitabrød',
      price: '59,-',
      description: 'Kombinasjonspitabrød med ost og andre toppinger.',
      allergens: ['H', 'M', 'Sf'],
    },
  ];

  hummusEmpireMenu = [
    {
      name: 'Vegetarmix med Hummus',
      price: '289,-',
      description: 'Halloumi, börek med spinat og fetaost, ovnsbakte rotgrønnsaker og hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Halloumi med Hummus',
      price: '279,-',
      description: 'Halloumiost med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Börek Minirull med Hummus',
      price: '279,-',
      description: 'Hummus med börek (spinat og fetaost). Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Arabisk Pølse med Hummus',
      price: '289,-',
      description: 'Sterk arabisk pølse med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Oksekjøtt med Hummus',
      price: '279,-',
      description: 'Smakfullt oksekjøtt fra gryte med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Kjøttboller med Hummus',
      price: '279,-',
      description: 'Godt krydrede kjøttboller med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Kylling med Hummus',
      price: '299,-',
      description: 'Godt marinert kylling med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Lammekoteletter med Hummus',
      price: '299,-',
      description: 'Lammekoteletter med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Seekh Kebab med Hummus',
      price: '299,-',
      description: 'Tradisjonell Seekh kebab med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Kyllinglår med Hummus',
      price: '279,-',
      description: 'Grillede kyllinglår med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Grillmix med Hummus',
      price: '319,-',
      description: 'Marinert kylling og Seekh kebab med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Sterk Hummus (Vegansk)',
      price: '244,-',
      description: 'Sterk hummus med ovnsbakte rotgrønnsaker, salat og pitabrød.',
      allergens: ['Sf', 'H'],
    },
  ];
  

  veganMenu = [
    {
      name: 'Sterk Hummus',
      price: '244,-',
      description: 'Med ovnsbakte rotgrønnsaker, salat og pitabrød.',
      allergens: ['Sf', 'H']
    },
    {
      name: 'Sterk Sambosa',
      price: '244,-',
      description: 'Med ovnsbakte rotgrønnsaker, salat og pitabrød.',
      allergens: ['H']
    },
    {
      name: 'Falafel',
      price: '244,-',
      description: 'Fritert kikertblanding, servert med pitabrød, avokadohummus og salat. Tilgjengelig uten allergener.',
      allergens: ['H', 'Sf', 'Sn']
    },
    {
      name: 'Salat hos Mela',
      price: '244,-',
      description: 'Blandet salat med rosiner og hvitløk braisert i olivenolje, granateple og eddik. Servert med pitabrød. Kan lages uten allergener.',
      allergens: ['H', 'Ma', 'N']
    },
    {
      name: 'Stuffed',
      price: '244,-',
      description: 'Fylte vinblader med ris. Servert med bulgur, pitabrød og salat.',
      allergens: ['H']
    },
    {
      name: 'Vegansk Falafelburger',
      price: '244,-',
      description: 'Ren vegansk burger laget av falafeldeig. Servert med avokadohummus og salat.',
      allergens: ['H', 'Sf', 'Sn']
    },
    {
      name: 'Mulligatawny',
      price: '239,-',
      description: 'Linsesuppe.',
      allergens: ['H']
    }
  ];
  

  soups = [
    {
      name: 'Mulligatawny',
      price: '239,-',
      description: 'Linsesuppe (Vegansk).',
      allergens: ['H']
    }
  ];
  

  desserts = [
    {
      name: 'Baklava',
      price: '120,-',
      description: 'Deigverk med pistasjnøtter. Veldig søt og veldig god!',
      allergens: ['H', 'P', 'Ma', 'N']
    },
    {
      name: 'Ostekake',
      price: '120,-',
      description: 'Kjeksbunn med kremost og jordbær.',
      allergens: ['M', 'E', 'H', 'So', 'N']
    },
    {
      name: 'Basbousa – Revani',
      price: '120,-',
      description: 'Tradisjonell kake fra Midtøsten. Søt og deilig.',
      allergens: ['M', 'H', 'E', 'N']
    },
    {
      name: 'Katalansk Krem',
      price: '120,-',
      description: 'Kremet tradisjonell dessert fra Catalonia.',
      allergens: []
    }
  ];
  
}
