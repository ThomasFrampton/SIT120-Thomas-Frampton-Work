function Search(){
  /* Gets the element with the id of 'Search' and hides it. */
  var element = document.getElementById("Search");
  element.style.display="none";
  /* Gets the element with the id of 'Result' and displays it. */
  var element = document.getElementById("Result");
  element.style.display="block"
}

function Return(){
  /* Gets the element with the id of 'Search' and displays it. */
  var element = document.getElementById("Search");
  element.style.display="block";
  /* Gets the element with the id of 'Result' and hides it. */
  var element = document.getElementById("Result");
  element.style.display="none"
  /* Clears the element with the id of 'carname' of any inputted values. */
  var element = document.getElementById("carname").value=''
}
