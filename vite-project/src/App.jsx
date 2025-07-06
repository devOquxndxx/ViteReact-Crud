import './App.css'
import React, { useState } from 'react';
import Swal from 'sweetalert2'
import BotonPrimario from './components/BotonPrimario';
import TarjetaProducto from './components/TarjetaProducto';
import Navegacion from './components/Navegacion';
import { Route, Routes, Link } from 'react-router-dom';
import { UserList } from './components/UserList';
import { UserForm } from './components/UserForm';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [userActionTrigger, setUserActionTrigger] = useState(0);
  const handleEditUser = (user) => {
    setCurrentUser(user);
    setShowUserForm(true);
  };
  const handleSaveUser = () => {
    setCurrentUser(null);
    setShowUserForm(false);
    setUserActionTrigger(prev => prev + 1);
  };
  const handleCancelEdit = () => {
    setCurrentUser(null);
    setShowUserForm(false);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
        <Navegacion />
        <main className='flex flex-col items-center p-4 w-full max-w-7xl mx-auto'>
          <Routes> {/*aqui comenzamos a definir las rutas */}
            <Route path="/" element={
              <>
                <h1 className="text-5xl font-extrabold text-blue-700 mb-8">Nuestra
                  tienda online
                </h1>
                <h2 className='text-4xl font-bold text-gray-800 mt-12 mb-8'>Nuestros
                  productos
                </h2>
                {/* aqui puedo poner tarjetas de productos o otras cosas para la pagina de inicio */}
                <p className="mt-12 text-gray-600">¡Expora nuestra selección!</p>
              </>
            } />

            <Route path="/usuarios" element={
              <>
                <h1 className="text-5xl font-extrabold text-blue-700 mb-8">
                  Gestion de usuarios
                </h1>

                {!showUserForm && (
                  <div className="mb-8">
                    <BotonPrimario
                      texto='Crear nuevo usuario'
                      onClick={() => setShowUserForm(true)}
                    />
                  </div>
                )}

                {showUserForm && (
                  <UserForm
                    currentUser={currentUser}
                    onSave={handleSaveUser}
                    onCancel={handleCancelEdit}
                  />
                )}
                <UserList onEditUser={handleEditUser} onUserCreateOrUpdate={userActionTrigger} />
              </>
            } />

            <Route path="/productos" element={
              <>
                <TarjetaProducto
                  nombre="Smartwatch X1"
                  precio={200}
                  imgUrl={"https://cubitt.com.co/cdn/shop/files/RelojInteligenteCubittCT-VIVA1ObsidianBlack01.webp?v=1748806298"}
                />
              </>
            } />

            <Route path="/ofertas" element={
              <>
                <div className="w-full text-center">
                  <h1 className="text-5xl font-extrabold text-blue-700 mb-8">
                    ¡Ofertas exclusivas!
                  </h1>
                  <p className="text-2xl text-gray-700 mb-12">
                    ¡No te pierdas esta promocion por tiempo limitado!
                  </p>
                  <div className=" flex flex-wrap justify-center gap-6">
                    <TarjetaProducto
                      nombre="Smartwatch X1 (50% OFF)"
                      precio={100}
                      imgUrl={"https://cubitt.com.co/cdn/shop/files/RelojInteligenteCubittCT-VIVA1ObsidianBlack01.webp?v=1748806298"}
                    />
                    <TarjetaProducto
                      nombre="Teclado Mecánico (Envío Gratis)"
                      precio={129}
                      imgUrl={"https://megacomputer.com.co/wp-content/uploads/2025/01/2-88.webp"}
                    />
                    <TarjetaProducto
                      nombre="Mouse Gaming RGB (30% OFF)o"
                      precio={85}
                      imgUrl={"https://www.xmpow.com/cdn/shop/products/GEPC205AB_YTUS_A1_V01_180730_1ef61dd6-b576-41e5-a649-75ea355763a3_1080x.jpg?v=1667562396"}
                    />
                  </div>
                </div>
              </>
            } />

            <Route path="/contacto" element={
              <>
                <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg p-8">
                  <h1 className="text-5xl font-extrabold text-blue-700 mb-8 text-center">
                    Contactanos
                  </h1>
                  <p className="text-lg text-gray-700 mb-8 text-center">
                    ¿Tienes alguna pregunta, comentario o necesitas ayuda? ¡No dudes en contactarnos!
                  </p>
                  <form action="" htmlFor="nombreContacto">
                    <div>
                      <label htmlFor="nombreContacto" className="block text-gray-700 text-sm font-bold mb-2">
                        Tu nombre
                      </label>
                      <input
                        type="text"
                        id="nombreContacto"
                        name="nombre"
                        placeholder="Escribe aqui tu nombre completo"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div>
                      <label htmlFor="emailContacto" className="block text-gray-700 text-sm font-bold mb-2">
                        Tu Email:
                      </label>
                      <input
                        type="email"
                        id="emailContacto"
                        name="email"
                        placeholder="tu@ejemplo.com"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <div>

                      <label htmlFor="mensajeContacto" className="block text-gray-700 text-sm font-bold mb-2">
                        Tu Mensaje:
                      </label>
                      <textarea
                        id="mensajeContacto"
                        name="mensaje"
                        rows="5"
                        placeholder="Escribe tu mensaje aquí..."

                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <BotonPrimario texto="Enviar Mensaje" type="submit" />
                    </div>
                  </form>

                  <div className="mt-12 text-center text-gray-700">
                    <h3 className="text-2xl font-bold mb-4">
                      Tambien puedes encontrarnos en:
                    </h3>
                    <p className="mb-2">
                      <strong className='text-blue-600'> Telefono: </strong>
                      +57 123 456 7890
                    </p>
                    <p className="mb-2">
                      <strong className='text-blue-600'>Horario de atencion:</strong>
                      Lunes a Viernes de 9:00 AM a 6:00 PM
                    </p>
                    <p className="mb-2">
                      <strong className='text-blue-600'>Direccion:</strong>
                      Calle Falsa 123, Ciudad Ejemplo, Colombia
                    </p>
                  </div>
                </div>
              </>
            } />

            <Route path="*" element={
              <>
                <h2 className="text-4xl font-bold text-gray-800 mt-12 mb-8 text-red-500">
                  404 - Pagina no encontrada
                </h2>
              </>
            } />

          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
