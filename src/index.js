// Inject styles
import "./scss/main.scss";

// Inject fonts
import fontawesome from "@fortawesome/fontawesome";
// import solid from '@fortawesome/fontawesome-free-solid';
import regular from "@fortawesome/fontawesome-free-regular";
// Add the icon to the library so you can use it in your page
fontawesome.library.add(regular);

// Inject fundamental libs
import _ from "lodash";
import numeral from "numeral";

// Inject jQuery related libs
import $ from "jquery";
import "jquery-match-height";
import "parsleyjs";


import "bootstrap";

// Below are test code, should delete them later

console.log("DSLKJLJF");
console.log(numeral);

function component() {
  var element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
}

window.onload = function() {
  document.body.appendChild(component());
};

$(function() {
  console.log("SDFJdK");
  $(".match-height").matchHeight();
});
