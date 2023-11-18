import React from "react";

export default function Factura() {

  const pagar = () => {
    console.log("pagando");
  };
  
  return (
    <>
      <div className="flex flex-col items-center p-5 gap-1">
        <h2 className="text-zinc-50 block text-lg">Número de Factura</h2>
        <p className="text-zinc-50 block text-lg font-bold">01</p>
      </div>

      <div className="h-0.5 w-10/12 bg-zinc-50" />

      <div className="flex w-full">
        <div className="flex flex-col w-4/12 items-center p-5 gap-1">
          <h2 className="text-zinc-50 block text-lg">Fecha</h2>
          <p className="text-zinc-50 block text-lg font-bold">18/11/2023</p>
        </div>

        <div className="flex flex-col w-4/12 items-center p-5 gap-1">
          <h2 className="text-zinc-50 block text-lg">Nombre del Cliente</h2>
          <p className="text-zinc-50 block text-lg font-bold text-center">
            Sergio Andres Ortiz Ibañez
          </p>
        </div>

        <div className="flex flex-col w-4/12 items-center p-5 gap-1">
          <h2 className="text-zinc-50 block text-lg">Vendedor</h2>
          <p className="text-zinc-50 block text-lg font-bold text-center">
            Miller David Alvarez Blanco
          </p>
        </div>
      </div>

      <div className="flex w-full">
        <div className="flex flex-col w-4/12 items-center p-5 gap-1">
          <h2 className="text-zinc-50 block text-lg">Cantidad Aves</h2>
          <p className="text-zinc-50 block text-lg font-bold">1000</p>
        </div>

        <div className="flex flex-col w-4/12 items-center p-5 gap-1">
          <h2 className="text-zinc-50 block text-lg">Cantidad Kilos</h2>
          <p className="text-zinc-50 block text-lg font-bold">8000</p>
        </div>

        <div className="flex flex-col w-4/12 items-center p-5 gap-1">
          <h2 className="text-zinc-50 block text-lg">Precio del kilo</h2>
          <p className="text-zinc-50 block text-lg font-bold">18000</p>
        </div>
      </div>

      <div className="h-0.5 w-10/12 bg-zinc-50" />

      <div className="flex w-full items-center justify-around p-5">
        <div className="flex items-center gap-10">
          <h2 className="text-orange-500 block text-3xl">Total:</h2>
          <p className="text-zinc-50 block text-3xl font-bold">8'200.150</p>
        </div>

        <button
          className="bg-orange-500 text-zinc-50 p-2 text-xl font-semibold rounded-md"
          onClick={pagar}
        >
          Pagar Factura
        </button>
      </div>
    </>
  );
}
