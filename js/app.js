'use strict';
var workHours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var randomNum=function(min,max){
  var number= Math.floor(Math.random()*(max-min+1)+min);
  return(number);
};
var seattle={
  minCustomerPerHour:23,
  maxCustomerPerHour:65,
  avgCookiesPerHour:6.3,
  customerPerHour:[],
  calculateCustomersPerHour : function(){
    var customer;
    for(var i=0;i<workHours.length;i++){
      customer=randomNum(this.minCustomerPerHour,this.maxCustomerPerHour);
      this.customerPerHour[i]=customer;
    }
  },
  cookiesPerHour:[],
  calculateCookiesPerHour : function(){
    var cookies;
    for(var i=0;i<workHours.length;i++){
      cookies=this.customerPerHour[i]*parseInt(this.avgCookiesPerHour);
      console.log(cookies);
      this.cookiesPerHour.push(cookies);
    }
  },
};

seattle.calculateCustomersPerHour();
seattle.calculateCookiesPerHour();
var sumOfCookies=0;
for(i=0;i<seattle.cookiesPerHour.length;i++){
  sumOfCookies=sumOfCookies+seattle.cookiesPerHour[i];
}
seattle.cookiesPerHour.push(sumOfCookies);
console.log(sumOfCookies);

var seattleWorkingHours=document.createElement('ul');

for(var i=0;i<=workHours.length;i++){
  var seattleWorkList=document.createElement('li');
  if(i=== workHours.length){
    seattleWorkList.textContent='Total :'+seattle.cookiesPerHour[i]+' cookies';
  }else{
    seattleWorkList.textContent=workHours[i]+':'+seattle.cookiesPerHour[i]+' cookies';
  }
  seattleWorkingHours.appendChild(seattleWorkList);

}
var branchSeatlle=document.createElement('h2');
branchSeatlle.textContent='Seatlle';
document.getElementById('body-id').appendChild(branchSeatlle)
document.getElementById('body-id').appendChild(seattleWorkingHours);
console.log(seattleWorkingHours);

var tokyo={
  minCustomerPerHour:3,
  maxCustomerPerHour:24,
  avgCookiesPerHour:1.2,
  customerPerHour:[],
  calculateCustomersPerHour : function(){
    var customer;
    for(var i=0;i<workHours.length;i++){
      customer=randomNum(this.minCustomerPerHour,this.maxCustomerPerHour);
      this.customerPerHour[i]=customer;
    }
},
  cookiesPerHour:[],
  calculateCookiesPerHour : function(){
    var cookies;
    for(var i=0;i<workHours.length;i++){
      cookies=this.customerPerHour[i]*parseInt(this.avgCookiesPerHour);
      console.log(cookies);
      this.cookiesPerHour.push(cookies);
    }
  },

};

tokyo.calculateCustomersPerHour();
tokyo.calculateCookiesPerHour();
var sumOfCookies=0;
for(var i=0;i<tokyo.cookiesPerHour.length;i++){
  sumOfCookies=sumOfCookies+tokyo.cookiesPerHour[i];
}
tokyo.cookiesPerHour.push(sumOfCookies);
var tokyoWorkingHours=document.createElement('ul');

for(var i=0;i<=workHours.length;i++){
  var tokyoWorkList=document.createElement('li');
  if(i=== workHours.length){
    tokyoWorkList.textContent='Total :'+tokyo.cookiesPerHour[i]+' cookies';
  }else{
    tokyoWorkList.textContent=workHours[i]+':'+tokyo.cookiesPerHour[i]+' cookies';
  }
  tokyoWorkingHours.appendChild(tokyoWorkList);

};
var branchtokyo=document.createElement('h2');
branchtokyo.textContent='Tokyo';
document.getElementById('body-id').appendChild(branchtokyo)
document.getElementById('body-id').appendChild(tokyoWorkingHours);
console.log(tokyoWorkingHours);


var dubai={
  minCustomerPerHour:11,
  maxCustomerPerHour:38,
  avgCookiesPerHour:3.7,
  customerPerHour:[],
  calculateCustomersPerHour : function(){
    var customer;
    for(var i=0;i<workHours.length;i++){
      customer=randomNum(this.minCustomerPerHour,this.maxCustomerPerHour);
      this.customerPerHour[i]=customer;
    }
  },
  cookiesPerHour:[],
  calculateCookiesPerHour : function(){
    var cookies;
    for(var i=0;i<workHours.length;i++){
      cookies=this.customerPerHour[i]*parseInt(this.avgCookiesPerHour);
      console.log(cookies);
      this.cookiesPerHour.push(cookies);
    }
  },
};

