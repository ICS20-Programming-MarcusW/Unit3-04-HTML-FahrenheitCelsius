// Copyright (c) 2022 Marcus Wehbi All rights reserved
// Created by: Marcus Wehbi
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

 // This function converts Celsius to Fahrenheit.
function convertCelToFahr() {
  // get user input
  let tempCel = parseFloat(document.getElementById('cel').value)


  // calculate the temperature in fahrenheit from celsius
  let tempFahr = (tempCel * 9/5) + 32
  
  // display the results
  document.getElementById('tempFahr').innerHTML = "The temperature in Fahrenheit is " + tempFahr.toFixed(2) + " °F"
  
  if (tempCel <= 0){
    document.getElementById('tempFahr').style.color = "blue";
  } else if (tempCel > 30) {
    document.getElementById('tempFahr').style.color = "red";
  }else{
    document.getElementById('tempFahr').style.color = "black";
  }
}

// This function converts Fahrenheit to Celsius.

function convertFahrToCel() {
  // get user input
  let tempFahr = parseFloat(document.getElementById('fahr').value)


  // calculate the temperature in celsius from fahrenheit
  let tempCels = (tempFahr - 32.0) * (5/9) 
  
  // display the results
  document.getElementById('tempCels').innerHTML = "The temperature in Celsius is " + tempCels.toFixed(2) + " °C"

  if (tempCels <= 0){
    document.getElementById('tempCels').style.color = "blue";
  } else if (tempCels > 30) {
    document.getElementById('tempCels').style.color = "red";
  }else{
    document.getElementById('tempCels').style.color = "black";
  }

}
