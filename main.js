
//Precio de entrada, definido en una variable
const valorticket = 200;
//precio de descuuento en cada categoria
let descuento_estudiante = 80;
let descuento_trainee= 50;
let descuento_junior = 15;

//Funcion de donde obtener los valores para mostrar totales
function total_a_pagar() {
  let totalValorTickets = (cantidadEntradas.value) * valorticket;
  let categoria = inputState.value;
  
  if (categoria == 0) {
    totalValorTickets = totalValorTickets;
    
  }
  else if (categoria == 1) {
    totalValorTickets = totalValorTickets - (descuento_estudiante / 100 * totalValorTickets);
  }
  else if (categoria == 2) {
    totalValorTickets = totalValorTickets - (descuento_trainee / 100 * totalValorTickets);
  }
  else if (categoria == 3) {
    totalValorTickets = totalValorTickets - (descuento_junior / 100 * totalValorTickets);
  }

  totalCompra.innerHTML = totalValorTickets;
  document.getElementById("totalCompra").innerHTML = "Monto a pagar: $ "+ totalValorTickets.toFixed(2); 
}

botonCalcular.addEventListener('click', total_a_pagar);

function reset_total_a_pagar() {
    totalPago.innerHTML = "";
}

function limpiar() {
    document.getElementById("totalCompra").innerHTML="Total a Pagar: $";
}

