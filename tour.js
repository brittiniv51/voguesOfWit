// let ticketInfoArray = [
//   {
//     id: 0,
//     date: '6-19-21',
//     city: 'St. Paul, MN',
//     venue: 'Xcel Energy Center',
//     price:150,
//   },
//   {
//     id: 1,
//     date: '6-21-21',
//     city: 'Chicago, IL',
//     venue: 'United Center',
//     price: 150,
//   },
//   {
//     id: 2,
//     date: '6-24-21',
//     city: 'Detroit,MI',
//     venue: 'Little Caesar',
//     price: 150,
//   },
//   {
//     id: 3,
//     date: '6-25-21',
//     city: 'Pittsburg,PA',
//     venue: 'PPG Parcel Arena',
//     price: 150,
//   },
//   ]
//   let totalQty = 0;
//   let totalCost = 0;
//   let finalPrice =0;
//   let total1 = 0;

//  const printToDom = (divId, textToPrint) => {
//   const selectedDiv = document.getElementById(divId);
//   selectedDiv.innerHTML = textToPrint
//   };

//   const studentPrinter = (ticketInfoArray) => {
//     let domString = '';
//     for (let i = 0; i < ticketInfoArray.length; i++) {
//       domString += `<div class="col-2 ">${ticketInfoArray[i].date}</div>`
//       domString += `<div class="col-3 ">${ticketInfoArray[i].city}</div>`
//       domString += `<div class="col-4 ">${ticketInfoArray[i].venue}</div>`
//       domString += `<div class="col-2 ">${ticketInfoArray[i].price}</div>`
//       domString += `<input type="number" class="col-1 " id =${ticketInfoArray[i].id} value=0 > `;
//       domString += `<br>`;
//      }

//      domString += `<button class="btn btn-light purchase_tab"  onclick="getQty()">Purchase</button>`;

//     printToDom('allInfo', domString)

//     }
//   studentPrinter(ticketInfoArray)

//   function getQty() {
//     const value1 = parseFloat($("#0").val())
//     const value2 = parseFloat($("#1").val())
//     const value3 = parseFloat($("#2").val())
//     const value4 = parseFloat($("#3").val())
//     const totalQty = Number(value1) + Number(value2) + Number(value3) + Number(value4);
//       finalPrice = totalQty * 150
//       total_cost();
//     }

//   function total_cost () {
//     console.log("new final",finalPrice);
//   }

// function cart_checkout () {
//  alert("Thank You for purchasing your tickets for $" + finalPrice + "!")
// }

// upcoming, past, presale, appearances
const ticketItems = [
  {
    date: "12/12/2020",
    type: "Upcoming",
    image: "",
    location: "Nashville, Tennessee",
    price: "$50.00",
  },

  {
    date: "12/24/2020",
    type: "Upcoming",
    image: "",
    location: "New York, New York",
    price: "$70.00",
  },

  {
    date: "1/12/2020",
    type: "Past",
    image: "",
    location: "Denver, Colorado",
    price: "$50.00",
  },

  {
    date: "4/2/2021",
    type: "Presale",
    image: "",
    location: "Houston, Texas",
    price: "$520.00",
  },

  {
    date: "7/18/2021",
    type: "Presale",
    image: "",
    location: "Portland, Oregon",
    price: "$100.00",
  },

  {
    date: "2/5/2021",
    type: "Appearances",
    image: "",
    location: "Chicago, Illinois",
    price: "$300.00",
  },
];

// begin alert popup
const purchaseAlert = () => {
  alert("Your ticket has been purchased! See you there!");
};
// end alert popup

// dont understand this code

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const ticketPrinter = (ticketItems) => {
  let domString = "";
  for (i = 0; i < ticketItems.length; i++) {
    domString += `
    <div class="card">
      <img class="card-img-top" src="https://i.imgur.com/qP4LLTo.png" alt="">
        <div class="card-body">
          <h5 class="card-title">${ticketItems[i].location}</h5>
          <p class="card-text">${ticketItems[i].price}</p>
          <p class="card-text">${ticketItems[i].date}</p>
          <button onclick="purchaseAlert()" id="upcomingButton" class="btn purchase-btn-group btn btn-dark button--1">Purchase Tickets</button>
        </div>
    </div>
`;
  }
  printToDom("ticketCards", domString);
};

const init = () => {
  ticketPrinter(ticketItems);
};

init();

// dont understand this code above

// begin filters

const upcoming = ticketItems.filter((item) => item.type === "Upcoming");
const past = ticketItems.filter((item) => item.type === "Past");
const presale = ticketItems.filter((item) => item.type === "Presale");
const appearances = ticketItems.filter((item) => item.type === "Appearances");
const allCards = ticketItems.filter(
  (item) => item.type === "Upcoming" || "Past" || "Presale" || "Appearances"
);
// end filters

