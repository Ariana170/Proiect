window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("head").style.fontSize = "30px";
  } else {
    document.getElementById("head").style.fontSize = "90px";
  }
}