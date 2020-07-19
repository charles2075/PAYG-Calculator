function calculate()
{
  var field1=document.getElementById("grossPay").value;

  if(!isNaN(field1))
  {

	if (field1 < 422 && field1 > 355){
    	var afterTax = (field1 * 0.1900) - 67.4635; // y = (x * a) - b;
		document.getElementById("answer").innerHTML="Tax payable is "+afterTax.toFixed(2);
	}
	else if (field1 < 528 && field1 > 422){
    	var afterTax = (field1 * 0.2900) - 109.7327; // y = (x * a) - b;
		document.getElementById("answer").innerHTML="Tax payable is "+afterTax.toFixed(2);
	}
	else if (field1 < 711 && field1 > 528){
    	var afterTax = (field1 * 0.2100) - 67.4635; // y = (x * a) - b;
		document.getElementById("answer").innerHTML="Tax payable is "+afterTax.toFixed(2);
    }
	else if (field1 < 1282 && field1 > 711){
    	var afterTax = (field1 * 0.3477) - 165.4423; // y = (x * a) - b;
		document.getElementById("answer").innerHTML="Tax payable is "+afterTax.toFixed(2);
    }
	else if (field1 < 1730 && field1 > 1282){
    	var afterTax = (field1 * 0.3450) - 161.9808; // y = (x * a) - b;
		document.getElementById("answer").innerHTML="Tax payable is "+afterTax.toFixed(2);
    }   
	else if (field1 < 3461 && field1 > 1730){
    	var afterTax = (field1 * 0.3900) - 239.8654; // y = (x * a) - b;
		document.getElementById("answer").innerHTML="Tax payable is "+afterTax.toFixed(2);
    }
	else if (field1 >= 3461){
    	var afterTax = (field1 * 0.4700) - 516.7885; // y = (x * a) - b;
		document.getElementById("answer").innerHTML="Tax payable is "+afterTax.toFixed(2);
    }   
	}	
  }
