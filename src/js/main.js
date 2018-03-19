// Inject fundamental libs
import _ from "lodash";
import numeral from "numeral";
import moment from "moment";

// Inject jQuery related libs
import $ from "jquery";
import "jquery-match-height";
import "parsleyjs";

// Inject bootstrap related libs
import "bootstrap";
import "bootstrap-datepicker";

// Below are test code, should delete them later

console.log("DSLKJLJF");
console.log(numeral);
console.log(moment);

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

$(function() {
  $(".date-picker-test").datepicker({
    minViewMode: 1,
    daysOfWeekDisabled: "0",
  });
});
