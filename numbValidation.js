function myFunction() {
  var x, text;//local

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
try{
    if (x<11 && x>0)
    {alert("input valid");}
  }

  catch{
    document.getElementById("demo").innerHTML = err.message;
  }
finally {
  alert('perfundim');
}
}

/*  document.getElementById("demo").innerHTML = text;
}*/
