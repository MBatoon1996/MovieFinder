var created = true;
var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
      var movie = JSON.parse(httpRequest.responseText);

      if(created){
        $('.movieInfoContainer').append($('<img id="poster"/>' + 
          '<p>Title: <span id="title"></span></p>' + 
          '<p>Year: <span id="year"><span></p>' +
          '<p>Actors: <span id="actors"></span></p>' + 
          '<p>Plot: <span id="plot"></span></p>'));
        created = false;
      }

      document.getElementById("poster").src = movie.Poster;
      document.getElementById("title").innerHTML = movie.Title;
      document.getElementById("year").innerHTML = movie.Year;
      document.getElementById("actors").innerHTML = movie.Actors;
      document.getElementById("plot").innerHTML = movie.Plot;
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}

var searchMovie = function(){
    var input = document.querySelector('input').value;
    if(input){
        httpRequest.open('GET', 'http://www.omdbapi.com/?t=' + input + '&plot=short&apikey=b7da8d63');
        httpRequest.send(null);
    }
}

window.addEventListener('keypress', function(event){
    if(event.key == "Enter")
        searchMovie();
});