dubai.calculateCustomersPerHour();
dubai.calculateCookiesPerHour();
var sumOfCookies=0;
for(var i=0;i<dubai.cookiesPerHour.length;i++){
  sumOfCookies=sumOfCookies+dubai.cookiesPerHour[i];
}
dubai.cookiesPerHour.push(sumOfCookies);

var dubaiWorkingHours=document.createElement('ul');

for(var i=0;i<=workHours.length;i++){
  var dubaiWorkList=document.createElement('li');
  if(i=== workHours.length){
    dubaiWorkList.textContent='Total :'+dubai.cookiesPerHour[i]+' cookies';
  }else{
    dubaiWorkList.textContent=workHours[i]+':'+dubai.cookiesPerHour[i]+' cookies';
  }
  dubaiWorkingHours.appendChild(dubaiWorkList);

}
var branchdubai=document.createElement('h2');
branchdubai.textContent='Dubai';
document.getElementById('body-id').appendChild(branchdubai)
document.getElementById('body-id').appendChild(dubaiWorkingHours);
console.log(dubaiWorkingHours);



var paris={
  minCustomerPerHour:20,
  maxCustomerPerHour:38,
  avgCookiesPerHour:2.3,
  customerPerHour:[],
  calculateCustomersPerHour : function(){
    var customer;
    for(var i=0;i<workHours.length;i++){
      customer=randomNum(this.minCustomerPerHour,this.maxCustomerPerHour);  
      this.customerPerHour[i]=customer;
    }
  },
  cookiesPerHour:[],
  calculateCookiesPerHour : function(){
    var cookies;
    for(var i=0;i<workHours.length;i++){
      cookies=this.customerPerHour[i]*parseInt(this.avgCookiesPerHour);
      console.log(cookies);
      this.cookiesPerHour.push(cookies);
    }
  },

};

paris.calculateCustomersPerHour();
paris.calculateCookiesPerHour();
var sumOfCookies=0;
for(i=0;i<paris.cookiesPerHour.length;i++){
  sumOfCookies=sumOfCookies+paris.cookiesPerHour[i];
}
paris.cookiesPerHour.push(sumOfCookies);
var parisWorkingHours=document.createElement('ul');

for(var i=0;i<=workHours.length;i++){
  var parisWorkList=document.createElement('li');
  if(i=== workHours.length){
    parisWorkList.textContent='Total :'+paris.cookiesPerHour[i]+' cookies';
  }else{
parisWorkList.textContent=workHours[i]+":"+paris.cookiesPerHour[i]+' cookies';
  }
  parisWorkingHours.appendChild(parisWorkList);

}
var branchparis=document.createElement('h2');
branchparis.textContent='Paris';
document.getElementById('body-id').appendChild(branchparis)
document.getElementById('body-id').appendChild(parisWorkingHours);
console.log(parisWorkingHours);



var lima={
  minCustomerPerHour:2,
  maxCustomerPerHour:16,
  avgCookiesPerHour:4.6,
  customerPerHour:[],
  calculateCustomersPerHour : function(){
    var customer;   
    for(var i=0;i<workHours.length;i++){
      customer=randomNum(this.minCustomerPerHour,this.maxCustomerPerHour);  
      this.customerPerHour[i]=customer;
    }
  },
  cookiesPerHour:[],
  calculateCookiesPerHour : function(){
    var cookies;
    for(var i=0;i<workHours.length;i++){
      cookies=this.customerPerHour[i]*parseInt(this.avgCookiesPerHour);
      console.log(cookies);
      this.cookiesPerHour.push(cookies);
    }
  },

};

lima.calculateCustomersPerHour();
lima.calculateCookiesPerHour();
var sumOfCookies=0;
for(var i=0;i<lima.cookiesPerHour.length;i++){
  sumOfCookies=sumOfCookies+lima.cookiesPerHour[i];
}
lima.cookiesPerHour.push(sumOfCookies);
var limaWorkingHours=document.createElement('ul');

for(var i=0;i<=workHours.length;i++){
  var limaWorkList=document.createElement('li')
  if(i=== workHours.length){
    limaWorkList.textContent='Total :'+lima.cookiesPerHour[i]+' cookies';
  }else{
    limaWorkList.textContent=workHours[i]+':'+lima.cookiesPerHour[i]+' cookies';
  }
  limaWorkingHours.appendChild(limaWorkList);

}
var branchlima=document.createElement('h2');
branchlima.textContent='Lima';
document.getElementById('body-id').appendChild(branchlima)
document.getElementById('body-id').appendChild(limaWorkingHours);
console.log(limaWorkingHours);






