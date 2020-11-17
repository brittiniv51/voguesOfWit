const discInfo = [
    
  {
        album: 'Born to Sing',
        discography:'studioAlbum',
    },

    {
        album: 'Funky Divas',
        discography:'studioAlbum',
    },

    {
        album: 'EV3',
        discography:'studioAlbum',
    },

    {
      album: 'Best of En Vogue',
      discography:'compilationAlbum',
  },

  {
    album: 'Very Best of En Vogue',
    discography:'compilationAlbum',
},
]


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint
};

const discPrinter = (discInfo) => { 
  let domString = '';
  for (i=0; i < discInfo.lenght; i++) {
    domString += `
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
             <h5 class="card-title">${discInfo[i].album}</h5>
               <h6 class="card-text">${discInfo[i].discography}</h6>
                <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Add to Cart</button>
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


console.log(init)
/*
const eVStudio = discInfo.filter(item => item.type === 'studioAlbum')

const printStudio = () => {
  document.getElementById(discCards).innerHTML = discInfo.innerHTML = eVStudio.map(function (studioAlbum){
    return `
      <div class="card-body">
        <h4 class="card-title">${studioAlbum.album}</h4>
            <h6 class="card-text">${studioAlbum.discography}</h6>
             <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Add to Cart</button>
      </div>
    `;
   
  }).join('');
}

document.getElementById('Studio-btn').addEventListener('click', printStudio);


*/