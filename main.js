var xhr = new XMLHttpRequest();
var random = "http://en.wikipedia.org/wiki/Special:Random"
var inputSearch = "";

function search(){
  inputSearch = document.getElementById('wikiSearch').placeholder;
  xhr.open("GET", "https://en.wikipedia.org/w/api.php?action=query&titles=" + inputSearch + "&prop=info&format=jsonfm" );
  xhr.send();
  console.log(xhr);
}

var testJSON = "https://en.wikipedia.org/w/api.php?action=query&titles=Albert%20Einstein&prop=info&format=jsonfm";

function testingAPI(){
  xhr.open("GET", testJSON);
  xhr.send();
  console.log(xhr);
}
