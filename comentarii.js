window.onload=function(){
    const buton = document.getElementById('comment-box');
    const postare = document.getElementById('post');
    const postaresterge = document.getElementById('del');
    function myfunction (){
        var commentBoxValue= document.getElementById('comment-box').value;
        var li = document.createElement('li');
        var text = document.createTextNode(commentBoxValue);
        li.appendChild(text);
        document.getElementById('unordered').appendChild(li);
        var i;
        var values = [],
        keys = Object.keys(localStorage),
        i = keys.length+1;
        cheie = "comm"+i;
        li.setAttribute('id', cheie);
        localStorage.setItem(cheie, commentBoxValue);
    };
    function myfunctionDel(){
        keys = Object.keys(localStorage),
        i = keys.length;
        cheie = "comm"+i;
        i--;
        localStorage.removeItem(cheie);
        document.getElementById(cheie).remove();
    }
    function scrie(){
        var i;
        var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
        while ( i-- ) {
            values.push(localStorage.getItem(keys[i]) );
        }
        var j;
        var lista = document.getElementById('unoredered');
        for (j in values){
            var li = document.createElement('li');
            var text = document.createTextNode(values[j]);
            li.appendChild(text);  
            document.getElementById('unordered').appendChild(li);               
        }
    }
    buton.addEventListener('keyup', function(event){
        if(event.key === 'Enter')
        myfunction();
    });
    postare.addEventListener('click',myfunction);
    postaresterge.addEventListener('click',myfunctionDel);
    scrie();
};