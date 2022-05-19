function alerta(event) { 
    if (event.currentTarget.id == 'grammy')
    alert("Grammy YEY!!");
  }
  const imag = document.getElementById('grammy');
  imag.addEventListener('click', function(){alerta(event);});