var apiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
var wikiArtTitle = "";
var wikiArticleUrl = "";
var wikiArtDesc = "";
var searchTerm = "";
var lastSearch = "";


//static functions that return results once user presses enter or hits submit button

function search(){
  searchTerm = $("#wikiSearch").val();
  getAPI();
}

function getAPI(){
    $.ajax({
      url: apiURL + searchTerm,
      dataType: "jsonp",
      success: function(response){
        //console.log(searchTerm);
        //console.log(apiURL);
        wikiArtTitle = response[1];
        //console.log(wikiArtTitle)
        wikiArtDesc = response[2];
        //console.log(wikiArtDesc);
        wikiArticleUrl = response[3];
        //console.log(wikiArticleUrl);
        infoToPage();
      }
  })
}
function infoToPage(){
    console.log("infoToPage() was called")
    for ( i = 0; i < wikiArtTitle.length; i++ ){
      if(lastSearch == searchTerm){
        $("#results").append("<div id='articleInfo result[" + i + "]'><a href='" + wikiArticleUrl[i] + "' target='_blank'>" + wikiArtTitle[i] + "</a></div> \
          " + wikiArtDesc[i]);
        //console.log("searchTerm is the same as lastSearch and .append ran");
        //console.log("lastSearch = searchTerm : " + lastSearch + " = " + searchTerm)
      }
      else{
        //console.log("lastSearch doesn't  = searchTerm, .html ran")
        //console.log("searchTerm: " + searchTerm)
        //console.log("lastSearch: " + lastSearch)
        $("#results").html("<div id='articleInfo result[" + i + "]'><a href='" + wikiArticleUrl[i] + "' target='_blank'>" + wikiArtTitle[i] + "</a></div> \
          " + wikiArtDesc[i]);
        //console.log("resetting lastSearch");
        lastSearch = searchTerm;
        //console.log("lastSearch: " + lastSearch)
        //console.log("searchTerm: " + searchTerm)
        }
      }
}


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
