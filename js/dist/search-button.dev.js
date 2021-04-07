"use strict";

var searchButton = document.getElementById('sea');
var searchInput = document.getElementById('input');
searchButton.addEventListener('click', function () {
  var inputValue = searchInput.value;
  alert('You clicked the search icon');
});