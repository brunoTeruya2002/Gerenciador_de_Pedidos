'use client'
import { ApiConnection } from "@/API/ApiConnection";
import { useEffect, useState } from "react";
import { DateFormat } from "../util/util";
import { pedidosType } from "@/types/pedidosTypes";
import changeScrollBar from '../components/styles/Table.module.css'

export const PedidosTable = () => {
    const [pedidos, setPedidos] = useState<pedidosType[]>([]);

    const [a, setA] = useState<pedidosType|null>(null);

    const rowStyle = "w-1/2 text-s text-gray-700 bg-gray-50";
    const columnStyle = "py-1 w-1/2 text-gray-600 bg-gray-50";

    useEffect(() => {
      getDados();
    }, []);
  
    const getDados = async () => {
      try {
        const data = await ApiConnection(window.location.href).get("/pedidos");
        console.log("Data = ", data.data);
        setPedidos(data.data);
      } catch (e) {
        console.log("Erro: ", e);
      }
    };
    return (
         <>
          <div className="flex rounded-lg overflow-hidden border-8 border-pink-500 w-full justify-center md-table:px-0 ">
                
                <div className={`h-80 overflow-y-auto overflow-x-hidden scrollbar-hide rounded-lg md-table:w-full border-8 border-green-500 ${changeScrollBar.sidebarItemsContainer}`}>
                  <table className="w-full border-collapse rounded-lg">
                  <thead className="text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300 sticky top-0 z-10">
                      <tr className="">
                        <th className="px-6 py-3 font-normal">Marca</th>
                        <th className="px-6 py-3 font-normal">Data</th>
                        <th className={`px-6 py-3 font-normal hidden sm-table:table-cell`}>Valor</th>
                        <th className={`px-6 py-3 font-normal hidden md-table:table-cell`}>Bonificação</th>
                        <th className={`px-6 py-3 font-normal`}>Status</th>
                        <th className="px-6 py-3 font-normal">Opções</th>
                      </tr>
                    </thead>
                  <tbody className="">
                    {pedidos.map((row) => (
                      <tr
                        onClick={() => setA(row)}
                        key={row.id}
                        className="bg-white hover:bg-gray-50 text-xs odd:dark:bg-gray-800 odd:text-gray-400
                         even:dark:bg-gray-900 even:text-gray-400 transition-transform duration-200 ease-in-out 
                         text-center hover:shadow-xl hover:scale-101"
                      >
                        <td className="px-6 py-4 w-[10px]">{row.marca}</td>
                        <td className="px-6 py-4">{DateFormat(row.dataPedido)}</td>
                        <td className={`px-6 py-4 font-normal hidden sm-table:table-cell`}>{row.valorPedido}</td>
                        <td className={`px-6 py-4 font-normal hidden md-table:table-cell`}>{row.valorBonificacao}</td>
                        {/* <td className={`px-6 py-4 ${changeScrollBar.showStatus}`}>{row.status}</td> */}
                        <td className={`px-6 py-4`}>{row.status}</td>
                        <td className="px-6 py-4">
                          <a href="#" className="text-blue-600 hover:underline">
                            Editar
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <input value={a?.dataPedido}/>
            </div>
         </>
        
    )
}