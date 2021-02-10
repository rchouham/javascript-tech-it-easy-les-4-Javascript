// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// STRAT 1
// map? -> voor de hele array
// bereken per televisie type: hoevel nog te verkopen, met map
// [{}, {}, {}] -> [21, 0, 7]
// Alle getallen optellen in de array
// for loop


//1a

function countInventoryToSell (televisions){

 console.log('sales!',televisions);
 let totalCount =0
  // console.log("total count",count)

  for (const television of televisions) {
    // console.log('TELEVISIONS IN LOOP',
    //     television.originalStock, television.sold);

    const toSellOfThisType =television.originalStock-television.sold;
    // console.log(toSellOfThisType);

    totalCount = totalCount + toSellOfThisType

  }
  // console.log("TOTAL totalCount",totalCount)
  return totalCount;
}

const totalCount =countInventoryToSell(inventory)

//-Weergeven op pagina
//- [x] Rekenwerk verrichten
//- [x]  Element maken op de HTMP pagina
//- [x]  Element selecteren waar de count moet worden weergegeven
//- [x]  textConten aanpassen met de totalCount
//- [x] Rood maken( al gedaan in CSS)


const numberToSell = document.getElementById('numberToSell');

numberToSell.textContent =totalCount

console.log(numberToSell)
console.log('OUTSIDE?',totalCount);


// Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
// MAP -> [{}, {}, {}] -> ['fancy samsung', 'fancier samsung', 'lg big screen']
// - [ ] maak variabele voor de uitkomst

// - [x ] inventory.map()
// - [x ] geef een functie aan map als argument
// - [x ] voeg de parameter toe (televisie, product)
// - [ x] zoeken naar de juiste property
// - [x ] return de juiste property
// - [x ] log het resultaat

const allTypes = inventory.map((televisie)=>{

  return `${televisie.brand} ${televisie.type}`;

});
 console.log( "UITKOMST", allTypes)

//Opdracht 2b:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn
//filter
// - [x ] inventory.filter()
// - [x ] geef een functie aan filter mee als argument
// - [x ] voeg de parameter toe (televisie, product)
// - [ x] zoeken naar de juiste property
// - [x ] return de juiste property
// - [X ] check: is deze televisie uitverkocht
//- [ X] return true or false
// - [x ] log het resultaat

const soldOut =inventory.filter((televisie)=>{
  console.log('ORIGINELE VOORRAAD', televisie.originalStock, 'VERKOCHT',televisie.sold,
  televisie.originalStock===televisie.sold
  );

return televisie.originalStock === televisie.sold

});

console.log("SOLDOUT",soldOut)

// * **Opdracht 2c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
