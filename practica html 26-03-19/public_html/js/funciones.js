/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Prueba con el checked*/
/*function on(){
  console.log("Hemos pulsado en on");
}

function off(){
  console.log("Hemos pulsado en off");
}

var checkbox = document.getElementById('checkbox');

checkbox.addEventListener("change", comprueba, false);

function comprueba(){
  if(checkbox.checked){
      on();
  }else{
     off();
  }
}*/


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

/*$("#add-class").click(function() {
    $("#checkbox").addClass("#fondo-switch");
});

$("#remove-class").click(function(){
   $("#checkbox").removeClass("#fondo-switch"); 
});*/