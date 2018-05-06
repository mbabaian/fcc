// link to random wikipedia articles
//https://en.wikipedia.org/wiki/Special:Random

$("document").ready(function() {
  // get search term from user
  $("#search").click(function() {
    //conducts search using API
    var searchTerm = $("#text").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        //console.log(data[1][0]); //title
        //console.log(data[2][0]); //description
        //console.log(data[3][0]); //url
        $("#output").html("");
     for (var i = 0; i < data[1].length; i++) {
        $("#output").prepend("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
     }
       
        //clear text from search box 
        $("#text").val("");
      },    
      
      error: function(message) {
        alert("Error has occurred");
      }

    })

  });
  
  // let "enter" submit search text
  $("#text").keypress(function(e){
    if(e.which===13) {
      $("#search").click();
    }
  })

});

 //on clicking the submit button, the api is sent to wikipedia, long with the search term

$(".button2").click(function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
  })
 
  //API sandbox
  //https://www.mediawiki.org/wiki/API:Main_page

