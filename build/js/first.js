function calculate() {
  let size = document.ssuda.sizeS.value;
  let years = document.ssuda.yearsS.value / 100 / 12;
  let summ = document.ssuda.summS.value * 12;

  let x = Math.pow(1 + years, summ);
  let monthly = (size * x * years) / (x - 1);

  let payment = document.getElementById("payment");
  let total = document.getElementById("total");
  let totalInterest = document.getElementById("totalInterest");

  if (isFinite(monthly)) {
      payment.innerHTML = monthly.toFixed(2);
      total.innerHTML = (monthly*summ).toFixed(2);
      totalInterest.innerHTML = ((monthly*summ)-size).toFixed(2);
  } else {
      payment.innerHTML="";
      total.innerHTML="";
      totalInterest.innerHTML="";
  }
}
 