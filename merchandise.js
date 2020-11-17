const merchItems = [
    
  {
        item: 'Free Your Mind Tee',
        group: 'apparel',
        image:  'https://d1h6olfj08dopz.cloudfront.net/images/36731/v600_EnVoguq_FreeYourMind_Women_sWhite_T-Shirt_F.png',
        price:'  $23',
    },
    {
        item: 'En Vogue Dad Hat',
        group: 'apparel',
        image: 'https://d1h6olfj08dopz.cloudfront.net/images/34423/EV_Port-_-Company_Unstructured-Hat_CP77_F2.png',
        price:'$18',
    },
    {
        item: 'En Vogue Diamond Pillow',
        group: 'EVHome',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDgR3OEo-xCP2smmpzBvLDE9tL9cVdyGTn6c4pbUjZq4_IHwJS519x3odTzfb37NI6j2yM8P33tZ8rmnkVvHfllfnk-yC4aBLjDnZ3GOw&usqp=CAE',
        price:'   $18',
    },
    {
        item: 'En Vogue Picture Magnet',
        group: 'EVHome',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVXAaFmE_3AzrSGJRFd1FpUvonOC-benrluwAeDejPx3nee76nRTFrMdJhs0X6WfQqsTTQ0kQgB89JXAi26GRy9Mhkjw46gZpxrmdNzPxZRz94dZBnAcbU2Q&usqp=CAE',
        price:'   $8',
    },
    {
        item: 'An En Vogue Christmas',
        group: 'media',
        image: 'https://d2snwnmzyr8jue.cloudfront.net/mar_413_270.jpeg',
        price:'  $19',
    },
    {
        item: 'Autographed Rhona Bennett Photo',
        group: 'CollectorMerchandise',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYy71KJLx_v9xtgbhFxeptNc9qN2DU-Yrb3W7RYdvr2GHG0C90pKBcJoRHM8h49r6cFR0oMrdBz4-bEzWlGmp6yDC3LNhbWEmPM-Ll_UU&usqp=CAE',
        price:'   $125',
    },
    {
        item: 'Electric Cafe Album',
        group: 'media',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTsgP0t85lIxy_ImbMkrThYULTmoqRPrNslA&usqp=CAU',
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
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${merchItems[i].image}" alt="Card image cap">
              <div class="card-body">
                 <h5 class="card-title">${merchItems[i].item}</h5>
                 <h5 class="card-price">${merchItems[i].price}</h5>
                 <button onclick="purchaseAlert()" id="btn-5" class="btn btn-dark purchase-btn-group button--5">Add to Cart</button>
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
  
  const eVApparel = merchItems.filter(group => group.type === 'apparel')
  const eVMedia = merchItems.filter(group => group.type === 'media')
  const eVTourMerch = merchItems.filter(group => group.type === 'tourMerch')
  const eVCollector = merchItems.filter(group => group.type === 'collectorMerch')
  const eVHome = merchItems.filter(group => group.type === 'home')
  const eVAll = merchItems.filter(group => group.type === 'apparel' || 'media' || 'tourMerch' || 'collectorMerch' || 'home')
  
  const printClothes = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = 
        apparel.map(function (apparel) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${apparel.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${apparel.item}</h5>
          <p class= "card-text">${apparel.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }); 
  }    
  
  /*const Media_p = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = 
    media_sort.map(function (media) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${media.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${media.item}</h5>
          <p class= "card-text">${media.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }); 
  } 
  
  const TourMechandise_p = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = 
    tourMerchandise_sort.map(function (tourMechandise) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${tourMechandise.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${tourMechandise.item}</h5>
          <p class= "card-text">${tourMechandise.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }); 
  }
  
  const CollectorMerchandise_p = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = 
    CollectorMerchandise_sort.map(function (CollectorMerchandise) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${CollectorMerchandise.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${CollectorMerchandise.item}</h5>
          <p class= "card-text">${CollectorMerchandise.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }); 
  }
  
  const EVHome_p = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = 
    evHome_sort.map(function (evHome) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${evHome.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${evHome.item}</h5>
          <p class= "card-text">${evHome.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }); 
  }
  
  const All_p = () => {
    document.getElementById("merchCards").innerHTML = merchItems.innerHTML = 
    all.map(function (all) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${all.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${all.item}</h5>
          <p class= "card-text">${all.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }); 
  }*/
  
  const purchaseAlert = () => {
    alert("Purchase successful!")
  }
  
  
  document.getElementById('apparel').addEventListener('click', printClothes);
  document.getElementById('media').addEventListener('click', Media_p);
  document.getElementById('tourMechandise').addEventListener('click', TourMechandise_p);
  document.getElementById('evHome').addEventListener('click', EVHome_p);
  document.getElementById('CollectorMerchandise').addEventListener('click', CollectorMerchandise_p);
  document.getElementById('all').addEventListener('click', All_p);
  

 
console.log(eVApparel)
console.log(media_sort)
console.log(tourMerchandise_sort)
console.log(evHome_sort)
console.log(CollectorMerchandise_sort)
console.log(All_sort)
