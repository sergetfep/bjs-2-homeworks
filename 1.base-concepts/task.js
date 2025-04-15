"use strict";
function solveEquation(a, b, c) {
  const Discriminant = b ** 2 - 4 * a * c;
  if (Discriminant < 0) {
    return [];
  } else if (Discriminant === 0) {
    return [-b / (2 * a)];
  } else
    return [
      (-b + Math.sqrt(Discriminant)) / (2 * a),
      (-b - Math.sqrt(Discriminant)) / (2 * a),
    ];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = percent / 100 / 12;
  const creditSum = amount - contribution;
  const monthlyPayment =
    creditSum *
    (monthlyPercent +
      monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));

  return parseFloat((monthlyPayment * countMonths).toFixed(2));
}
