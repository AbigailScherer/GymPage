"use strict";

const MAXHEIGHT  =  12;
const MAXWIDTH  =  96;
const MINHEIGHT  =  1;
const MINWIDTH  =  777;
const MAXUNDER  =  18.5;
const MAXOPTIMAL  =  25.0;
const MAXOVER  =  30.0;

var $ = function(id){
	return document.getElementById(id);
};

    function BMICalculate()

/* Accept input variables*/
    {
    var weight = document.getElementById('weight').value;
    var heightft = document.getElementById('heightft').value;

    /* Error Handling  for invalid data entered*/
   if (weight == "") {
                alert("Please enter your weight.");
                return;  }
   if (heightft == "") {
                alert("Please enter your height.");
                return;  }
   if (weight < 0) {
                alert("No negative numbers");
                return;  }
   if (weight < 30) {
                alert("To light");
                return;  }
   if (weight > 1500) {
                alert("To heavy");
                return;  }
   if (heightft < 0) {
                alert("No Negative Numbers");
                return;  }
   if (heightft < 3) {
                alert("That is to short");
                return;   }
   if (heightft > 10) {
                alert("That is to tall");
                return;  }

  /* Performing calculations */
    var heightin = document.getElementById('heightin').value;
    var height = heightft*12 + +heightin;

    BMI.innerHTML = Math.round((weight /(height*height)) * 703.06957964);
    getDescription(BMI.innerHTML);   }

/* Slider function to dynamically display inches portion of the height selected */
 function Slider()
    {heightin_op.innerHTML = document.getElementById('heightin').value;}

/* Interpretation of BMI value */
 function getDescription(thisBMI)

    { var Description = "";
            if (thisBMI<18.5)
                Description ="Underweight";
            else if (thisBMI>=18.5 && thisBMI<=24.99)
                Description ="Normal";
            else if (thisBMI>=25 && thisBMI<=29.99)
                Description ="Overweight";
            else if (thisBMI>=30 && thisBMI<=39.99)
                Description ="Obese";
            else if (thisBMI>=40)
        Description ="Morbidly Obese";
      else Description ="Please check your input values, BMI cannot be calculated.";

        var DESC = document.getElementById('DESC');
        DESC.innerHTML = Description;
    }

  /* Reset Button */
   function Clear()
    {
        document.getElementById('weight').value = "";
        document.getElementById('heightft').value = "";
        document.getElementById('heightin').value = "3";
        document.getElementById('BMI').value = "";
        document.getElementById('DESC').value = "";
        BMI.innerHTML = "";
        DESC.innerHTML = "";
        heightin_op.innerHTML = "3";
    }
</script>
window.onload = function() {
	$("calculate") .onclick = processEntries;
	$("reset") .onclick = resetTheForm;
	$("height") .focus();
};
