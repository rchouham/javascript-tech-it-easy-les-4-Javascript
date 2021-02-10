// Hoeveel televisies moeten we in totaal nog verkopen?
// nog te verkopen: originalStock - sold
// MAYBE filter?
// NOPE find?
// NOPE sort?

// STRAT 1
// map? -> voor de hele array
// bereken per televisie type: hoevel nog te verkopen, met map
// [{}, {}, {}] -> [21, 0, 7]
// Alle getallen optellen in de array
// for loop

// STRAT 2
// for loop?
// loopen over alle televisies
// tellen (variabele count aanmaken)
// nog te verkopen: originalStock - sold
// optellen bij het totaal


// 1a
// - [x ] functie maken
// - [x ] aanroepen
// - [ x] parameter toevoegen (inventory)
// - [ x] inventory ingeven als argument
// - [ x] count variabele (buiten de loop)
// - [x ] loop maken (voor elke televisie)
// - [x ] originalStock - sold optellen bij count
// - [ X] Totaal return uit de functie




// Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
// MAP -> [{}, {}, {}] -> ['fancy samsung', 'fancier samsung', 'lg big screen']
// - [ ] maak variabele voor de uitkomst
 
// - [ ] inventory.map()
// - [ ] geef een functie aan map als argument
// - [ ] voeg de parameter toe (televisie, product)
// - [ ] zoeken naar de juiste property
// - [ ] return de juiste property
// - [ ] log het resultaat

// Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
// FILTER -> [{}, {}, {}, {}] -> [{}, {}]
// - [ ] maak variabele voor de uitkomst
// - [ ] inventory.filter()
// - [ ] geef een functie aan map als argument
// - [ ] voeg de parameter toe (televisie, product)
// - [ ] zoeken naar de juiste property
// - [ ] check: is de televisie uitverkocht? true of false
// - [ ] return true of false
// - [ ] log het resultaat

// Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
// FILTER -> [{}, {}, {}, {}] -> [{}, {}]

// Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
// SORT
