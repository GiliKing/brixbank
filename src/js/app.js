// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.paddingTop = "15";
    document.getElementById("navbar").style.paddingBottom = "15px";

    document.getElementById("navbar").style.backgroundColor = "#ffffff";

    document.getElementById("logo").style.color = "rgb(42,42,42)";

    document.getElementById("faq").style.color = "rgb(42,42,42)";




  } else {

    document.getElementById("navbar").style.paddingTop = "15";
    document.getElementById("navbar").style.paddingBottom = "15px";

    document.getElementById("navbar").style.backgroundColor = "rgb(42,42,42)";

    document.getElementById("logo").style.color = "#ffffff";

    document.getElementById("faq").style.color = "#ffffff";


  }
}




// rgba(13, 17, 161, 255)

// rgba(136, 174, 79, 255)

// rgba(0, 77, 64, 255)
