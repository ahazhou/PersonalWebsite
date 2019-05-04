document.addEventListener('DOMContentLoaded', function(){
    var typed = new Typed('#typed', {
        strings: ['Web Developer.', 'Envisioner.', 'Windows Developer.', 'Inventor.', 'Software Engineer.', 'Artist.', 'Statistician.'],
        typeSpeed: 40,
        backSpeed: 20,
        backDelay: 2000,
        loop: true
      });
      
      //Internet Explorer blur doesn't work so kinda hacky solution
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");
      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer
      {
          $("#intro-picture").css("background-image", "url(iebackground.png)");
      }

      //https://www.google.com/search?source=hp&q=dogs
      var projectTypesContainer = document.getElementsByClassName("project-types-container");
      for(var i = 0; i < projectTypesContainer.length; ++i){
          projectTypesContainer[i].childNodes.forEach(function(element){
              if(element.textContent !== undefined){
                  element.onclick = function(){
                      var tosearch = encodeURIComponent(this.textContent);
                      var toopen = 'https://www.google.com/search?source=hp&q=' + tosearch; 
                      window.open(toopen);
                  }
              }
          })
      }
})