import React, { useState } from "react";
import "../styles/Auth.css";
import logo from "../assets/images/LogoPlataforma.png";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ email, password });
  };

  return (
    <>
      <img className="logo" src={logo} />
      <form
        className=" bg-stone-700 shadow-lg rounded-md py-10 px-20"
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
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
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
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-orange-500 text-zinc-50 p-3 rounded-md"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </>
  );
}