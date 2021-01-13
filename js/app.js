'use strict';
var workHours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var randomNum=function(min,max){
  var number= Math.floor(Math.random()*(max-min+1)+min);
  return(number);
};
var branch=[];
function Branches(name,minCustomerPerHour,maxCustomerPerHour,avgCookiesPerHour){
  this.name=name;
  this.minCustomerPerHour=minCustomerPerHour;
  this.maxCustomerPerHour=maxCustomerPerHour;
  this.avgCookiesPerHour=avgCookiesPerHour;
  this.customerPerHour=[];
  this.cookiesPerHour=[];
  this.sumOfCookies=0;
  branch.push(this);
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
firstColumn.textContent='City';
tableHead.appendChild(firstColumn);
tableHead.setAttribute('border',0);
for(var i=0;i<workHours.length;i++){
  var Column=document.createElement('th');
  Column.textContent=workHours[i];
  tableHead.appendChild(Column);
}
var lastColumn=document.createElement('th');
lastColumn.textContent='Daily Location Total';
tableHead.appendChild(lastColumn);
branchesTable.setAttribute('border',3);
branchesTable.appendChild(tableHead);

var tableBody=document.createElement('tbody');
branchesTable.appendChild(tableBody);

Branches.prototype.render=function(){
  var firstRow=document.createElement('tr');
  tableBody.appendChild(firstRow);
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

function total(){
  var tableFooter=document.createElement('tfoot');
  branchesTable.deleteTFoot();
  branchesTable.appendChild(tableFooter);
var lastRow=document.createElement('tr');
var lastRow1stCol=document.createElement('td');
lastRow1stCol.textContent='total';
lastRow.appendChild(lastRow1stCol);
  for(var i =0;i<workHours.length;i++){
    var lastRowColumns=document.createElement('td');

    var sumOfAllBranches=0;
    for(var j=0;j<branch.length;j++){
      sumOfAllBranches+=parseInt(branch[j].cookiesPerHour[i]);
}

    lastRowColumns.textContent=sumOfAllBranches;
    lastRow.appendChild(lastRowColumns);
}

  var lastRowLastCol=document.createElement('td');
  var AllBranches=0;
  for(var j=0;j<branch.length;j++){
    AllBranches +=parseInt(branch[j].sumOfCookies);
  }
  lastRowLastCol.textContent=AllBranches;
  lastRow.appendChild(lastRowLastCol);
  tableFooter.appendChild(lastRow);
  branchesTable.appendChild(tableFooter);
}

var branchform=document.getElementById('branchform');
branchform.addEventListener('submit',submitter);
function submitter (event){
  event.preventDefault();
  var name=event.target.nameField.value;
  var minCustomerPerHour=event.target.minCustomerPerHour.value;
  var maxCustomerPerHour=event.target.maxCustomerPerHour.value;
  var avgCookiesPerHour=event.target.avgCookiesPerHour.value;
  var newbranch= new Branches(name,minCustomerPerHour,maxCustomerPerHour,avgCookiesPerHour)
  newbranch.calculateCustomersPerHour();
  newbranch.calculateCookiesPerHour();
  newbranch.calculatesumOfCookies();
  newbranch.render();
  total();
}
total();
