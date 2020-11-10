let merchandiseArray = [
    {
        item: 'Free Your Mind Tee ' ,
        group: 'apparel',
        image:  'https://d1h6olfj08dopz.cloudfront.net/images/36731/v600_EnVoguq_FreeYourMind_Women_sWhite_T-Shirt_F.png',
        description: 'Limited Edition Tee',
        price: 23,
    },
    {
        item: 'En Vogue Dad Hat' ,
        group: 'apparel',
        image: 'https://www.google.com/search?q=en+vogue+dad+har&rlz=1C1CHBF_enUS917US918&sxsrf=ALeKk01fM52Z3wQCFG_AJrHKUbCIPgECaQ:1604543731396&tbm=isch&source=iu&ictx=1&fir=qLWgiEQay7yGmM%252CGy_BWZK5wtuLFM%252C_&vet=1&usg=AI4_-kT8qzPvgQ2NGHKMmpIgrNnLEAA34A&sa=X&ved=2ahUKEwiokouZr-rsAhVjm-AKHXvBBusQ9QF6BAgKEAg#imgrc=qLWgiEQay7yGmM',
        description: 'Top off your EV Look!',
        price: 18,
    },
    {
        item: 'En Vogue Diamond Pillow',
        group: 'EVHome',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDgR3OEo-xCP2smmpzBvLDE9tL9cVdyGTn6c4pbUjZq4_IHwJS519x3odTzfb37NI6j2yM8P33tZ8rmnkVvHfllfnk-yC4aBLjDnZ3GOw&usqp=CAE',
        description: 'Accent your home with this beautiful pillow',
        price: 18,
    },
    
    {
        item: 'En Vogue Picture Magnet' ,
        group: 'EVHome',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVXAaFmE_3AzrSGJRFd1FpUvonOC-benrluwAeDejPx3nee76nRTFrMdJhs0X6WfQqsTTQ0kQgB89JXAi26GRy9Mhkjw46gZpxrmdNzPxZRz94dZBnAcbU2Q&usqp=CAE',
        description: 'Show your EV fandom on your refridgerator',
        price: 8,
    },
    {
        item: 'An En Vogue Christmas' ,
        group: 'media',
        image: '',
        description:'En Vogue bringing you some holiday cheer! When her late father and uncle Marty club, The Opera House is about to be foreclosed, Kendall must convince her old friends Terry Cindy and Rhona of the R&B powerhouse En Vogue to put on a Christmas concert to keep the beloved club in business.',
        price: 19,
    },
    {
        item: 'Autographed Rhona Bennett Photo' ,
        group: 'CollectorMerchandise',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYy71KJLx_v9xtgbhFxeptNc9qN2DU-Yrb3W7RYdvr2GHG0C90pKBcJoRHM8h49r6cFR0oMrdBz4-bEzWlGmp6yDC3LNhbWEmPM-Ll_UU&usqp=CAE',
        description: 'Limited Edition Autographed Photo with Certificate of Authentication',
        price: 125,
    },
    {
        item: 'Electric Cafe Album' ,
        group: 'media',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYy71KJLx_v9xtgbhFxeptNc9qN2DU-Yrb3W7RYdvr2GHG0C90pKBcJoRHM8h49r6cFR0oMrdBz4-bEzWlGmp6yDC3LNhbWEmPM-Ll_UU&usqp=CAE',
        description: 'Get EVs latest studio album!',
        price: 14,
    },
    ]
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
};

const merchPrinter = (merchandiseArray) => {
    let domString = '';
    for (let i = 0; i < merchandiseArray.length; i++) { 
      domString += `
      <div class= "card_print">
        <div class= "card" style="width: 18rem;">
          <img class="card-img-top" src="${merchandiseArray[i].image}" alt="Card image cap">
          <div class= "card-body">
            <h5 class= "card-title">${merchandiseArray[i].object}</h5>
            <p class= "card-text">${merchandiseArray[i].description} ,${merchandiseArray[i].price}</p>
            <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
          </div>
        </div>
      </div>
    `} 
    printToDom('allInfo', domString)
  }
  
  const init = () => {
  merchPrinter(merchandiseArray)
  };
  
  init();
  
  const apparel_sort = merchandiseArray.filter(item => item.type === 'apparel')
  const media_sort = merchandiseArray.filter(item => item.type === 'media')
  const tourmerchandise_sort = merchandiseArray.filter(item => item.type === 'tourMerchandise')
  const CollectorMerchandise_sort = merchandiseArray.filter(item => item.type === 'CollectorMerchandise')
  const EVHome_sort = merchandiseArray.filter(item => item.type === 'EVHome')
  const All_sort = merchandiseArray.filter(item => item.type === 'apparel' || 'media' || 'tourMerchandise' || 'CollectorMerchandise' || 'EVHome')
  
  const Apparel_p = () => {
    document.getElementById("allInfo").innerHTML = merchandiseArray.innerHTML = 
        apparel_sort.map(function (apparel) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${apparel.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${apparel.object}</h5>
          <p class= "card-text">${apparel.description} ,${apparel.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }).join(''); 
  }    
  
  const Media_p = () => {
    document.getElementById("allInfo").innerHTML = merchandiseArray.innerHTML = 
    Media_sort.map(function (media) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${media.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${media.object}</h5>
          <p class= "card-text">${media.description} ,${media.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }).join(''); 
  } 
  
  const TourMechandise_p = () => {
    document.getElementById("allInfo").innerHTML = merchandiseArray.innerHTML = 
    TourMerchandise_sort.map(function (tourMechandise) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${tourMechandise.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${tourMechandise.object}</h5>
          <p class= "card-text">${tourMechandise.description} ,${tourMechandise.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }).join(''); 
  }
  
  const CollectorMerchandise_p = () => {
    document.getElementById("allInfo").innerHTML = merchandiseArray.innerHTML = 
    CollectorMerchandise_sort.map(function (CollectorMerchandise) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${CollectorMerchandise.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${CollectorMerchandise.object}</h5>
          <p class= "card-text">${CollectorMerchandise.description} ,${CollectorMerchandise.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }).join(''); 
  }
  
  const EVHome_p = () => {
    document.getElementById("allInfo").innerHTML = merchandiseArray.innerHTML = 
    EVHome_sort.map(function (EVHome) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${EVHome.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${EVHome.object}</h5>
          <p class= "card-text">${EVHome.description} ,${EVHome.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }).join(''); 
  }
  
  const All_p = () => {
    document.getElementById("allInfo").innerHTML = merchandiseArray.innerHTML = 
    All_sort.map(function (all) {
          return `   
      <div class= "card" style="width: 18rem;">
        <img class="card-img-top" src="${all.image}" alt="Card image cap">
        <div class= "card-body">
          <h5 class= "card-title">${all.object}</h5>
          <p class= "card-text">${all.description} ,${all.price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn-primary button--1">Purchase</button>
        </div>
      </div>
      
      `;
        }).join(''); 
  }
  
  const purchaseAlert = () => {
    alert("Purchase successful!")
  }
  
  
  document.getElementById('apparel').addEventListener('click', Apparel_p);
  document.getElementById('media').addEventListener('click', Media_p);
  document.getElementById('tourMechandise').addEventListener('click', TourMechandise_p);
  document.getElementById('EVHome').addEventListener('click', EVHome_p);
  document.getElementById('CollectorMerchandise').addEventListener('click', CollectorMerchandise_p);
  document.getElementById('all').addEventListener('click', All_p);
  