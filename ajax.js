var xml = new XMLHttpRequest();
var surs = "mv.txt";
xml.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        var arra = JSON.parse(this.responseText);
        scrie(arra);
    }
};
xml.open("GET", surs, true);
xml.send();
    function scrie(arr) {
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++) {
            out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a><br>';
        }
        document.getElementById("id01").innerHTML = out;
    }