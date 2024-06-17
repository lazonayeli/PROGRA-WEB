// Función para cargar los datos de la habitación seleccionada en la modal de edición
function editarCliente(idcliente, nombre, apellido, direccion , num_pasaporte) {
    document.getElementById('editarIdCliente').value = idcliente;
    document.getElementById('editarNombre').value = nombre;
    document.getElementById('editarApellido').value = apellido;
    document.getElementById('editarDireccion').value = direccion;
    document.getElementById('editarNumPasaporte').value = num_pasaporte;

    // Modificar el atributo 'action' del formulario con la URL adecuada
    var editarClienteForm = document.getElementById('editarClienteForm'); // Cambiado de editarOficinaForm a editarHabitacionForm
    editarClienteForm.action = '/cliente/editar/' + idcliente; // Cambiado de idOficina a idhabitacion

    // Abrir la modal de edición
    var myModal = new bootstrap.Modal(document.getElementById('modalEditarCliente'), {
        keyboard: false
    });
    myModal.show();
}

 