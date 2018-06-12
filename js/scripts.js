$(document).ready(function(){
  var transaction = function(name, initialDeposit, arr){
    this.name = name;
    this.initialDeposit = initialDeposit;
    this.arr = [];
    this.calc = function() {
      return this.initialDeposit + this.arr[0].deposit-this.arr[0].withdrawl;
    }
  }

  var transAmmount = function(deposit, withdrawl) {
    this.deposit = deposit;
    this.withdrawl = withdrawl;
  }

//var ammount = 2000;

var name;
var initialDeposit;
$("form#formOne").submit(function(event) {
 event.preventDefault();

name = $("input#name").val();
initialDeposit = parseInt($("input#initial").val());
if (isNaN(initialDeposit)) {
  initialDeposit = 0;
}
$("#formOne").hide();
document.getElementById("test").innerHTML = "Hi " + name + " your initial balance is: " +initialDeposit;

 $(".initial-hide").show();
});

$("form#formOne1").submit(function(event) {
 event.preventDefault();

var deposit = parseInt($("input#deposit").val());
if (isNaN(deposit))  {
  deposit = 0;
}
var withdrawl = parseInt($("input#withdrawl").val());
if (isNaN(withdrawl))  {
  withdrawl = 0;
}


var firstTransaction = new transaction(name, initialDeposit);
var fistAmmount = new transAmmount(deposit, withdrawl);

firstTransaction.arr.push(fistAmmount);



document.getElementById("test").innerHTML = "Hi " + firstTransaction.name + " you now have a balance of: " + firstTransaction.calc();

});

});
