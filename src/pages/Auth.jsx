import React, { useState } from "react";
import "../styles/Auth.css";
import logo from "../assets/images/LogoPlataforma.png";
import { Link } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ email, password });
  };

  return (
    <div className="flex w-full flex-col items-center">
      <img className="logo" src={logo} />
      <form
        className=" bg-stone-700 shadow-lg rounded-md pt-5 px-10 w-1/4"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-zinc-50 block text-xl font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full mt-2 p-2 border rounded-md bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-5">
          <label
            htmlFor="password"
            className="uppercase text-zinc-50 block text-xl font-bold"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            className="w-full mt-2 p-2 border rounded-md bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center my-5">
          <button
            className="bg-orange-500 text-zinc-50 p-2 text-xl font-semibold rounded-md"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </div>

      <nav className="my-5">
        <Link
          className="block text-center my-5 text-zinc-50 text-xs uppercase"
          to="/registrar"
        >
          ¿No tienes una cuenta? Registrate
        </Link>
        <Link
          className="block text-center my-5 text-zinc-50 text-xs uppercase"
          to="/pagos"
        >
          Cancela tu Factura
        </Link>
      </nav>
      </form>
    </div>
  );
}
