const searchButton = document.getElementById('sea');
const searchInput = document.getElementById('input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert('You clicked the search icon');
});