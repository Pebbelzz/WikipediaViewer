var testJSON = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=Albert";
var testList = {};

function testingAPI(){
  console.log(testList);
  $.ajax({
      url: testJSON,
      dataType: "jsonp",
      success: function(response){
        testList = response[1];

      }

  })
}
