"use client";

import { PedidosHeader } from "@/components/PedidosHeader";
import { PedidosTable } from "@/components/PedidosTable";

export default function Home() {
  return (
    <div
      style={{ fontFamily: "Montserrat" }}
      className="items-center h-screen w-full relative shadow-md sm:rounded-lg md:p-0"
    >
      <div className="max-w-4xl m-auto h-full">
        <PedidosHeader />
        <PedidosTable />
      </div>
    </div>
  );
}
