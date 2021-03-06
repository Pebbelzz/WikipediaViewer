var wikiArtTitle = "";
var wikiArticleUrl = "";
var wikiArtDesc = "";

//below are auto functions to add data as user types

var script = "";
var textValue = "";

$(document).ready(function(){
  $("#wikiSearch").keyup(function(){
    console.log("keyUP();")
    textValue = $("#wikiSearch").val();
    console.log(textValue);
    script = document.createElement('script');
    script.src = 'http://en.wikipedia.org/w/api.php?action=opensearch&limit=15&format=json&callback=autoSearch&search=' + textValue;
    $('body').append(script);
    console.log(script);
  });
});

function autoInfoToPage(){
  console.log("autoInfoToPage(); was called")
  console.log("wikiArtTitle.length: " + wikiArtTitle.length)
  $("#results").empty();
  for ( i = 0; i < wikiArtTitle.length; i++ ){
    console.log("wikiArtTitle: " + wikiArtTitle);
    $("#results").append("<div id='articleInfo result[" + i + "]'><a href='" + wikiArticleUrl[i] + "' target='_blank'>" + wikiArtTitle[i] + "</a></div> \
      " + wikiArtDesc[i]);
  };
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


//make search box appear once search icon is clicked

$(document).ready(function(){
  $('#searchIcon').click(function(){
    $("#wikiSearch").toggleClass("searchBoxShow");
  });
});
