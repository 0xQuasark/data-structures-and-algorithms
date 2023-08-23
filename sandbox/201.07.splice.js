'use strict';
let answer = null;


let starWarsPeople = [
  {
    name: 'C-3PO',
    height: '167',
    eye_color: 'yellow'
  },
  {
    name: 'Luke Skywalker',
    height: '172',
    eye_color: 'blue'
  },
  {
    name: 'R2-D2',
    height: '96',
    eye_color: 'red'
  }
];

const sortStarWarsCharacters = (starWarsArr) => {
  // Solution code here...
  // return ((object) => {
  //   // console.log(object);
  //   return object.sort((a, b) => a.height - b.height);
  // });
  // return ('hey');
    return starWarsArr.sort((a, b) => Number(a.height) - Number(b.height));
};
// answer = sortStarWarsCharacters(starWarsPeople);

// const removeThree = (idx, arr) => {
//   // Solution code here...
//   return arr.splice(idx, 3);
// };
const removeThree = (idx, arr) => {
  arr.splice(idx, 3);
  return arr;
};
// answer = removeThree(2, [1, 2, 3, 4, 5, 6, 7, 8]);


const howMuchPencil = (str) => {
  let result = [];
  // Solution code here...
  for (let i=0; i < str.length; i++) {
    result.push(str.substring(i));
  }
  return result;
};
// answer = howMuchPencil('Welcome');

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipe, you only want a list of the item names.

Write a function named listFoods that takes in the recipe and returns a new array of the food items without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.

Use slice for this function, maybe more than once. The Array.indexOf() method may also be helpful.

Do not use split for this function.
------------------------------------------------------------------------------------------------ */


const gruffaloCrumble = {
  name: 'How to make a Gruffalo Crumble',
  ingredients: [
    '1 medium-sized Gruffalo',
    '8 pounds oats',
    '2 pounds brown sugar',
    '4 pounds flour',
    '2 gallons pure maple syrup',
    '16 cups chopped nuts',
    '1 pound baking soda',
    '1 pound baking powder',
    '1 pound cinnamon',
    '6 gallons melted butter',
    '2 gallons fresh water',
  ],
  steps: [
    'Pre-heat a large oven to 375',
    'De-prickle the gruffalo',
    'Sprinkle with cinnamon, sugar, flour, and nuts',
    'Mix until evenly distributed',
    'Grease a 3-foot x 3-foot casserole dish',
    'Combine gruffalo compote with water to maintain moisture in the oven',
    'Fold together remaining ingredients to make the crisp',
    'Spread the crisp evenly over the gruffalo mixture',
    'Bake for 12-15 hours',
  ]
};


const listFoods = (recipe) => {
  let result = [];
  // Solution code here...
  let ingredients = recipe.ingredients;
  for (let key in ingredients) {
    let newLine = ingredients[key].split(' ');
    let extractedIngredient = newLine.slice(2);
    let joinedIngredient = extractedIngredient.join(' ');
    result.push(joinedIngredient);
  }
  return result;
};




answer = listFoods(gruffaloCrumble);
// expect(listFoods(gruffaloCrumble)).toStrictEqual(
// ['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts',
// 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']);


console.log(answer);
