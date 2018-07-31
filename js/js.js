$('.carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true
  });

  var menuButton = document.getElementById("menuButton").addEventListener("click", navigation);
  function navigation(){
        let menu = document.getElementById("nav")
        menu.classList.toggle("opened")
  }