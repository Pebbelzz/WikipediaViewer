var apiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
var wikiArtTitle = "";
var wikiArticleUrl = "";
var wikiArtDesc = "";
var searchTerm = "";


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
        console.log(response);
      }

  })
}
