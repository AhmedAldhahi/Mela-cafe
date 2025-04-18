import { Component } from '@angular/core';

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrl: './drink-menu.component.scss',
})
export class DrinkMenuComponent {
  drinksMenu = [
    // ☕ Coffee
    {
      name: 'Coffee',
      price: '36,-',
      description: 'Freshly brewed coffee.',
      category: 'coffee',
      allergens: [],
    },
    {
      name: 'Refill Coffee',
      price: '16,-',
      description: 'Refill your coffee cup.',
      category: 'coffee',
      allergens: [],
    },
    {
      name: 'Arabic Coffee',
      price: '36,-',
      description: 'Traditional Arabic coffee.',
      category: 'coffee',
      allergens: [],
    },
    {
      name: 'Espresso, single',
      price: '36,-',
      description: 'Rich single shot of espresso.',
      category: 'coffee',
      allergens: [],
    },
    {
      name: 'Espresso, double',
      price: '39,-',
      description: 'Double shot of espresso.',
      category: 'coffee',
      allergens: [],
    },
    {
      name: 'Americano',
      price: '',
      description: 'Smooth espresso with hot water.',
      category: 'coffee',
      allergens: ['M'],
    },
    {
      name: 'Cappuccino',
      price: '',
      description: 'Espresso with steamed milk and foam.',
      category: 'coffee',
      allergens: ['M'],
    },
    {
      name: 'Café Latte',
      price: '',
      description: 'Espresso with plenty of steamed milk.',
      category: 'coffee',
      allergens: ['M'],
    },
    {
      name: 'Mocha Coffee',
      price: '44,-',
      description: 'Coffee with chocolate and milk.',
      category: 'coffee',
      allergens: ['M'],
    },

    // 🍵 Tea
    {
      name: 'Sage Tea',
      price: '',
      description: 'Herbal sage tea.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Mint Tea',
      price: '',
      description: 'Refreshing mint tea.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Cinnamon Tea',
      price: '',
      description: 'Aromatic cinnamon tea.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Cardamom Tea',
      price: '',
      description: 'Spicy cardamom tea.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Rooibos Tea',
      price: '',
      description: 'South African herbal tea.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Green Tea',
      price: '',
      description: 'Light and refreshing green tea.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Ginger Tea',
      price: '',
      description: 'Warming ginger tea.',
      category: 'the',
      allergens: [],
    },
    {
      name: 'Masala Chai',
      price: '',
      description: 'Spiced Indian tea with milk.',
      category: 'the',
      allergens: ['M'],
    },
    {
      name: 'Chai Latte',
      price: '39,-',
      description: 'Creamy chai with milk and spices.',
      category: 'the',
      allergens: ['M'],
    },
    {
      name: 'Pot of Tea for 2',
      price: '69,-',
      description: 'Pot of tea for two people.',
      category: 'the',
      allergens: [],
    },

    // 🍫 Hot Chocolate
    {
      name: 'Hot Chocolate with/without cream',
      price: '49,-',
      description: 'Rich chocolate drink, optionally with cream.',
      category: 'hot chocolate',
      allergens: ['M'],
    },
    {
      name: 'Chili Cocoa',
      price: '49,-',
      description: 'Spicy hot chocolate with chili.',
      category: 'hot chocolate',
      allergens: ['M'],
    },

    // 🥭 Lassi (Yogurt drink)
    {
      name: 'Mango Lassi',
      price: '69,-',
      description: 'Refreshing mango yogurt drink.',
      category: 'Lassi',
      allergens: ['M'],
    },
    {
      name: 'Salt Lassi',
      price: '69,-',
      description: 'Savory salted yogurt drink.',
      category: 'Lassi',
      allergens: ['M'],
    },

    // 🧃 Juice
    {
      name: 'Fresh Orange Juice',
      price: '79,-',
      description: 'Freshly squeezed orange juice.',
      category: 'juice',
      allergens: [],
    },
    {
      name: 'Lemon Juice',
      price: '79,-',
      description: 'Refreshing lemon juice.',
      category: 'juice',
      allergens: [],
    },

    // 💧 Mineral Water
    {
      name: 'Jarritos Lime',
      price: '59,-',
      description: 'Jarritos Lime soda.',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'Jarritos Mandarin',
      price: '59,-',
      description: 'Jarritos Mandarin soda.',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'Jarritos Mexican Cola',
      price: '59,-',
      description: 'Jarritos Mexican Cola.',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'Jarritos Guava',
      price: '59,-',
      description: 'Jarritos Guava soda.',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'Only',
      price: '54,-',
      description: 'Only brand mineral water.',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'Apple Juice',
      price: '54,-',
      description: 'Refreshing apple juice.',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'Farris Green',
      price: '54,-',
      description: 'Carbonated mineral water (Green).',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'Farris Blue',
      price: '54,-',
      description: 'Carbonated mineral water (Blue).',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'Ginger Beer (0%)',
      price: '89,-',
      description: 'Non-alcoholic ginger beer.',
      category: 'mineral water',
      allergens: [],
    },

    // 🥤 LYKKE ORGANIC HANDICRAFT BEVERAGE
    {
      name: 'Lykki Rhubarb Drink',
      price: '54,-',
      description: 'Organic rhubarb soda by Lykki.',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'Lucky Cola',
      price: '54,-',
      description: 'Organic cola soda by Lykki.',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'Lykki Orange Soda',
      price: '54,-',
      description: 'Organic orange soda by Lykki.',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'Lykki Lemon Soda',
      price: '54,-',
      description: 'Organic lemon soda by Lykki.',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'Lykki Elderflower',
      price: '54,-',
      description: 'Organic elderflower soda by Lykki.',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'Lykki Wild Strawberries',
      price: '54,-',
      description: 'Organic wild strawberry soda by Lykki.',
      category: 'mineral water',
      allergens: [],
    },
    {
      name: 'House Red Wine (Cremisan Baladi - Palestine)',
      price: 'Glass: 119,- / Bottle: 550,-',
      description:
        'Fresh, full-bodied with aromas of ripe berries, spices, plum and vanilla.',
      category: 'Come',
      subCategory: 'Red Wine',
      allergens: ['Sv'],
    },
    {
      name: 'The Red Gourmets, Clos St. Thomas',
      price: 'Glass: 119,- / Bottle: 550,-',
      description:
        'Juicy, cool and soft with ripe berries, dried fruit, herbs and spices.',
      category: 'Come',
      subCategory: 'Red Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Ch. St. Thomas (Lebanon)',
      price: 'Glass: 129,- / Bottle: 590,-',
      description: 'Round and balanced with spices and dried fruit.',
      category: 'Come',
      subCategory: 'Red Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Ch. Ksara Convent Reserve (Lebanon)',
      price: 'Glass: 119,- / Bottle: 559,-',
      description:
        'Dark ruby color, aromas of vanilla and wood, round tannins, long finish.',
      category: 'Come',
      subCategory: 'Red Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Ch. Musar (Lebanon)',
      price: 'Bottle: 1,119,-',
      description:
        'Brick red, ripe, exotic and spicy with chocolate and leather notes.',
      category: 'Come',
      subCategory: 'Red Wine',
      allergens: ['Sv'],
    },
    {
      name: 'House White Wine (Cremisan Dabouki - Palestine)',
      price: 'Glass: 119,- / Bottle: 550,-',
      description:
        'Fresh and fruity with tropical fruit, lime, melon, peach and apricot.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Obeidy, Ch. St. Thomas',
      price: 'Glass: 119,- / Bottle: 550,-',
      description: 'Fresh and fruity with citrus notes.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Dreissigacker Organic Riesling Dry (Germany)',
      price: 'Glass: 119,- / Bottle: 550,-',
      description:
        'Citrus, apple, peach and mineral notes. Dry and juicy with good fruit length.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'La Sablete Sauvignon Blanc (France)',
      price: 'Glass: 119,- / Bottle: 550,-',
      description:
        'Fresh flavors of peach, passion fruit, herbs, lemon and lime.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Chardonnay, Ch. St. Thomas (Lebanon)',
      price: 'Glass: 125,- / Bottle: 559,-',
      description: 'Full of fruit, integrated oak, long aftertaste.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Chateau Ksara Merwah (Lebanon)',
      price: 'Glass: 125,- / Bottle: 569,-',
      description:
        'Aromas of tropical fruit, melon, guava and lime. Fresh and fruity finish.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'The Gourmet Rosé, Clos St. Thomas',
      price: 'Glass: 119,- / Bottle: 550,-',
      description: 'Fruity and full-bodied with red fruit.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Prosecco',
      price: 'Glass: 119,- / Bottle: 550,-',
      description: 'Light and sparkling, classic Prosecco taste.',
      category: 'Come',
      subCategory: 'White Wine',
      allergens: ['Sv'],
    },
    {
      name: 'Aperol Spritz',
      price: '139,-',
      description: 'Refreshing Italian cocktail with Prosecco and Aperol.',
      category: 'Come',
      subCategory: 'Rosé & Sparkling',
      allergens: ['Sv'],
    },
    {
      name: 'Jameson',
      price: '119,-',
      description: 'Classic Irish whiskey, smooth and versatile.',
      category: 'Whisky',
      allergens: [],
    },
    {
      name: 'Chivas Regal',
      price: '119,-',
      description: 'Blended Scotch whisky with rich and smooth character.',
      category: 'Whisky',
      allergens: [],
    },
    {
      name: 'Jack Daniels',
      price: '119,-',
      description: 'Famous Tennessee whiskey with notes of vanilla and oak.',
      category: 'Whisky',
      allergens: [],
    },
    {
      name: 'Glenfiddich',
      price: '129,-',
      description:
        'Single malt Scotch whisky known for its fresh and fruity aroma.',
      category: 'Whisky',
      allergens: [],
    },
    {
      name: 'Johnnie Walker Red Label',
      price: '119,-',
      description: 'A bold blend of spicy, smoky malts.',
      category: 'Whisky',
      allergens: [],
    },
    {
      name: 'Johnnie Walker Black Label',
      price: '129,-',
      description: 'Smooth and complex Scotch whisky aged 12 years.',
      category: 'Whisky',
      allergens: [],
    },
    {
      name: 'Finnish Gammel Port',
      price: '99,-',
      description: 'Rich and sweet fortified wine with deep flavor.',
      category: 'Hetvin',
      allergens: [],
    },
    {
      name: 'Bailey’s Original Irish Cream',
      price: '99,-',
      description: 'Creamy liqueur with hints of chocolate and whiskey.',
      category: 'Hetvin',
      allergens: ['M'],
    },
    {
      name: 'Turkish Pepper',
      price: '99,-',
      description: 'Strong, spicy liqueur with a distinctive taste.',
      category: 'Hetvin',
      allergens: [],
    },
    {
      name: 'Braastad 3 Stars',
      price: '119,-',
      description:
        'Smooth and elegant cognac with a balanced blend of fruit and oak.',
      category: 'Cognac',
      allergens: [],
    },
    {
      name: 'Martell',
      price: '119,-',
      description: 'Classic French cognac known for its soft, rich character.',
      category: 'Cognac',
      allergens: [],
    },
    {
      name: 'Aquavit',
      price: '119,-',
      description:
        'Traditional Scandinavian spirit with caraway and spice notes.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Vodka',
      price: '119,-',
      description: 'Clean and crisp distilled spirit.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Rom',
      price: '119,-',
      description: 'Sweet and full-bodied Caribbean-style rum.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Tequila',
      price: '119,-',
      description: 'Mexican agave spirit with bold, earthy flavor.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Gin',
      price: '119,-',
      description: 'Herbal and aromatic with juniper-forward taste.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Jägermeister',
      price: '119,-',
      description: 'Bold herbal liqueur from Germany.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Ouzo',
      price: '119,-',
      description: 'Anise-flavored aperitif from Greece.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Ksarak (Arak)',
      price: '119,-',
      description: 'Levantine anise-flavored spirit.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Gin Tonic',
      price: '139,-',
      description: 'Classic gin and tonic cocktail.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Vodka Russian',
      price: '139,-',
      description: 'Bold vodka-based cocktail.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Irish Coffee',
      price: '139,-',
      description: 'Hot coffee cocktail with Irish whiskey and cream.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Bailey’s Kaffe',
      price: '109,-',
      description: 'Coffee with creamy Bailey’s liqueur.',
      category: 'Other',
      allergens: ['M'],
    },
    {
      name: 'Vodka Battery',
      price: '139,-',
      description: 'Vodka mixed with energy drink.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Fernet Branca',
      price: '119,-',
      description: 'Italian herbal bitter liqueur.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'North',
      price: '119,-',
      description: 'Spirit of unspecified type, typically clear and neutral.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Supplement for mineral water',
      price: '22,-',
      description: 'Extra charge for adding mineral water to drink.',
      category: 'Other',
      allergens: [],
    },
    {
      name: 'Aperol Spritz',
      price: '139,-',
      description: 'Refreshing Italian cocktail with Prosecco and Aperol.',
      category: 'Other',
      allergens: ['Sv'],
    },
    {
      name: 'Ringnes Draft Beer (0.25L / 0.5L)',
      price: '55,- / 110,-',
      description: 'Norwegian lager with light and crisp profile. 4.7%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Schous Barrel Ale (0.4L)',
      price: '110,-',
      description: 'Ale with rich and malty flavor. 4.7%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Brooklyn Lager (0.5L)',
      price: '119,-',
      description:
        'American amber lager with a hoppy and caramel character. 5.2%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Kronenbourg 1664 Blanc (0.5L)',
      price: '119,-',
      description: 'French wheat beer with citrus and coriander notes. 4.5%',
      category: 'Beer/Misc',
      allergens: ['Mh', 'Mb'],
    },
    {
      name: 'Taybeh Golden (33cl)',
      price: '119,-',
      description: 'Light lager from Palestine. 5.0%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Taybeh Dark (33cl)',
      price: '125,-',
      description: 'Flavorful dark lager with caramel and dried fruit. 6.0%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Taybeh Amber (33cl)',
      price: '125,-',
      description: 'Altbier with malt and caramel notes. 5.5%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Taybeh White (33cl)',
      price: '119,-',
      description: 'Belgian-style wheat beer with citrus and coriander. 3.8%',
      category: 'Beer/Misc',
      allergens: ['Mh', 'Mb'],
    },
    {
      name: 'Taybeh IPA (33cl)',
      price: '125,-',
      description: 'Hoppy IPA with citrus and Middle Eastern spice. 6.6%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Beirut Beer (33cl)',
      price: '119,-',
      description: 'Light lager from Lebanon. 4.6%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Corona Extra (33cl)',
      price: '119,-',
      description: 'Popular Mexican lager. 4.5%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Ringnes LITE (30cl, gluten-free)',
      price: '119,-',
      description: 'Gluten-free light lager. 4.3%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Taybeh Winter Lager (33cl)',
      price: '119,-',
      description: 'Seasonal dark lager. 7.5%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Taybeh Alcohol-free (33cl)',
      price: '89,-',
      description: 'Non-alcoholic beer from Palestine. 0.0%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Munkholm (33cl)',
      price: '89,-',
      description: 'Norwegian alcohol-free beer. 0%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Ginger Beer',
      price: '89,-',
      description: 'Non-alcoholic ginger-flavored beverage.',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Almaza Beer (33cl, Lebanon)',
      price: '119,-',
      description: 'Lebanese light lager. 4%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Bulmers (56.8cl)',
      price: '129,-',
      description: 'British cider. 4.5%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
    {
      name: 'Crowmoor (33cl)',
      price: '129,-',
      description: 'Strong Finnish cider. 5.5%',
      category: 'Beer/Misc',
      allergens: ['Mb'],
    },
  ];

  drinkCategories = [
    'coffee',
    'the',
    'hot chocolate',
    'Lassi',
    'juice',
    'mineral water',
    'Come',
    'Whisky',
    'Hetvin',
    'Cognac',
    'Other',
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
