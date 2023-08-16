'use strict';

let answer = null;

const charCode = (arr) => {
  // Solution code here...
  let result = arr.map(char => char.charCodeAt(0));
  return result;

};
// let answer = charCode(['C', 'o', 'd', 'e', '3', '0', '1']);


const evenOdd = (arr) => {
  // Solution code here...
  let result = [];
  arr.map(number => {
    if (number % 2 === 0) {
      // even
      result.push('even');
    } else if (number % 2 === 1) {
      // odd
      result.push('odd');
    } else {
      result.push('N/A');
    }
  });
  return result;
};
// let answer = evenOdd([5, 8, 2, 6, 9, 13, 542, 541]);


const snorlaxAbilities = {
  abilities: [
    {
      slot: 3,
      is_hidden: true,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/82/',
        name: 'gluttony',
      },
    },
    {
      slot: 2,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/56/',
        name: 'cute charm',
      },
    },
    {
      slot: 1,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/17/',
        name: 'immunity',
      },
    },
  ],
  name: 'snorlax',
  weight: 4600,
};
const extractAbilities = (arr) => {
  // Solution code here...
  return arr.map(item => item.ability.name);
};
// let answer = extractAbilities(snorlaxAbilities.abilities);


const snorlaxStats = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};
const extractStats = (arr) => {
  // Solution code here...
  let result = [];
  arr.map(item => {
    let sum = item.effort + item.baseStat;
    result.push({name: item.stat.name, total: sum});

    // result.push('name:' + item.stat.name, 'total:' + sum);
    // console.log('stat: '+ item.stat.name);
    // console.log('effort: '+ item.effort);
    // console.log('base: '+ item.baseStat);
  });

  return result;
};


answer = extractStats(snorlaxStats.stats);
  // { name: 'speed', total: 35, },
  // { name: 'special-defense', total: 112, },
  // { name: 'special-attack', total: 74, },


console.log('answer: ' + JSON.stringify(answer));
