
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
    Date: "12/12/2020",
    type: "Upcoming",
    image: "",
    location: "Nashville, Tennessee",
    price: "$50.00",
  },

  {
    Date: "12/24/2020",
    type: "Upcoming",
    image: "",
    location: "New York, New York",
    price: "$70.00",
  },

  {
    Date: "1/12/2020",
    type: "Past",
    image: "",
    location: "Denver, Colorado",
    price: "$50.00",
  },

  {
    Date: "4/2/2021",
    type: "Presale",
    image: "",
    location: "Houston, Texas",
    price: "$520.00",
  },

  {
    Date: "7/18/2021",
    type: "Presale",
    image: "",
    location: "Portland, Oregon",
    price: "$100.00",
  },

  {
    Date: "2/5/2021",
    type: "Appearances",
    image: "",
    location: "Chicago, Illinois",
    price: "$300.00",
  },
];

// end of array

// begin alert popup
// let submit = document.getElementById("submit);
// submit.addEventListener("click", function () {
//   window.alert("you clicked");
// });
// end alert popup

// merchItems --- ticketItems
// merchPrinter--ticketPrinter
// merchCards -- ticketCards

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
          <h5 class="card-title">${ticketItems[i].name}</h5>
          <p class="card-text">${ticketItems[i].price}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn btn-dark button--1">Purchase Ticket</button>
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
          <p class="card-text">${upcoming.Date}</p>
          <button onclick="purchaseAlert()" id="btn-1" class="btn purchase-btn-group btn btn-dark button--1">Purchase Ticket</button>
        </div>
      </div>
`;
    })
    .join("");
};
// end upcoming cards

// begin ALL cards
const printAll = () => {
  document.getElementById(
    "ticketCards"
  ).innerHTML = ticketItems.innerHTML = allOfEm
    .map(function (all) {
      return `
    <div class="card d-flex flex-wrap" style="width: 18rem;">
      <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${all.location}</h5>
          <p class="card-text">${all.price}</p>
          <button onclick="purchaseAlert()" id="btn-5" class="btn btn-primary purchase-btn-group button--5">Purchase</button>
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



 