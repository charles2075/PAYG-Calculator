function calculate()
{
  var normalHours=document.getElementById("normalHours").value;
  var hourlyRate=document.getElementById("hourlyRate").value;
  var halfHours=document.getElementById("halfHours").value;
  var doubleHours=document.getElementById("doubleHours").value;
  var weeklyPay = (hourlyRate * normalHours) + (1.5 * (hourlyRate * halfHours)) + (2 * (hourlyRate * doubleHours));



  if(!isNaN(weeklyPay))
  {

    if (weeklyPay < 422 && weeklyPay > 355){
        var afterTax = (weeklyPay * 0.1900) - 67.4635;
        var result = (weeklyPay - afterTax); // y = (x * a) - b;
        document.getElementById("takeHomePay").innerHTML="Net Pay: $"+result.toFixed(2);
        document.getElementById("taxPaid").innerHTML="Tax Paid: $"+(weeklyPay-result).toFixed(2);
        document.getElementById("grossPay").innerHTML="Gross Pay: $"+weeklyPay.toFixed(2);
    }
    else if (weeklyPay < 528 && weeklyPay > 422){
        var afterTax = (weeklyPay * 0.2900) - 109.7327; // y = (x * a) - b;
        var result = (weeklyPay - afterTax);
        document.getElementById("takeHomePay").innerHTML="Net Pay: $"+result.toFixed(2);
        document.getElementById("taxPaid").innerHTML="Tax Paid: $"+(weeklyPay-result).toFixed(2);
        document.getElementById("grossPay").innerHTML="Gross Pay: $"+weeklyPay.toFixed(2);
    }
    else if (weeklyPay < 711 && weeklyPay > 528){
        var afterTax = (weeklyPay * 0.2100) - 67.4635; // y = (x * a) - b;
        var result = (weeklyPay - afterTax);
        document.getElementById("takeHomePay").innerHTML="Net Pay: $"+result.toFixed(2);
        document.getElementById("taxPaid").innerHTML="Tax Paid: $"+(weeklyPay-result).toFixed(2);
        document.getElementById("grossPay").innerHTML="Gross Pay: $"+weeklyPay.toFixed(2);
    }
    else if (weeklyPay < 1282 && weeklyPay > 711){
      var afterTax = (weeklyPay * 0.3477) - 165.4423; // y = (x * a) - b;
      var result = (weeklyPay - afterTax);
      document.getElementById("takeHomePay").innerHTML="Net Pay: $"+result.toFixed(2);
      document.getElementById("taxPaid").innerHTML="Tax Paid: $"+(weeklyPay-result).toFixed(2);
      document.getElementById("grossPay").innerHTML="Gross Pay: $"+weeklyPay.toFixed(2);
    }
    else if (weeklyPay < 1730 && weeklyPay > 1282){
        var afterTax = (weeklyPay * 0.3450) - 161.9808; // y = (x * a) - b;
        var result = (weeklyPay - afterTax);
        document.getElementById("takeHomePay").innerHTML="Net Pay: "+result.toFixed(2);
        document.getElementById("taxPaid").innerHTML="Tax Paid: $"+(weeklyPay-result).toFixed(2);
        document.getElementById("grossPay").innerHTML="Gross Pay: $"+weeklyPay.toFixed(2);
    }   
   else if (weeklyPay < 3461 && weeklyPay > 1730){
       var afterTax = (weeklyPay * 0.3900) - 239.8654; // y = (x * a) - b;
       var result = (weeklyPay - afterTax);
       document.getElementById("takeHomePay").innerHTML="Net Pay: $"+result.toFixed(2);
       document.getElementById("taxPaid").innerHTML="Tax Paid: $"+(weeklyPay-result).toFixed(2);
       document.getElementById("grossPay").innerHTML="Gross Pay: $"+weeklyPay.toFixed(2);
    }
   else if (weeklyPay >= 3461){
       var afterTax = (weeklyPay * 0.4700) - 516.7885; // y = (x * a) - b;
       var result = (weeklyPay - afterTax);
       document.getElementById("takeHomePay").innerHTML="Net Pay: $"+result.toFixed(2);
       document.getElementById("taxPaid").innerHTML="Tax Paid: $"+(weeklyPay-result).toFixed(2);
       document.getElementById("grossPay").innerHTML="Gross Pay: $"+weeklyPay.toFixed(2);
   }
   }    
}
