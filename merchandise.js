const merchItems = [
    
  {
        type: 'apparel',
        title: 'FYM Tee',
        image:  'https://d1h6olfj08dopz.cloudfront.net/images/36731/v600_EnVoguq_FreeYourMind_Women_sWhite_T-Shirt_F.png',
        price:'  $23',
    },
    {
      
      type: 'apparel',
      title: 'En Vogue Dad Hat',
        image: 'https://d1h6olfj08dopz.cloudfront.net/images/34423/EV_Port-_-Company_Unstructured-Hat_CP77_F2.png',
        price:'$18',
    },
    {
      
      type: 'home',
      title: 'En Vogue Pillow',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDgR3OEo-xCP2smmpzBvLDE9tL9cVdyGTn6c4pbUjZq4_IHwJS519x3odTzfb37NI6j2yM8P33tZ8rmnkVvHfllfnk-yC4aBLjDnZ3GOw&usqp=CAE',
        price:'   $28',
    },
    {
      type: 'home',
      title: 'En Vogue Magnet',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVXAaFmE_3AzrSGJRFd1FpUvonOC-benrluwAeDejPx3nee76nRTFrMdJhs0X6WfQqsTTQ0kQgB89JXAi26GRy9Mhkjw46gZpxrmdNzPxZRz94dZBnAcbU2Q&usqp=CAE',
        price:'   $6',
    },
    {
      type: 'collectorMerch',
      title: 'EV Ornament',
        image: 'https://i.imgur.com/8MW3Psg.jpg',
        price:'  $9',
    },
    {
      type: 'collectorMerch',
      title: 'EV Stocking',
        image: 'https://i.imgur.com/7ZqThvS.jpg',
        price:'   $25',
    },
    {
      type: 'tourMerch',
      title: 'FYM Crop Hoodie',
        image: 'https://i.imgur.com/Wro3568.jpg',
        price:'  $44',
    },
    {
      type: 'tourMerch',
      title: 'FYM DogTag',
        image: 'https://i.imgur.com/2c608CR.jpg',
        price:'  $14',
    },
  ]

  const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
  };

const merchPrinter = (merchItems) => {
    let domString = '';
    for (i = 0; i < merchItems.length; i++) { 
      domString += `
          <div class="card">
            <img class="card-img-top" src="${merchItems[i].image}" alt="Card image cap">
              <div class="card-body">
                 <h5 class="card-title">${merchItems[i].title}</h5>
                 <h5 class="card-price">${merchItems[i].price}</h5>
                 <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-dark button--1">Purchase</button>

                 </div>
          </div>
    `
  } 
   console.log(merchPrinter)
    printToDom('merchCards', domString)
  }
  
    const init = () => {
      merchPrinter(merchItems);
  }
  init()
  
  const eVApparel = merchItems.filter(item => item.type === 'apparel')
  const eVTourMerch = merchItems.filter(item => item.type === 'tourMerch')
  const eVCollector = merchItems.filter(item => item.type === 'collectorMerch')
  const eVHome = merchItems.filter(item => item.type === 'home')
  const eVAll = merchItems.filter(item => item.type === 'apparel' || 'media' || 'tourMerch' || 'collectorMerch' || 'home')
  
  const printClothes = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = eVApparel.map(function (apparel) {
          return `   
          <div class="row">
          <div class="col-sm-6">
          <div class= "card d-flex flex-wrap" style="width: 14rem;">
        <img class="card-img-top" src="${apparel.image}" alt="Card image cap">
        <div class= "card-body text-center">
          <h5 class= "card-title">${apparel.title}</h5>
          <p class= "card-text">${apparel.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-dark button--1">Purchase</button>
        </div>
      </div>
      </div>
      </div>
      `;
        }).join(''); 
  }    
  
  const printTourMerch = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = eVTourMerch.map(function (tourMerch) {
          return `   
      <div class= "card d-flex flex-wrap" style="width: 14rem;">
        <img class="card-img-top" src="${tourMerch.image}" alt="Card image cap">
        <div class= "card-body text-center">
          <h5 class= "card-title">${tourMerch.title}</h5>
          <p class= "card-text">${tourMerch.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-dark button--1">Purchase</button>
        </div>
      </div>
      
      `;
    }).join(''); 
  }
  
  const printCollectorMerch = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = eVCollector.map(function (collectorMerch) {
          return `   
      <div class= "card d-flex flex-wrap" style="width: 14rem;">
        <img class="card-img-top" src="${collectorMerch.image}" alt="Card image cap">
        <div class= "card-body text-center">
          <h5 class= "card-title">${collectorMerch.title}</h5>
          <p class= "card-text">${collectorMerch.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-dark button--1">Purchase</button>
        </div>
      </div>
      
      `;
    }).join(''); 
  }
  
  const printHome = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = eVHome.map(function (home) {
          return `   
      <div class= "card d-flex flex-wrap" style="width: 14rem;">
        <img class="card-img-top" src="${home.image}" alt="Card image cap">
        <div class= "card-body text-center">
          <h5 class= "card-title">${home.title}</h5>
          <p class= "card-text">${home.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-dark button--1">Purchase</button>
        </div>
      </div>
      
      `;
    }).join(''); 
  }
  
  const printAll = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = eVAll.map(function (all) {
          return `   
      <div class= "card d-flex flex-wrap" style="width: 14rem;">
        <img class="card-img-top" src="${all.image}" alt="Card image cap">
        <div class= "card-body text-center">
          <h5 class= "card-title">${all.title}</h5>
          <p class= "card-text">${all.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-dark button--1">Purchase</button>
        </div>
      </div>
      
      `;
    }).join(''); 
  }
  
  const purchaseAlert = () => {
    alert("Purchase successful!")
  }
  
  
  document.getElementById('apparel-btn').addEventListener('click', printClothes);
  document.getElementById('tourMerch-btn').addEventListener('click', printTourMerch);
  document.getElementById('Collector-btn').addEventListener('click', printCollectorMerch);
  document.getElementById('home-btn').addEventListener('click', printHome);
  document.getElementById('all-btn').addEventListener('click', printAll);
  

 
console.log(eVApparel)
console.log(eVTourMerch)
console.log(eVCollector)
console.log(eVHome)
console.log(eVAll)
