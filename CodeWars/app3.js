vocals = new Set(['a', 'e',  'i' , 'o', 'u' , 'ä' , 'ö' , 'ü'])

function isVocal(value) {
  return vocals.has(value)
}

function derDieDas(wort){
  var len = wort.toLowerCase().split('').filter(isVocal).length
  return (len < 2 ? 'das ' : len <= 3 ? 'die ' : 'der ') + wort;
}
function derDieDas2(wort){
  var len = wort.match(/([aeiouäöü])/gi).length
  return (len < 2 ? 'das ' : len <= 3 ? 'die ' : 'der ') + wort;
}


//§derDieDas('Knödel')