// begin upcoming cards
const printUpcoming = () => {
  document.getElementById(
    "ticketCards"
  ).innerHTML = ticketItems.innerHTML = upcoming
    .map(function (upcoming) {
      return `
    <div class="card">
           <img class="card-img-top" src="https://i.imgur.com/qP4LLTo.png" alt="">
        <div class="card-body">
          <h5 class="card-title">${upcoming.location}</h5>
          <p class="card-text">${upcoming.price}</p>
          <p class="card-text">${upcoming.date}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn btn-dark button--1">Purchase Ticket</button>
        </div>
      </div>
`;
    })
    .join("");
};
// end upcoming cards

// begin past cards
const printPast = () => {
  document.getElementById(
    "ticketCards"
  ).innerHTML = ticketItems.innerHTML = past
    .map(function (past) {
      return `
    <div class="card">
           <img class="card-img-top" src="https://i.imgur.com/qP4LLTo.png" alt="">
        <div class="card-body">
          <h5 class="card-title">${past.location}</h5>
          <p class="card-text">${past.price}</p>
          <p class="card-text">${past.date}</p>
          <button id="pastButton" class="btn purchase-btn-group invisible">this should be invisible</button>
        </div>
      </div>
`;
    })
    .join("");
};
// end past cards

// begin presale cards
const printPresale = () => {
  document.getElementById(
    "ticketCards"
  ).innerHTML = ticketItems.innerHTML = presale
    .map(function (presale) {
      return `
    <div class="card">
           <img class="card-img-top" src="https://i.imgur.com/qP4LLTo.png" alt="">
        <div class="card-body">
          <h5 class="card-title">${presale.location}</h5>
          <p class="card-text">${presale.price}</p>
          <p class="card-text">${presale.date}</p>
          <button onclick="purchaseAlert()" id="presaleButton" class="btn purchase-btn-group btn btn-dark button--1">Purchase Ticket</button>
        </div>
      </div>
`;
    })
    .join("");
};
// end presale cards

// begin appearances cards
const printAppearances = () => {
  document.getElementById(
    "ticketCards"
  ).innerHTML = ticketItems.innerHTML = appearances
    .map(function (appearances) {
      return `
    <div class="card">
           <img class="card-img-top" src="https://i.imgur.com/qP4LLTo.png" alt="">
        <div class="card-body">
          <h5 class="card-title">${appearances.location}</h5>
          <p class="card-text">${appearances.price}</p>
          <p class="card-text">${appearances.date}</p>
          <button onclick="purchaseAlert()" id="appearancesButton" class="btn purchase-btn-group btn btn-dark button--1">Purchase Ticket</button>
        </div>
      </div>
`;
    })
    .join("");
};
// end appearances cards

// begin ALL cards
const printAll = () => {
  document.getElementById(
    "ticketCards"
  ).innerHTML = ticketItems.innerHTML = allCards
    .map(function (all) {
      return `
    <div class="card d-flex flex-wrap" style="width: 18rem;">
      <img class="card-img-top" src="https://i.imgur.com/qP4LLTo.png" alt="">
        <div class="card-body">
          <h5 class="card-title">${all.location}</h5>
          <p class="card-text">${all.price}</p>
          <p class="card-text">${all.date}</p>
          <button onclick="purchaseAlert()" id="allButton" class="btn btn-dark purchase-btn-group button--5">Purchase</button>
        </div>
    </div>
`;
    })
    .join("");
};
// end ALL cards

// begin buttons
document
  .getElementById("upcomingButton")
  .addEventListener("click", printUpcoming);
document.getElementById("pastButton").addEventListener("click", printPast);
document
  .getElementById("presaleButton")
  .addEventListener("click", printPresale);
document
  .getElementById("appearancesButton")
  .addEventListener("click", printAppearances);
document.getElementById("allButton").addEventListener("click", printAll);
// end buttons

// upcoming
// function myFunction() {
//   const x = document.getElementById("pastCard");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// const upcomingButton = document.getElementsById("upcomingButton");
// upcomingButton.addEventListener("click", function () {
//   const x = document.getElementsById("pastCard");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// });

// //search function
// const adventureList = []
//   const adventures = document.getElementsByClassName("card")
//   for (let i = 0; i < adventures.length; i++) {
//     let adventureName = adventures[i].innerHTML;
//     adventureList.push(adventureName);

//   }

// let searchBar = document.getElementsById("search-bar")
// searchBar.addEventListener("keyup", function(event){
// let text = searchBar.value;
// for (let i = 0; i < adventures.length; i++) {
//   if (adventureList[i].indexOf(text) < 0) {
//     adventures[i].style.display = "none"
//   } else {
//     adventures[i].style.display = "block"

//   }
// });
