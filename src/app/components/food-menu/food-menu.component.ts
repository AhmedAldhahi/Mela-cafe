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
      type: 'Vegan',
      description:
        'Stuffed vine leaves with rice. Served with bulgur, pita bread and salad.',
      allergens: ['H'],
    },
    {
      name: 'Falafel',
      price: '179,-',
      type: 'Vegan',
      description:
        'Fried chickpea mixture, served with pita bread, and avocado hummus.',
      allergens: ['H', 'Sf', 'Sn'],
    },
    {
      name: 'Apple Salad',
      price: '179,-',
      type: 'Vegan',
      description:
        'Mixed salad with raisins and garlic braised in olive oil, pomegranate and vinegar. Served with pita bread. (Mon, Fri, Sat)',
      allergens: [],
    },
    {
      name: 'Mulligatawny',
      price: '179,-',
      type: 'Vegan',
      description: 'Lentil soup.',
      allergens: ['H'],
    },
    {
      name: 'Shakshuka',
      price: '179,-',
      type: 'Contains Milk, Eggs',
      description:
        'Poached eggs in a spicy tomato sauce with pita bread on the side.',
      allergens: ['H', 'E'],
    },
    {
      name: 'Seekh Kebab',
      price: '199,-',
      type: 'Contains Milk',
      description:
        'Seekh kebab on skewers, served with pita bread, salad and tzatziki.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Chicken Tawok',
      price: '199,-',
      type: 'Contains Milk',
      description: 'Served with bulgur, tzatziki and salad.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Mezah Lunch Plate (Vegetarian/Meat)',
      price: '189,-/199,-',
      type: 'Both options',
      description:
        "Variation of the day's mezah. Served as vegetarian or meat dish with pita bread.",
      allergens: ['M', 'H', 'Sf'],
    },
  ];

  mainCourses = [
    {
      name: 'Chicken Wings',
      price: '279,-',
      description: 'Served with bulgur, pita bread, tzatziki and salad.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Cardigan',
      price: '279,-',
      description:
        'Kofta stew, well-seasoned ground beef. Served with salad, pita bread, tzatziki and bulgur.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Chicken Stew',
      price: '279,-',
      description:
        'Chicken with spinach and Egyptian molokhia (jute leaves). Served with bulgur, pita bread, tzatziki and salad.',
      allergens: ['M', 'H', 'Sf', 'Pk'],
    },
    {
      name: 'Sikh Kebab',
      price: '279,-',
      description:
        'Seekh kebab prepared with traditional Middle Eastern methods. Served with pita bread, tomato and garlic.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Lamb Chops',
      price: '299,-',
      description: 'Served with bulgur, pita bread, tzatziki and salad.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Shakiria Masala',
      price: '279,-',
      description:
        'Beef stew in a tasty yogurt sauce with masala spices. Recommended. Served with bulgur, pita bread, tzatziki and salad.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Chicken Tawok',
      price: '299,-',
      description:
        'Well-marinated boneless chicken thighs from the grill. Juicy and flavorful. Served with bulgur, pita bread, avocado hummus, tzatziki and salad.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Grill Mix',
      price: '319,-',
      description:
        'Marinated chicken and Seekh kebab on skewers. Served with bulgur, pita bread, tzatziki and salad.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Halloumi Burger',
      price: '279,-',
      description:
        'Cheese with tradition from early Arab cuisine. Served with avocado hummus and tzatziki.',
      allergens: ['M', 'H', 'Sf'],
    },
  ];

  mezahMenu = [
    {
      name: 'Mezah Vegetar',
      price: '315,-',
      description:
        'Six different vegetarian mezah dishes assembled by the chef. Ideal for sharing.',
      allergens: ['H', 'M', 'P', 'Sf'],
    },
    {
      name: 'Mezah with Meat',
      price: '330,-',
      description:
        'Six different mezah dishes with meat, assembled by the chef. Great for two or more.',
      allergens: ['H', 'M', 'P', 'Sf'],
    },
    {
      name: 'Classic Mezah with Grilled Dishes',
      price: '440,- per person',
      description:
        'Includes hummus, tzatziki, tabbouleh, falafel, sambosa, Arabic platter, halloumi, chicken, seekh kebab, buffalo chicken wings, bulgur, and pita bread. Minimum 2 people.',
      allergens: ['M', 'H', 'Sf', 'P'],
    },
    {
      name: 'Cold Mezah – per dish',
      price: '79,-/89,-',
      description:
        'Hummus • Hummus with avocado • Tzatziki • Aioli • Tabbouleh • Baba Ganosh • Dolma • Syrian Salad',
      allergens: ['Sf', 'M', 'H'],
    },
    {
      name: 'Hot Mezah – per dish',
      price: '79,-/89,-',
      description:
        'Eggplants • Cauliflower fingers • Halloumi • Börek mini roll • Bulgur • Falafel • Vegetarian Sambosa • Chickpeas in tomato sauce • Rice • Meatballs • Beef in sauce • Arabic sausage • Chicken in sauce • Potato boats • Batataharra',
      allergens: ['H', 'M', 'Sf'],
    },
    {
      name: 'Mini Grill Mezah Dishes',
      price: '120,- per item',
      description:
        'Choose from: Seekh kebab skewers, Chicken Tawok, Lamb chops, Chicken wings',
      allergens: ['H', 'M'],
    },
    {
      name: 'Pita Bread',
      price: '25,-',
      description: 'Plain wheat pita bread.',
      allergens: ['H'],
    },
    {
      name: 'Zaatar Pita (Thyme)',
      price: '30,-',
      description: 'Wheat pita topped with zaatar (thyme).',
      allergens: ['H', 'Sf'],
    },
    {
      name: 'Spicy Pita',
      price: '30,-',
      description: 'Spicy seasoned wheat pita bread.',
      allergens: ['H'],
    },
    {
      name: 'Garlic Pita',
      price: '30,-',
      description: 'Pita bread with garlic.',
      allergens: ['H'],
    },
    {
      name: 'Cheesy Pita',
      price: '49,-',
      description: 'Pita bread topped with cheese.',
      allergens: ['H', 'M', 'Sf'],
    },
    {
      name: 'Mix Pita',
      price: '59,-',
      description: 'Combination pita with cheese and other toppings.',
      allergens: ['H', 'M', 'Sf'],
    },
  ];

  hummusEmpireMenu = [
    {
      name: 'Vegetarian Mix with Hummus',
      price: '289,-',
      description:
        'Halloumi, börek with spinach and feta cheese, oven-baked root vegetables and hummus. Includes tzatziki, salad and pita bread.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Halloumi with Hummus',
      price: '279,-',
      description:
        'Halloumi cheese with hummus. Includes tzatziki, salad and pita bread.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Börek Mini Roll with Hummus',
      price: '279,-',
      description:
        'Hummus with börek (spinach and feta cheese). Includes tzatziki, salad and pita bread.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Arabic Sausage with Hummus',
      price: '289,-',
      description:
        'Spicy Arabic sausage with hummus. Includes tzatziki, salad and pita bread.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Beef with Hummus',
      price: '279,-',
      description:
        'Tasty beef from the stew with hummus. Includes tzatziki, salad and pita bread.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Meatballs with Hummus',
      price: '279,-',
      description:
        'Well-seasoned ground beef meatballs with hummus. Includes tzatziki, salad and pita bread.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Chicken with Hummus',
      price: '299,-',
      description:
        'Well-marinated chicken with hummus. Includes tzatziki, salad and pita bread.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Lamb Chops with Hummus',
      price: '299,-',
      description:
        'Lamb chops with hummus. Includes tzatziki, salad and pita bread.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Seekh Kebab with Hummus',
      price: '299,-',
      description:
        'Traditional Seekh kebab with hummus. Includes tzatziki, salad and pita bread.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Chicken Thighs with Hummus',
      price: '279,-',
      description:
        'Grilled chicken thighs with hummus. Includes tzatziki, salad and pita bread.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Grill Mix with Hummus',
      price: '319,-',
      description:
        'Marinated chicken and Seekh kebab with hummus. Includes tzatziki, salad and pita bread.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Spicy Hummus (Vegan)',
      price: '244,-',
      description:
        'Spicy hummus with oven-baked root vegetables, salad and pita bread.',
      allergens: ['Sf', 'H'],
    },
  ];

  veganMenu = [
    {
      name: 'Spicy Hummus',
      price: '244,-',
      description: 'With oven-baked root vegetables, salad and pita bread.',
      allergens: ['Sf', 'H']
    },
    {
      name: 'Spicy Sambosa',
      price: '244,-',
      description: 'With oven-baked root vegetables, salad and pita bread.',
      allergens: ['H']
    },
    {
      name: 'Falafel',
      price: '244,-',
      description: 'Fried chickpea mixture, served with pita bread, avocado hummus and salad. Available without allergens.',
      allergens: ['H', 'Sf', 'Sn']
    },
    {
      name: 'Salat at the Mela',
      price: '244,-',
      description: 'Mixed salad with raisins and garlic braised in olive oil, pomegranate and vinegar. Served with pita bread. Can be made without allergens.',
      allergens: ['H', 'Ma', 'N']
    },
    {
      name: 'Stuffed',
      price: '244,-',
      description: 'Stuffed vine leaves with rice. Served with bulgur, pita bread and salad.',
      allergens: ['H']
    },
    {
      name: 'Vegan Falafelburger',
      price: '244,-',
      description: 'Pure vegan burger made from falafel dough. Served with avocado hummus and salad.',
      allergens: ['H', 'Sf', 'Sn']
    },
    {
      name: 'Mulligatawny',
      price: '239,-',
      description: 'Lentil soup.',
      allergens: ['H']
    }
  ];

  soups = [
    {
      name: 'Mulligatawny',
      price: '239,-',
      description: 'Lentil soup (Vegan).',
      allergens: ['H']
    }
  ];
  
  desserts = [
    {
      name: 'Baklava',
      price: '120,-',
      description: 'Pastries with pistachios. Very sweet and very good!',
      allergens: ['H', 'P', 'Ma', 'N']
    },
    {
      name: 'Cheesecake',
      price: '120,-',
      description: 'Biscuit base with cream cheese and strawberries.',
      allergens: ['M', 'E', 'H', 'So', 'N']
    },
    {
      name: 'Basbousa – Revani',
      price: '120,-',
      description: 'Traditional cake from the Middle East. Sweet and delicious.',
      allergens: ['M', 'H', 'E', 'N']
    },
    {
      name: 'Catalan Cream',
      price: '120,-',
      description: 'Creamy traditional dessert from Catalonia.',
      allergens: []
    }
  ];
  
}
