import React from "react";
import Swal from "sweetalert2";
import BotonPrimario from "./BotonPrimario";

export default function TarjetaProducto({ nombre, precio, imgUrl }) {
    const agregarAlCarrito = () => {
        Swal.fire({
            title: "Producto agregado",
            text: `Has agregado ${nombre} al carrito por ${precio}.`,
            icon: "success",
            showCloseButton: false,
            timer: 5000,
            timerProgressBar: true
        });
    };

    const verDetaller = () => {
        Swal.fire({
            title: "¡Buen trabajo!",
            text: `Viendo detalles de ${nombre} por ${precio}.`,
            icon: "info",
            showCloseButton: false,
            timer: 5000,
            timerProgressBar: true
        });
    };

    return(
        <div className="bg-white rounded-lg shadow-xl p-6 m-4 w-72 flex flex-col items-center justify-between">
            <img src={imgUrl} alt={nombre} className="w-48 h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{nombre}</h3>
            <p className="text-2xl font-bold text-blue-600 mb-4">${precio}</p>
            <div className="flex space-x-2 mt-auto">
                <BotonPrimario texto="Añadir al carrito" onClick={agregarAlCarrito} />
                <BotonPrimario texto="Ver detalles" onClick={verDetaller} />
            </div>

        </div>
    )
}