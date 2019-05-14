// Write your JavaScript here
let change = {
  totalChange: 0,
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
};

function calculateChange() {
  console.log("button was clicked");
  let amountDue = document.getElementById("amount-due").value * 100;
  let amountReceived = document.getElementById("amount-received").value * 100;
  let subTotal = amountReceived - amountDue;
  console.log(amountDue, amountReceived, subTotal);
  let change$ = Math.floor(subTotal / 100);
  document.getElementById("dollars-output").innerHTML = change$;
  let changeQ = Math.floor((subTotal - change$ * 100) / 25);
  document.getElementById("quarters-output").innerHTML = changeQ;
  let changeD = Math.floor((subTotal - change$ * 100 - changeQ * 25) / 10);
  document.getElementById("dimes-output").innerHTML = changeD;
  let changeN = Math.floor((subTotal - change$ * 100 - changeQ * 25 - changeD * 10) / 5);
  document.getElementById("nickels-output").innerHTML = changeN;
  let changeP = Math.ceil((subTotal - change$ * 100 - changeQ * 25 - changeD * 10 - changeN * 5) / 1);
  document.getElementById("pennies-output").innerHTML = changeP;
}
