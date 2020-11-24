const discInfo = [
    
  {
        album: 'Born to Sing', 
        type: 'Studio',
        recordYear: 1990
    },

    {
        album: 'Funky Divas',
        type: 'Studio',
        recordYear: 1992
    },

    {
        album: 'EV3',
        type: 'Studio',
        recordYear: 1997
    },

    {
      album: 'Soul Flower',
      type: 'Studio',
      recordYear: 2004
    },
    {
      album: 'Electric Cafe',
      type: 'Studio',
      recordYear: 2018
    },
    {
      album: 'Best of En Vogue',
      type: 'Compilation',
      recordYear: 1999
  },

    {
      album: 'Very Best of EV',
      type: 'Compilation',
      recordYear: 2001
  },
    {
      album: 'The Platinum Coll.',
      type: 'Compilation',
      recordYear: 2007
    },

    {
      album: 'Emotions',
      type: 'Single',
      recordYear: 2015
    },

    {
      album: 'A Thousand Times',
      type: 'Single',
      recordYear: 2016
    },
    {
      album: 'O Holy Night',
      type: 'Single',
      recordYear: 2016
    },
    {
      album: 'Luv My Thangz',
      type: 'Single',
      recordYear: 2018
    },

]


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint
};

const discPrinter = (discInfo) => { 
  let domString = '';
  for (i=0; i < discInfo.length; i++) {
    domString += `
    <div class="card-deck">
      <div class=card d-flex flex-wrap" style="width: 14rem" id="albumCards">
      <div class="card-header">${discInfo[i].album}</div>
        <img class="card-img-top" style="width: 14rem;" src="https://i.imgur.com/vXhRd0Y.jpeg" alt="Picture of record on record player">
        <div class="card-body">
          <h5 class="card-title">${discInfo[i].type}</h5>
          <p class="card-text">${discInfo[i].recordYear}</p>
          <a href="https://www.amazon.com/Very-Best-En-Vogue/dp/B00005MLTN" target="_blank" class="btn btn-dark">Purchase Album</a>
          </div>
      </div>
    </div>
    `
  }
  printToDom('discCards', domString)
}

const init = () => {
  discPrinter(discInfo)
};

init()



const eVStudio = discInfo.filter(item => item.type === 'Studio')
const eVComp = discInfo.filter(item => item.type === 'Comp')
const eVSingle = discInfo.filter(item => item.type === 'Single')
const all = discInfo.filter(item => item.type === 'Studio' || 'Compilation' || 'Single')

const printStudio = () => {
  document.getElementById('discCards').innerHTML = discInfo.innerHTML = eVStudio.map(function (Studio) {
    return `
    <div class="card-deck">
    <div class="card d-flex flex-wrap" style="width: 14rem" id="albumCards">
    <div class="card-header">${Compilation.album}</div>
      <img class="card-img-top" style="width: 14rem;" src="https://i.imgur.com/vXhRd0Y.jpeg" alt="Picture of record on record player">
      <div class="card-body">
        <h5 class="card-title">${Compilation.type}</h5>
        <p class="card-text">${Compilation.recordYear}</p>
        <a href="https://www.amazon.com/Very-Best-En-Vogue/dp/B00005MLTN" target="_blank" class="btn btn-dark">Purchase Album</a>
        </div>
    </div>
  </div>
    `;
  }).join('');
}

const printComp = () => {
  document.getElementById('discCards').innerHTML = discInfo.innerHTML = eVComp.map(function (Comp) {
    return `
    <div class="card-deck">
    <div class="card d-flex flex-wrap" style="width: 14rem" id="albumCards">
    <div class="card-header">${Studio.album}</div>
      <img class="card-img-top" style="width: 14rem;" src="https://i.imgur.com/vXhRd0Y.jpeg" alt="Picture of record on record player">
      <div class="card-body">
        <h5 class="card-title">${Studio.type}</h5>
        <p class="card-text">${Studio.recordYear}</p>
        <a href="https://www.amazon.com/Very-Best-En-Vogue/dp/B00005MLTN" target="_blank" class="btn btn-dark">Purchase Album</a>
        </div>
    </div>
  </div>
    `;
  }).join('');
}

const printSingle = () => {
  document.getElementById('discCards').innerHTML = discInfo.innerHTML = eVSingle.map(function (Single) {
    return `
    <div class="card-deck">
    <div class="card d-flex flex-wrap" style="width: 14rem" id="albumCards">
    <div class="card-header">${Single.album}</div>
      <img class="card-img-top" style="width: 14rem;" src="https://i.imgur.com/vXhRd0Y.jpeg" alt="Picture of record on record player">
      <div class="card-body">
        <h5 class="card-title">${Single.type}</h5>
        <p class="card-text">${Single.recordYear}</p>
        <a href="https://www.amazon.com/Very-Best-En-Vogue/dp/B00005MLTN" target="_blank" class="btn btn-black">Purchase Album</a>
        </div>
    </div>
  </div>
    `;
  }).join('');
}

const printAll = () => {
  document.getElementById('discCards').innerHTML = discInfo.innerHTML = all.map(function (all) {
    return `
    <div class="card-deck">
    <div class="card d-flex flex-wrap" style="width: 14rem" id="albumCards">
    <div class="card-header">${all.album}</div>
      <img class="card-img-top" style="width: 14rem;" src="https://i.imgur.com/vXhRd0Y.jpeg" alt="Picture of record on record player">
      <div class="card-body">
        <h5 class="card-title">${all.type}</h5>
        <p class="card-text">${all.recordYear}</p>
        <a href="https://www.amazon.com/Very-Best-En-Vogue/dp/B00005MLTN" target="_blank" class="btn btn-dark">Purchase Album</a>
        </div>
    </div>
  </div>
    `;
  }).join('');
}

document.getElementById('Studio-btn').addEventListener('click', printStudio);
document.getElementById('Comp-btn').addEventListener('click', printComp);
document.getElementById('Single-btn').addEventListener('click', printSingle);
document.getElementById('All-btn').addEventListener('click', printAll);


console.log(eVStudio)
console.log(eVComp)
console.log(eVSingle)
console.log(all)

