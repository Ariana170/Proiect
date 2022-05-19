

  for( var i=0; i<h.lenght; i++)
    h[i].addEventListener('click', function(){schimbaCuloare(event);});

    document.querySelector("#id-checkbox1").addEventListener("click", function(event) {
        document.getElementById("output-box").innerHTML = "Ha Ha... o sa fie Speak Now";
        event.preventDefault();
    }, false);
    document.querySelector("#id-checkbox2").addEventListener("click", function(event) {
        document.getElementById("output-box").innerHTML = "Ha Ha... o sa fie 1989";
        event.preventDefault();
    }, false);
    for( var i=0; i<h.lenght; i++)
    {
        var x= h[i].target.innerHTML;
        alert(x);
    }