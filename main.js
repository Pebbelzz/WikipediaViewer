var apiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
var wikiArtTitle = "";
var wikiArticleUrl = "";
var wikiArtDesc = "";
var searchTerm = "";
var lastSearch = "";

function search(){
  searchTerm = $("#wikiSearch").val();
  getAPI();
}

function getAPI(){
    $.ajax({
      url: apiURL + searchTerm,
      dataType: "jsonp",
      success: function(response){
        console.log(searchTerm);
        console.log(apiURL);
        wikiArtTitle = response[1];
        console.log(wikiArtTitle)
        wikiArtDesc = response[2];
        console.log(wikiArtDesc);
        wikiArticleUrl = response[3];
        console.log(wikiArticleUrl);

        infoToPage();

      }
  })
}
function infoToPage(){
    for ( i = 0; i < wikiArtTitle.length; i++ ){
      if(lastSearch == searchTerm){
        $("#results").append("<div id='articleInfo result[" + i + "]'>" + wikiArtTitle[i] + "</div>")
        console.log("searchTerm is the same as lastSearch and .append ran");
        console.log("lastSearch = searchTerm : " + lastSearch + " = " + searchTerm)
      }
      else{
        console.log("lastSearch doesn't  = searchTerm, .html ran")
        console.log("searchTerm: " + searchTerm)
        console.log("lastSearch: " + lastSearch)
        $("#results").html("<div id='articleInfo result[" + i + "]'>" + wikiArtTitle[i] + "</div>")
        console.log("resetting lastSearch");
        lastSearch = searchTerm;
        console.log("lastSearch: " + lastSearch)
        console.log("searchTerm: " + searchTerm)
        }
      }
}
