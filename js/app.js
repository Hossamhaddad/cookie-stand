'use strict';
var workHours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var randomNum=function(min,max){
  var number= Math.floor(Math.random()*(max-min+1)+min);
  return(number);
};
function Branches(name,minCustomerPerHour,maxCustomerPerHour,avgCookiesPerHour){
  this.name=name;
  this.minCustomerPerHour=minCustomerPerHour;
  this.maxCustomerPerHour=maxCustomerPerHour;
  this.avgCookiesPerHour=avgCookiesPerHour;
  this.customerPerHour=[];
  this.cookiesPerHour=[];
  this.sumOfCookies=0;
}

Branches.prototype.calculateCustomersPerHour= function(){
  var customer;
  for(var i=0;i<workHours.length;i++){
    customer=randomNum(this.minCustomerPerHour,this.maxCustomerPerHour);
    this.customerPerHour[i]=customer;
  }
};
Branches.prototype.calculateCookiesPerHour= function(){
  var cookies=0;
  for(var i=0;i<workHours.length;i++){
    cookies=this.customerPerHour[i]*this.avgCookiesPerHour;
    this.cookiesPerHour.push(Math.ceil(cookies));
  }
};
Branches.prototype.calculatesumOfCookies= function(){
  this.sumOfCookies;
  for(var i=0;i<this.cookiesPerHour.length;i++){
    this.sumOfCookies=this.sumOfCookies+this.cookiesPerHour[i];
  } 
};
var parentMain= document.getElementById('mainId');
var branchesTable=document.createElement('table');
var tableHead=document.createElement('thead');
var firstColumn=document.createElement('th');
firstColumn.textContent='';
tableHead.appendChild(firstColumn);
tableHead.setAttribute('border',0);
for(var i=0;i<workHours.length;i++){
  var Column=document.createElement('th');
  Column.textContent=workHours[i];
  tableHead.appendChild(Column);
}
var lastColumn=document.createElement('th');
lastColumn.setAttribute('border',0);
lastColumn.textContent="Daily Location Total";
tableHead.appendChild(lastColumn);
branchesTable.setAttribute('border',3);
branchesTable.appendChild(tableHead);
Branches.prototype.render=function(){
  var firstRow=document.createElement('tr');
  branchesTable.appendChild(firstRow);
  var thisBranchName=document.createElement('td');
  thisBranchName.textContent=this.name;
  firstRow.appendChild(thisBranchName);
  for(var i=0;i<=workHours.length;i++){
    var WorkList=document.createElement('td');
    if(i=== workHours.length){
      WorkList.textContent=this.sumOfCookies;
    }else{
      WorkList.textContent=this.cookiesPerHour[i];
    }
    firstRow.appendChild(WorkList);
  }
  parentMain.appendChild(branchesTable);
};
var seattle= new Branches('Seattle',23,65,6.3);
seattle.calculateCustomersPerHour();
seattle.calculateCookiesPerHour();
seattle.calculatesumOfCookies();
seattle.render();

var tokyo= new Branches('Tokyo',3,24,1.2);
tokyo.calculateCustomersPerHour();
tokyo.calculateCookiesPerHour();
tokyo.calculatesumOfCookies();
tokyo.render();
var dubai= new Branches('Dubai',11,38,3.7);
dubai.calculateCustomersPerHour();
dubai.calculateCookiesPerHour();
dubai.calculatesumOfCookies();
dubai.render();
var paris= new Branches('Paris',20,38,2.3);
paris.calculateCustomersPerHour();
paris.calculateCookiesPerHour();
paris.calculatesumOfCookies();
paris.render();
var lima= new Branches('Lima',2,16,4.6);
lima.calculateCustomersPerHour();
lima.calculateCookiesPerHour();
lima.calculatesumOfCookies();
lima.render();