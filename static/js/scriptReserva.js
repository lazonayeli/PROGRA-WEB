function editarReserva(idReserva) {
    // Lógica para cargar los datos de la reserva en la modal de edición
    $.ajax({
        type: 'POST',
        url: '/reserva/editarDatos',
        data: { id_reserva: idReserva },
        success: function(response) {
            if (response.error) {
                alert(response.error);
                return;
            }
            document.getElementById('editarIdReserva').value = response.id_reserva;
            document.getElementById('editarFechaReserva').value = response.fecha_reserva;
            document.getElementById('editarFechaLlegada').value = response.fecha_llegada;
            document.getElementById('editarFechaSalida').value = response.fecha_salida;
            document.getElementById('editarEstadoReserva').value = response.estado_reserva;
            document.getElementById('editarIdCliente').value = response.idcliente;
            document.getElementById('editarIdHabitacion').value = response.idhabitacion;
        },
        error: function(xhr, status, error) {
            console.error(error);
            alert('Error al cargar los datos de la reserva');
        }
    });

    // Modificar el atributo 'action' del formulario con la URL adecuada
    var editarReservaForm = document.getElementById('formEditarReserva');
    editarReservaForm.action = '/reserva/editar/' + idReserva;

    // Abrir la modal de edición
    var myModal = new bootstrap.Modal(document.getElementById('modalEditarReserva'), {
        keyboard: false
    });
    myModal.show();
}
