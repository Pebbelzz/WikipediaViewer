var wikiArtTitle = "";
var wikiArticleUrl = "";
var wikiArtDesc = "";
var searchTerm = "";
var lastSearch = "";



//below are auto functions to add data as user types

var script = "";
var textValue = "";

$(document).ready(function(){
  $("#wikiSearch").keyup(function(){
    console.log("keyUP();")
    textValue = $("#wikiSearch").val();
    console.log(textValue);
    script = document.createElement('script');
    script.src = 'http://en.wikipedia.org/w/api.php?action=opensearch&limit=10&format=json&callback=autoSearch&search=' + textValue;
    $('body').append(script);
    console.log(script);
    searchTerm = textValue;
    console.log("searchTerm: " + searchTerm + " & lastSearch: " + lastSearch)
  });
});

function autoInfoToPage(){
  console.log("autoInfoToPage(); was called")
  console.log("wikiArtTitle.length: " + wikiArtTitle.length)
  console.log("searchTerm: " + searchTerm + " & lastSearch: " + lastSearch)
  if(searchTerm != lastSearch){
    console.log("searchTerm !== lastSearch: " + searchTerm !== lastSearch)
    $("#results").empty();
  };
  for ( i = 0; i < wikiArtTitle.length; i++ ){
    console.log("wikiArtTitle: " + wikiArtTitle);
    $("#results").append("<div id='articleInfo result[" + i + "]'><a href='" + wikiArticleUrl[i] + "' target='_blank'>" + wikiArtTitle[i] + "</a></div> \
      " + wikiArtDesc[i]);
  };
  lastSearch = searchTerm;
};

function autoSearch(data){
  $("#results").html = data;
  console.log("autoSearch()");
  console.log(data);
  wikiArtTitle = data[1];
  wikiArtDesc = data[2];
  wikiArticleUrl = data[3];
  console.log("calling autoinfoToPage();");
  autoInfoToPage();
}
