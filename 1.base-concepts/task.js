"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  // d - discriminant
  let d = Math.pow(b, 2) - (4*a*c);

  // если меньше нуля
  if (d < 0) {

  } // если равно нулю
  else if (d == 0) {
    arr[0] = (-b/(2*a));
    // если больше нуля
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  percent = percent/100/12; // делим на сто, чтобы преобразовать число, затем делим на 12, чтобы узнать процентную ставку в месяц

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  } // исходя из тестов, которые даны в файле test, нужна проверка на то, что каждое из значений не является НЕ числом

  let creditBody = amount - contribution; // тело кредита
  let monthlyPayment = creditBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1))); // ежемесячный платёж
  let sum = monthlyPayment * countMonths; // сумма, которую нужно будет заплатить

  sum = Number(sum.toFixed(2));

  return sum;

}