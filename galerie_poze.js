function schimb(x,y){
    const arr=["Taylor Swift la Brit Awards 2021","Taylor Swift la premiera filmului scurt All Too Well","Taylor Swift la premiile Grammy 2021"
               ,"Taylor Swift la premiile VMA 2019","Taylor Swift la Billboard Music Awards 2018","Taylor Swift la Billboard Music Awards 2019",
               "Taylor Swift la American Music Awards 2019"];
        const c = document.getElementById(x).src;
        document.getElementById(x).src = document.getElementById(y).src;
        document.getElementById(y).src = c;
        document.getElementById("para").innerText = arr[parseInt(y)-10];
        const z='9'
        document.getElementById(x).id = z;
        document.getElementById(y).id = x;
        document.getElementById(z).id=y;
  }
  function aparitii(){
    setTimeout(function(){schimb("10","11");},5000);
    setTimeout(function(){schimb("11","12");},10000);
    setTimeout(function(){schimb("12","13");},15000);
    setTimeout(function(){schimb("13","14");},20000);
    setTimeout(function(){schimb("14","15");},25000);
    setTimeout(function(){schimb("15","16");},30000);
    setTimeout(function(){schimb("16","10");},35000);
    
  }
  aparitii();
  setInterval(aparitii,40000);