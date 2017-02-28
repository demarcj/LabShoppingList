let dvdList = ["American Beauty", "Princess Mononoke", "Berserk", "Fist of Legends", "Ghost in the Shell"];
let price = [400, 500, 1000, 350, 600];
let totalPrice = [];
let totalDvdList = [];
let list = [];

function reciept(){
  for(let i = 0; i < totalDvdList.length; i+=i){
    list += totalDvdList[i] + totalPrice[i] + "\n";
  }
  alert(list);
}

function shoppingCart(select){
  totalDvdList.push(dvdList[select]);
  totalPrice.push(totalPrice[select]);
  alert("Your dvd is " + dvdList[select] + " and the price is $" + price[select]);
}

function reset(){
  totalPrice = [];
  totalDvdList = [];
}


