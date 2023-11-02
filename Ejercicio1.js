document.addEventListener("DOMContentLoaded", function() {
  // Agregar un event listener al elemento select cuando se carga el documento
  const estadoSelect = document.getElementById("estado");

  estadoSelect.addEventListener("change", function() {
    const estadoSeleccionado = estadoSelect.value;
    const estadoSeleccionadoElement = document.getElementById("estadoSeleccionado");
    estadoSeleccionadoElement.textContent = estadoSeleccionado;
  });
});