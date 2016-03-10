var testJSON = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=Albert";
var wikiArtTitle = "";
var wikiArticleUrl = "";
var wikiArtDesc = "";

function testingAPI(){
    $.ajax({
      url: testJSON,
      dataType: "jsonp",
      success: function(response){
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
